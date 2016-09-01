/// <reference path="../../../../typings/threejs/three.d.ts"/>

declare var SimplexNoise: any;

import {GetTerrainVertexShader} from "../../shaders/TerrainShader_Vertex.glsl"
import {GetTerrainFragmentShader} from "../../shaders/TerrainShader_Fragment.glsl"
import {AddShaderChunks} from "../../shaders/ShaderChunks";
import {Noise} from "./Noise";
import {Chunk} from "../../../models/Chunk";

export class ChunkGenerator {
	private mountainNoiseGenerator: Noise;
	private mountainMultiplierNoiseGenerator: any;
	private textureLoader: THREE.TextureLoader;
	private grassTexture: THREE.Texture;
	private shaders: any;

	private renderedGroundMaterial: THREE.Material;
	private renderedSegments: number;

	private groundMaterial: THREE.Material;

	constructor(public chunkSize: number, public segments: number, private noiseGenerator: Noise) {
		this.groundMaterial = new THREE.MeshLambertMaterial();

		//this.noiseGenerator = this.noiseGenerator ? this.noiseGenerator : new SimplexNoise();

		/*
		AddShaderChunks();

		this.textureLoader = textureLoader || new THREE.TextureLoader();
		this.noiseGenerator = new SimplexNoise();
		this.mountainNoiseGenerator = new Noise();
		this.mountainMultiplierNoiseGenerator = new SimplexNoise();
		this.shaders =  { terrainLambert : THREE.ShaderLib[ 'lambert' ] };
		this.segments = 5;
		this.renderedSegments = 100;

		let myProperties = {
			lights: true,
			fog: true,
			transparent: true,
			color: new THREE.Color(10, 150, 20),
			map: null // this.grassTexture || THREE.ImageUtils.loadTexture( 'images/grass.png' )
		};

		let myUniforms = {
			opacity: { type: "f", value: 0.4 },
			color: new THREE.Vector3(255, 100, 0),
			time: { value: 1.0 }
		};

		this.renderedGroundMaterial = this.terrainLambertMaterial(myProperties, myUniforms);
	}

	private terrainLambertMaterial(parameters, uniforms_) {

		var material = new THREE.ShaderMaterial( {
			vertexShader: GetTerrainVertexShader(),
			fragmentShader: GetTerrainFragmentShader(),
			uniforms: THREE.UniformsUtils.merge( [ 
				uniforms_, 
				THREE.ShaderLib[ 'lambert' ].uniforms ] ),
			lights: true
		} );

		material.setValues( parameters )

		return material; */
	}

	private tempVertex: number;

	/*public generateChunk(chunkCoords: THREE.Vector2): Chunk {
		let realCoords = new THREE.Vector3(chunkCoords.x * this.chunkSize, 0, chunkCoords.y * this.chunkSize);

		let material = new THREE.MeshLambertMaterial();

		let geometry = new THREE.PlaneGeometry(this.chunkSize, this.chunkSize, this.segments, this.segments);
		//geometry.translate(this.chunkSize / 2, this.chunkSize / 2, 0)

		for ( var i = 0; i < geometry.vertices.length; i++ ) {
			var vertex = geometry.vertices[i];
			let noiseCoords = new THREE.Vector2((realCoords.x + vertex.x)/5000, (-realCoords.z + vertex.y)/5000);
			vertex.z = this.noiseGenerator.noise(noiseCoords.x, noiseCoords.y) * 1000;
		}
		geometry.computeFaceNormals();
		geometry.computeVertexNormals();

		let mesh = new THREE.Mesh(geometry, material);
		mesh.rotation.x = Math.PI / -2;
		mesh.receiveShadow = true;
		mesh.translateX(realCoords.x);
		mesh.translateY(-realCoords.z);
		return new Chunk(mesh);
	} */

	public generateChunk(chunkCoords: THREE.Vector2): Chunk {
		let realCoords = new THREE.Vector3(chunkCoords.x * this.chunkSize, 0, chunkCoords.y * this.chunkSize);
		let geometry = new THREE.PlaneBufferGeometry(this.chunkSize, this.chunkSize, this.segments, this.segments);
		let vertices = geometry.attributes.position.array;
		for(let i = 2; i < vertices.length; i += 3) {
			let noiseCoords = new THREE.Vector2((realCoords.x + vertices[i - 2])/5000, (-realCoords.z + vertices[i - 1])/5000);
			vertices[i] += this.noiseGenerator.noise(noiseCoords.x, noiseCoords.y);
		}
		console.log("vertices[1] = ", vertices[1]);
		geometry.computeVertexNormals();

		geometry.rotateX( -Math.PI/2);
		geometry.translate(realCoords.x, 0, realCoords.z);
		let mesh = new THREE.Mesh(geometry, this.groundMaterial);
		mesh.receiveShadow = true;
		return new Chunk(mesh, chunkCoords);
	}

