/// <reference path="../../../typings/threejs/three.d.ts"/>

import {Component, OnInit, ElementRef} from '@angular/core';

import {Player} from './player/Player';
import {ChunkManager} from './procedural-generation/ChunkManager';
import {Sky} from './sky/Sky';

import {DebugService} from '../../services/debug.service';
import {NoiseOptionService} from '../../services/noise-options.service';
import {ViewOptionService} from '../../services/view-options.service';
import {ResizeService} from '../../services/resize.service';

declare var Stats;

@Component({
	selector: 'webgl-view',
	template: '',
	styleUrls: ['./webgl-view.component.css']
})
export class WebglViewComponent implements OnInit {
	private native: ElementRef;
	private nativeElement: any;
	private scene: THREE.Scene;
	private camera: THREE.Camera;
	private renderer: THREE.Renderer;
	private player: Player;
	private chunkManager: ChunkManager;
	private stats: any;
	private sky: Sky;

	constructor(public elementRef: ElementRef, private noiseOptionService: NoiseOptionService, 
		private viewOptionService: ViewOptionService, private debugService: DebugService, private resizeService: ResizeService) { 

		this.native = this.elementRef.nativeElement;
		this.nativeElement = <any>this.native;
	}

	ngOnInit() { 
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 200000 );
		this.camera.position.y = 1000;

		this.initThreeJS();
		this.initStats();

		setTimeout(() => {this.renderer.setSize(this.nativeElement.offsetWidth, this.nativeElement.offsetHeight)}, 1000);

		this.player = new Player(this.renderer, this.scene, this.camera);
		this.initScene();
		this.chunkManager = new ChunkManager(this.player, this.scene, false, 25000, 5000, 100, this.noiseOptionService, this.viewOptionService);

		this.sky = new Sky(this.scene);

		// x axis: red, y axis: green, z axis: blue
		var axisHelper = new THREE.AxisHelper( 5000 );
		this.scene.add( axisHelper );

		this.render();

		//setInterval(this.softUpdate.bind(this), 2000)
	}


	softUpdate() {
		this.chunkManager.update();
	}

	initThreeJS() {
		let lastWidth = this.nativeElement.offsetWidth;
		let lastHeight = 0;

		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(lastWidth, lastHeight);
		this.resizeService.sidebarResizeStream.subscribe((newSidebarWidth) => {
			lastWidth = window.innerWidth - newSidebarWidth;
			this.renderer.setSize(lastWidth, window.innerHeight);
		});

		this.nativeElement.appendChild(this.renderer.domElement);

	}

	initScene() {
		let directionalLight = new THREE.DirectionalLight( 0xffffff, 0.9 );
		directionalLight.position.set( 0, 1, 0 );
		this.scene.add( directionalLight );
	}

	initStats(): void {
		this.stats = new Stats();
		this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
		this.stats.domElement.style.position = 'absolute';
		this.nativeElement.appendChild( this.stats.dom );

	}

	addAxisHelper(scale?: number) {
		
	}

	render() {
		this.stats.begin();
		this.chunkManager.update();
		this.player.update();
		this.renderer.render(this.scene, this.camera);
    	this.stats.end();
		this.sky.update(0.0001, this.player.controls.target);
		requestAnimationFrame(this.render.bind(this));
	}
}