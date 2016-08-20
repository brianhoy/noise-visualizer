/// <reference path="../../../typings/threejs/three.d.ts"/>

import { Component, OnInit, ElementRef } from '@angular/core';

import { Player } from './player/Player';
import { ChunkManager } from './procedural-generation/ChunkManager';

import { DebugService } from '../../services/debug.service';

@Component({
	selector: 'webgl-view',
	template: '',
	styleUrls: ['./webgl-view.component.css']
})
export class WebglViewComponent implements OnInit {
	private native: ElementRef;
	private scene: THREE.Scene;
	private camera: THREE.Camera;
	private renderer: THREE.Renderer;
	private player: Player;
	private chunkManager: ChunkManager;

	constructor(public elementRef: ElementRef, private debugService: DebugService) { 
		this.native = this.elementRef.nativeElement;
	}

	ngOnInit() { 
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100000 );
		this.camera.position.y = 1000;

		let nativeElement = <any>this.native;
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(nativeElement.offsetWidth, nativeElement.offsetHeight);
		nativeElement.appendChild(this.renderer.domElement);

		this.player = new Player(this.renderer, this.camera);
		this.initScene();
		this.chunkManager = new ChunkManager(this.player, this.scene,  this.debugService);

		var axisHelper = new THREE.AxisHelper( 5000 );
		this.scene.add( axisHelper );


		this.render();

		setInterval(this.softUpdate.bind(this), 2000)
	}


	softUpdate() {
		this.chunkManager.update();
	}

	initScene() {
		let directionalLight = new THREE.DirectionalLight( 0xffffff, 0.9 );
		directionalLight.position.set( 0, 1, 0 );
		this.scene.add( directionalLight );
	}

	render() {
		requestAnimationFrame(this.render.bind(this));
		this.player.update();
		this.renderer.render(this.scene, this.camera);
	}
}