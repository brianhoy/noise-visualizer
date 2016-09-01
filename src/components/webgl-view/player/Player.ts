export class Player {
	public controls: THREE.OrbitControls;
	public debugMesh: THREE.Mesh;

	constructor(private renderer: THREE.Renderer, private scene: THREE.Scene, private camera: THREE.Camera) {
		let material = new THREE.MeshLambertMaterial();
		let geometry = new THREE.CubeGeometry(100, 100, 100);
		this.debugMesh = new THREE.Mesh(geometry, material);
		this.scene.add(this.debugMesh);
		this.initControls();
	}
	update() {
		this.controls.update();
		this.debugMesh.position.copy(this.coordinates);
	}
	get coordinates(): THREE.Vector3 {
		return this.controls.target;
	}
	initControls() {
		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
		this.controls.update();
		//controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
		/*this.controls.enableDamping = true;
		this.controls.dampingFactor = 0.01;
		this.controls.enableZoom = true;
		this.controls.zoomSpeed = 0.5;
		this.controls.rotateSpeed = 0.01; */
	}

}