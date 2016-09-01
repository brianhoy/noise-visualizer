/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ChunkGenerator_1 = __webpack_require__(1);
	self.importScripts('public/scripts/vendor/three.min.js', 'public/scripts/vendor/simplex.js');
	var ChunkGeneratorWorker = (function () {
	    function ChunkGeneratorWorker() {
	        var _this = this;
	        this.chunkGenerator = new ChunkGenerator_1.ChunkGenerator(1000, 10, null);
	        self.onmessage = function (event) {
	            switch (event.data.type) {
	                case "generateChunks":
	                    var chunks = _this.generateChunks(event.data.data);
	                    //postMessage(chunks);
	                    break;
	                case "setGeneratorSettings":
	                    var chunkSize = event.data.data.chunkSize;
	                    _this.chunkGenerator.chunkSize = chunkSize;
	            }
	        };
	    }
	    ChunkGeneratorWorker.prototype.generateChunks = function (chunkCoords) {
	        var chunks = new Array();
	        for (var _i = 0, chunkCoords_1 = chunkCoords; _i < chunkCoords_1.length; _i++) {
	            var chunkCoord = chunkCoords_1[_i];
	            var geometryData = this.chunkGenerator.generateChunkGeometryData(chunkCoord);
	            chunks.push({ coords: [chunkCoord.x, chunkCoord.y], geometryData: geometryData });
	        }
	        return chunks;
	    };
	    return ChunkGeneratorWorker;
	}());
	var chunkGeneratorWorker = new ChunkGeneratorWorker();
	console.log("ChunkGenerator.worker loaded");
	// Main thread will send terrain to be generated periodically
	// If new terrain is sent while the worker is still working on the last set of terrain, 
	// send over what's completed and start working on the new set


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../../typings/threejs/three.d.ts"/>
	"use strict";
	var Chunk_1 = __webpack_require__(2);
	var ChunkGenerator = (function () {
	    function ChunkGenerator(chunkSize, segments, noiseGenerator) {
	        this.chunkSize = chunkSize;
	        this.segments = segments;
	        this.noiseGenerator = noiseGenerator;
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
	    ChunkGenerator.prototype.generateChunk = function (chunkCoords) {
	        var realCoords = new THREE.Vector3(chunkCoords.x * this.chunkSize, 0, chunkCoords.y * this.chunkSize);
	        var geometry = new THREE.PlaneBufferGeometry(this.chunkSize, this.chunkSize, this.segments, this.segments);
	        var vertices = geometry.attributes.position.array;
	        for (var i = 2; i < vertices.length; i += 3) {
	            var noiseCoords = new THREE.Vector2((realCoords.x + vertices[i - 2]) / 5000, (-realCoords.z + vertices[i - 1]) / 5000);
	            vertices[i] += this.noiseGenerator.noise(noiseCoords.x, noiseCoords.y);
	        }
	        console.log("vertices[1] = ", vertices[1]);
	        geometry.computeVertexNormals();
	        geometry.rotateX(-Math.PI / 2);
	        geometry.translate(realCoords.x, 0, realCoords.z);
	        var mesh = new THREE.Mesh(geometry, this.groundMaterial);
	        mesh.receiveShadow = true;
	        return new Chunk_1.Chunk(mesh, chunkCoords);
	    };
	    ChunkGenerator.prototype.generateChunkGeometryData = function (chunkCoords) {
	        var geometryData = {};
	        var realCoords = new THREE.Vector3(chunkCoords.x * this.chunkSize, 0, chunkCoords.y * this.chunkSize);
	        var geometry = new THREE.PlaneBufferGeometry(this.chunkSize, this.chunkSize, this.segments, this.segments);
	        geometryData.vertices = geometry.attributes.position.array;
	        geometryData.normal = geometry.attributes.normal.array;
	        geometryData.uv = geometry.attributes.uv.array;
	        geometryData.indices = geometry.getIndex().array;
	        for (var i = 2; i < geometryData.vertices.length; i += 3) {
	            var noiseCoords = new THREE.Vector2((realCoords.x + geometryData.vertices[i - 2]) / 5000, (-realCoords.z + geometryData.vertices[i - 1]) / 5000);
	            geometryData.vertices[i] += this.noiseGenerator.noise(noiseCoords.x, +noiseCoords.y) * 1000;
	        }
	        return geometryData;
	    };
	    ChunkGenerator.prototype.generateChunkFromGeometryData = function (chunkCoords, geometryData) {
	        var realCoords = new THREE.Vector3(chunkCoords.x * this.chunkSize, 0, chunkCoords.y * this.chunkSize);
	        var geometry = new THREE.BufferGeometry();
	        geometry.setIndex(new THREE.BufferAttribute(geometryData.indices, 1));
	        geometry.addAttribute('position', new THREE.BufferAttribute(geometryData.vertices, 3));
	        geometry.addAttribute('normal', new THREE.BufferAttribute(geometryData.normal, 3));
	        geometry.addAttribute('uv', new THREE.BufferAttribute(geometryData.uvs, 2));
	        geometry.computeVertexNormals();
	        geometry.rotateX(-Math.PI / 2);
	        geometry.translate(realCoords.x, 0, realCoords.z);
	        var mesh = new THREE.Mesh(geometry, this.groundMaterial);
	        mesh.receiveShadow = true;
	        var chunk = new Chunk_1.Chunk(mesh, chunkCoords);
	        return chunk;
	    };
	    ChunkGenerator.prototype.setChunkSize = function (newChunkSize) {
	        this.chunkSize = newChunkSize;
	    };
	    ChunkGenerator.prototype.setSegments = function (newSegments) {
	        this.segments = newSegments;
	    };
	    ChunkGenerator.prototype.setNoiseGenerator = function (newNoise) {
	        this.noiseGenerator = newNoise;
	    };
	    ChunkGenerator.prototype.fastSigmoid = function (x) {
	        return x / (1 + Math.abs(x));
	    };
	    return ChunkGenerator;
	}());
	exports.ChunkGenerator = ChunkGenerator;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var Chunk = (function () {
	    function Chunk(mesh, chunkCoordinates) {
	        this.mesh = mesh;
	        this.chunkCoordinates = chunkCoordinates;
	    }
	    return Chunk;
	}());
	exports.Chunk = Chunk;


/***/ }
/******/ ]);
//# sourceMappingURL=c6af69ab3b60999b3a45.worker.js.map