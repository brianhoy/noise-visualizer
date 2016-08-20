export class Player {
	public controls: THREE.OrbitControls;

	constructor(private renderer: THREE.Renderer, private camera: THREE.Camera) {
		this.initControls();
	}
	update() {
		this.controls.update();
	}
	initControls() {
		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
		this.controls.update();
		//controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
		this.controls.enableDamping = true;
		this.controls.dampingFactor = 0.01;
		this.controls.enableZoom = true;
		this.controls.zoomSpeed = 0.5;
		this.controls.rotateSpeed = 0.01;
	}

}