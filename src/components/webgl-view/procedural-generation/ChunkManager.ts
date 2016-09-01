import {ChunkGenerator} from './ChunkGenerator';
import {Player} from '../player/Player';
import {Chunk} from "../../../models/Chunk";
import {DebugService} from '../../../services/debug.service';
import {Subject} from 'rxjs/Subject';

import {ViewOptionService} from '../../../services/view-options.service';
import {NoiseOptionService} from '../../../services/noise-options.service';
import {NoiseModel} from '../../../models/noise.model';
import {ThreeDOptionsModel} from '../../../models/three-d-options.model';
import {Noise} from './Noise';

// Chunks are 1000 by 1000 units
export class ChunkManager {
	// Generates the chunks using noise
	private chunkGenerator: ChunkGenerator; 
	private worker: Worker;
	private receivedWorkerData: boolean;
	private unloadAllChunksOnNextUpdate: boolean;

	// Noise generator
	private noise: Noise;

	// Stores all loaded chunks
	// Note: Chunk coordinates are stored as type THREE.Vector2, but are converted to a THREE.Vector3
	// to be rendered. The y value of the actual chunk is zero, while the x and z values of the actual chunk
	// are the x and y values of the Vector2
	private chunks: Map<string, Chunk>;

	// Coordinates
	private playerCoordinates: THREE.Vector3;

	// Lists
	private unloadList: THREE.Vector2[];
	private loadList: THREE.Vector2[];

	// Update the debugger
	private debugChunkStream: Subject<Chunk[][]>;
	private noiseModelStream: Subject<NoiseModel>;
	private viewOptionsStream: Subject<ThreeDOptionsModel>;

	constructor(private player: Player, private scene: THREE.Scene, private asyncGenerateChunks: boolean,
		private renderDistance: number, private chunkSize: number, private segments: number, 
		private noiseOptionService: NoiseOptionService, private viewOptionService: ViewOptionService, private debugService?: DebugService) {

		this.chunkGenerator = new ChunkGenerator(this.chunkSize, this.segments, null);

		this.noiseModelStream = noiseOptionService.getRootNoiseStream();
		this.noiseModelStream.subscribe(this.onNoiseUpdate.bind(this));
		this.viewOptionsStream = this.viewOptionService.viewOptionStream;
		this.viewOptionsStream.subscribe(this.onViewOptionsUpdate.bind(this));

		// By default, all chunks that have centers less than 5000 units away from this.playerCoordinates will be loaded
		this.renderDistance = this.renderDistance || 5000;
		this.chunkSize = this.chunkSize || 1000;
		this.noise == null;

		if(this.renderDistance % this.chunkSize != 0) {
			throw new Error("Render distance must be evenly divisible by chunk size. (rd=" + this.renderDistance+ ",cs=" + this.chunkSize + ")");
		}


		this.chunks = new Map<string, Chunk>();

		if(this.asyncGenerateChunks) {
			this.asyncGenerateChunks = true;
			//this.initializeWorker();
		}
	}

	private initializeWorker() {
		this.receivedWorkerData = true;
		let myWorker = require("worker!../../../workers/ChunkGenerator.worker.ts");
		this.worker = new myWorker();
		this.worker.postMessage({type: "setGeneratorSettings", data: {chunkSize: this.chunkSize}})
		this.worker.onmessage = (event) => {
			this.onWorkerSendChunks(event.data);
		}
	}

	private onViewOptionsUpdate(newViewOptions: ThreeDOptionsModel) {
		this.renderDistance = newViewOptions.renderDistance;
		this.segments = newViewOptions.segmentsPerChunk;
		this.chunkSize = newViewOptions.chunkSize;
		this.chunkGenerator.setChunkSize(newViewOptions.chunkSize);
		this.chunkGenerator.setSegments(newViewOptions.segmentsPerChunk);
		this.unloadAllChunksOnNextUpdate = true;
	}

	private onNoiseUpdate(newNoise: NoiseModel) {
		console.log("updating noise with model", newNoise);
		this.noise = new Noise(newNoise);
		this.unloadAllChunksOnNextUpdate = true;
		this.chunkGenerator.setNoiseGenerator(this.noise);
	}

	private onWorkerSendChunks(data: Array<{coords: Array<number>, geometryData: {vertices: Float32Array, normal: Float32Array, uvs: Float32Array, indices: Uint32Array}}>) {
		this.receivedWorkerData = true;
		let material = new THREE.MeshLambertMaterial();
		for(let i = 0; i < data.length; i++) {
			let geometryData = data[i].geometryData;
			let chunk = this.chunkGenerator.generateChunkFromGeometryData(new THREE.Vector2(data[i].coords[0], data[i].coords[1]), geometryData); 
			this.chunks.set(this.serializeVec2(chunk.chunkCoordinates), chunk);
			this.scene.add(chunk.mesh);
		}	
		
	}

	public update(): void {
		if(!this.noise) return;
		if(!this.updatePlayerCoordinates() && !this.unloadAllChunksOnNextUpdate) return;
		console.log("chunk map: ", this.chunks);
		console.log("updating unload list");
		this.updateUnloadList(this.unloadAllChunksOnNextUpdate);
		this.unloadAllChunksOnNextUpdate = false;
		console.log("finished updating unload list:", this.unloadList, "actually unloading chunks now");
		this.unloadChunks();
		console.log("upadting load list");
		this.updateLoadList();
		console.log("loading chunks");
		if(this.asyncGenerateChunks && this.loadList.length > 0 && this.receivedWorkerData) {
			this.receivedWorkerData = false;
			this.giveWorkerLoadList();
		}
		else {
			this.loadChunks();
		}
		console.log("done update");
	}