	public generateChunkGeometryData(chunkCoords: THREE.Vector2): {vertices: Float32Array, normal: Float32Array, uvs: Float32Array, indices: Uint32Array} {
		let geometryData: any = {};

		let realCoords = new THREE.Vector3(chunkCoords.x * this.chunkSize, 0, chunkCoords.y * this.chunkSize);
		let geometry = new THREE.PlaneBufferGeometry(this.chunkSize, this.chunkSize, this.segments, this.segments);
		geometryData.vertices = geometry.attributes.position.array;
		geometryData.normal = geometry.attributes.normal.array;
		geometryData.uv = geometry.attributes.uv.array;
		geometryData.indices = geometry.getIndex().array;
		for(let i = 2; i < geometryData.vertices.length; i += 3) {
			let noiseCoords = new THREE.Vector2((realCoords.x + geometryData.vertices[i - 2])/5000, (-realCoords.z + geometryData.vertices[i - 1])/5000);
			geometryData.vertices[i] += this.noiseGenerator.noise(noiseCoords.x, + noiseCoords.y) * 1000;
		}
		return geometryData;
	}

	public generateChunkFromGeometryData(chunkCoords: THREE.Vector2, geometryData: {vertices: Float32Array, normal: Float32Array, uvs: Float32Array, indices: Uint32Array}): Chunk {
			let realCoords = new THREE.Vector3(chunkCoords.x * this.chunkSize, 0, chunkCoords.y * this.chunkSize);

			let geometry = new THREE.BufferGeometry(); 
			geometry.setIndex( new THREE.BufferAttribute( geometryData.indices, 1 ) );
			geometry.addAttribute( 'position', new THREE.BufferAttribute(geometryData.vertices, 3));
			geometry.addAttribute('normal', new THREE.BufferAttribute(geometryData.normal, 3));
			geometry.addAttribute('uv', new THREE.BufferAttribute(geometryData.uvs, 2));
			

			geometry.computeVertexNormals();
			geometry.rotateX( -Math.PI/2);
			geometry.translate(realCoords.x, 0, realCoords.z);

			let mesh = new THREE.Mesh(geometry, this.groundMaterial);
			mesh.receiveShadow = true;

			let chunk = new Chunk(mesh, chunkCoords);
			return chunk;
	}

	public setChunkSize(newChunkSize: number) {
		this.chunkSize = newChunkSize;
	}

	public setSegments(newSegments: number) {
		this.segments = newSegments;
	}

	public setNoiseGenerator(newNoise: Noise) {
		this.noiseGenerator = newNoise;
	}

	private fastSigmoid(x: number): number {
		return x / (1 + Math.abs(x));
	}

	/*private worleyNoise(xCoordinate: number, yCoordinate: number, scale: number) {
		function cos(angle) {
				if (angle.length) return angle.map(cos);
				return Math.cos(angle);
		}
		function fract(x) {
				if (x.length) return x.map(fract);
				return x - Math.floor(x);
		}
		function floor(x) {
				if (x.length) return x.map(floor);
				return Math.floor(x);
		}
		function vec2(x, y) {
				if (x == null) x = 0;
				if (y == null) y = x;
				return [x, y]
		}
		vec2.add = function anonymous(out,a,b) {
			out[0] = a[0] + b[0];
			out[1] = a[1] + b[1]
			return out;
		}
		function length(x) {
				var sum = 0;
				for (var i = 0; i < x.length; i++) {
						sum += x[i]*x[i];
				}
				return Math.sqrt(sum);
		}
		function r (n) {
				return fract(cos(n * 89.42) * 343.42);
		};
		function r_vec2 (n) {
				return [r(n[0] * 23.62 - 300.0 + n[1] * 34.35), r(n[0] * 45.13 + 256.0 + n[1] * 38.89)];
		};
		function worley (n, s) {
				var dis = 2.0;
				for (var x = -1; x <= 1; x++) {
					for (var y = -1; y <= 1; y++) {
						var p = vec2.add([], floor([n[0] / s, n[1] / s]), [x, y]);
						var d = length([r_vec2(p)[0] + x - fract([n[0] / s, n[1] / s])[0], r_vec2(p)[1] + y - fract([n[0] / s, n[1] / s])[1]]);
						if (dis > d) {
						dis = d;
						};
					};
				};
				return 1.0 - dis;
		};
		return worley([xCoordinate, yCoordinate], scale)
	} */
}