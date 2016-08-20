/// <reference path="../../../../typings/threejs/three.d.ts"/>

declare var SimplexNoise: any;

import {GetTerrainVertexShader} from "../../shaders/TerrainShader_Vertex.glsl"
import {GetTerrainFragmentShader} from "../../shaders/TerrainShader_Fragment.glsl"
import {AddShaderChunks} from "../../shaders/ShaderChunks";
import {Noise} from "./Noise";
import {Chunk} from "./Chunk";

export class Generator {
	private noiseGenerator: any;
	private mountainNoiseGenerator: Noise;
	private mountainMultiplierNoiseGenerator: any;
	private textureLoader: THREE.TextureLoader;
	private grassTexture: THREE.Texture;
	private shaders: any;
	private segments: number;

	private renderedGroundMaterial: THREE.Material;
	private renderedSegments: number;

	constructor(textureLoader?: THREE.TextureLoader) {
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
			map: this.grassTexture || THREE.ImageUtils.loadTexture( 'images/grass.png' )
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

		return material;

	}

	private tempVertex: number;

	public createTerrain(x: number, y: number): Chunk {
		x *= 1000;
		y *= 1000;

		let data = this.getTerrainData(x, y);
		let ground_rendered_geometry = new THREE.PlaneBufferGeometry(1000, 1000, this.renderedSegments - 1, this.renderedSegments - 1);
		ground_rendered_geometry.rotateX( - Math.PI / 2 );
		ground_rendered_geometry.translate(x, 0, y);

		let vertices = ground_rendered_geometry.attributes.position.array;
		for ( var i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3 ) {
			vertices[ j + 1 ] = data[ i ];
		}

		let renderedGround = new THREE.Mesh(ground_rendered_geometry, this.renderedGroundMaterial);

		return new Chunk(renderedGround);
	}

	private fastSigmoid(x: number): number {
		return x / (1 + Math.abs(x));
	}

	private getMountainNoise(x: number, y: number): number {
		let base_frequency = 1;
		let noise = (this.worleyNoise(x, y, 1000) * 500) - 200;
		//let noise = this.mountainNoiseGenerator.cellular(x * base_frequency, y * base_frequency);

		//this.mountainMultiplierNoise = (this.mountainMultiplierNoiseGenerator.noise(x / 5000, y / 5000) * 0.5) + 0.5;
		return noise;
		//return 10 * this.fastSigmoid(this.mountainMultiplierNoise) * this.mountainNoise;
	}

	private worleyNoise(xCoordinate: number, yCoordinate: number, scale: number) {
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
	}

	private getTerrainData(x_: number, y_: number): Uint8Array {
		let size = this.renderedSegments * this.renderedSegments;
		let data = new Uint8Array( size );
		let quality = 1;
		console.log(x_);

		/*	for ( var i = 0; i < size; i ++ ) {

				let x = (i % this.renderedSegments);
				let y = ~~(( i / this.renderedSegments ));
				data[ i ] += Math.abs( this.mountainMultiplierNoiseGenerator.noise(x / 50, y / 50) * 100 * 1.75 );

			} */
		let i = 0;

		for(let y = 0; y < this.renderedSegments; y++) {
			for(let x = 0; x < this.renderedSegments; x++) {
				data[i] += Math.abs( this.mountainMultiplierNoiseGenerator.noise( (-x - y_) / 150, (y + x_) / 150) * 100 * 1.75);
				i++;
			}
		}


		return data;

	}
}