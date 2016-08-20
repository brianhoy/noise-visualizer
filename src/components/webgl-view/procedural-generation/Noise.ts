declare var SimplexNoise;

export class Noise {
	private MaxTerrainHeight = 256;
	private CellHeight = 8;
	private Scale = this.MaxTerrainHeight / this.CellHeight;
	private simplex;

	constructor() {
		this.simplex = new SimplexNoise();
	}

	public cellular(x: number, y: number) {
		let val = this.simplex.noise(x, y); //get the simplex value
		let zFloat = this.Scale * val; //get the "index" of the cell's height
		let zInt = zFloat * this.CellHeight; //scale up the index to get the actual Z value
		return zInt;
	}
}