	// returns true if the player coordinates are different
	private updatePlayerCoordinates(): boolean {
		let result = !this.playerCoordinates || !this.player.coordinates.equals(this.playerCoordinates)
		this.playerCoordinates = this.player.coordinates.clone();
		return result;
	}

	private updateLoadList(): void {
		// Generate a list of chunk coordinates that are within this.renderDistance units of the player coordinates
		this.loadList = new Array<THREE.Vector2>();

		let chunkRadius = this.renderDistance/this.chunkSize;
		let playerChunkCoordinates = this.realCoordsToChunkCoords(new THREE.Vector2(this.playerCoordinates.x, this.playerCoordinates.z));

		// Iterates over a square of coordinates around the player
		for(let i = -chunkRadius + playerChunkCoordinates.x; i <= chunkRadius + playerChunkCoordinates.x; i++) {
			for(let j = -chunkRadius + playerChunkCoordinates.y; j <= chunkRadius + playerChunkCoordinates.y; j++) {
				let loc = new THREE.Vector3(i * this.chunkSize, 0, j * this.chunkSize);
				// If the chunk is close enough and it's not already loaded, add the chunk to the load list
				if(this.playerCoordinates.distanceTo(loc) <= this.renderDistance && !this.chunks.has(i + "," + j)) {
					this.loadList.push(new THREE.Vector2(i, j));
				}
			}
		}
		console.log("loadList went from x", -chunkRadius + playerChunkCoordinates.x, "to ", chunkRadius + playerChunkCoordinates.x, "y", -chunkRadius + playerChunkCoordinates.y, "to", chunkRadius + playerChunkCoordinates.y, this.loadList)
	}

	private updateUnloadList(unloadAllChunks?: boolean): void {
		this.unloadList = new Array<THREE.Vector2>();
		// Iterate through each chunk
		this.chunks.forEach((chunk, key) => {
			let chunkCoords = this.deserializeVec2(key)
			let realCoords = this.chunkCoordToRealCoords(chunkCoords);

			// If the chunk is out of render distance, add it to the unload list
			let realCoords3 = new THREE.Vector3(realCoords.x, 0, realCoords.y);
			if(this.playerCoordinates.distanceTo(realCoords3) > this.renderDistance || unloadAllChunks) {
				this.unloadList.push(chunkCoords);
			}
		})
	}

	private giveWorkerLoadList(): void {
		console.log("this.loadList:", this.loadList);
		this.worker.postMessage({type: "generateChunks", data: this.loadList});
	}

	private loadChunks(): void {
		for(let i = 0; i < this.loadList.length; i++) {
			this.loadChunk(this.loadList[i]);
		}	
	}

	private unloadChunks(): void {
		for(let i = 0; i < this.unloadList.length; i++) {
			this.unloadChunk(this.unloadList[i]);
		}	

	}

	private loadChunk(chunkCoordinates: THREE.Vector2) {
		// The ChunkGenerator handles all mesh generation, we just have to add it to the chunk container (map) and the scene
		let chunk = this.chunkGenerator.generateChunk(chunkCoordinates);
		this.chunks.set(this.serializeVec2(chunkCoordinates), chunk);
		this.scene.add(chunk.mesh);
	}

	private unloadChunk(chunkCoordinates: THREE.Vector2) {
		let serializedChunkCoords = this.serializeVec2(chunkCoordinates);
		let chunk = this.chunks.get(serializedChunkCoords);
		this.scene.remove(chunk.mesh);
		chunk.mesh.geometry.dispose();
		this.chunks.delete(serializedChunkCoords);
	}

	private getChunkCoordinates(vec: THREE.Vector3): THREE.Vector3 {
		vec.x = Math.floor(vec.x/1000);
		vec.z = Math.floor(vec.z/1000);
		return vec;
	}

	// Utility - ignore
	private serializeVec2(vec: THREE.Vector2): string {return vec.x + "," + vec.y;}
	private serializeVec3(vec: THREE.Vector3): string {return vec.x + "," + vec.y + "," + vec.z;}
	private deserializeVec2(vec: string): THREE.Vector2 {
		let numbers = vec.split(",").map(parseFloat);
		if(numbers.length < 2) { 
			throw new Error("Cannot deserialize vector 2 " + vec); 
		}
		return new THREE.Vector2(numbers[0], numbers[1]);
	}
	private deserializeVec3(vec: string): THREE.Vector3 {
		let numbers = vec.split(",").map(parseFloat);
		if(numbers.length < 3) { 
			throw new Error("Cannot deserialize vector 3 " + vec); 
		}
		return new THREE.Vector3(numbers[0], numbers[1], numbers[2]);
	}
	private chunkCoordToRealCoords(vec: THREE.Vector2): THREE.Vector2 {
		return new THREE.Vector2(vec.x * this.chunkSize, vec.y * this.chunkSize);
	}
	private realCoordsToChunkCoords(vec: THREE.Vector2): THREE.Vector2 {
		return new THREE.Vector2(Math.floor(vec.x / this.chunkSize), Math.floor(vec.y / this.chunkSize));
	}
}