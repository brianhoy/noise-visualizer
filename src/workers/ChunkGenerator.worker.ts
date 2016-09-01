import {Chunk} from "../models/Chunk";
import {ChunkGenerator} from '../components/webgl-view/procedural-generation/ChunkGenerator';

declare var self: any;
declare var SimplexNoise: any;

self.importScripts('public/scripts/vendor/three.min.js', 'public/scripts/vendor/simplex.js');

class ChunkGeneratorWorker {
	private chunkGenerator: ChunkGenerator;

	constructor() {
		this.chunkGenerator = new ChunkGenerator(1000, 10, null);

		self.onmessage = (event: MessageEvent) => {
			switch(event.data.type) {
				case "generateChunks":
					let chunks = this.generateChunks(event.data.data);
					//postMessage(chunks);
					break;
				case "setGeneratorSettings":
					let chunkSize = event.data.data.chunkSize;
					this.chunkGenerator.chunkSize = chunkSize;
			}
		}
	}

	public generateChunks(chunkCoords: THREE.Vector2[]): Array<{coords: Array<number>, geometryData: {vertices: Float32Array, normal: Float32Array, uvs: Float32Array, indices: Uint32Array}}> {
		let chunks = new Array<{coords: Array<number>, geometryData: {vertices: Float32Array, normal: Float32Array, uvs: Float32Array, indices: Uint32Array}}>();
		for(let chunkCoord of chunkCoords) {
			let geometryData = this.chunkGenerator.generateChunkGeometryData(chunkCoord);
			chunks.push({coords: [chunkCoord.x, chunkCoord.y], geometryData: geometryData});
		}
		return chunks;
	}
}
let chunkGeneratorWorker: ChunkGeneratorWorker = new ChunkGeneratorWorker();
console.log("ChunkGenerator.worker loaded");

// Main thread will send terrain to be generated periodically
// If new terrain is sent while the worker is still working on the last set of terrain, 
// send over what's completed and start working on the new set



