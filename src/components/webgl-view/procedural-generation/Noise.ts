import { NoiseModel } from '../../../models/noise.model';

declare var SimplexNoise;


// Usage: feed it a NoiseOptions and then just call noise.
export class Noise {
	private simplexObject;

	private children: Array<Noise>;

	constructor(private noiseModel: NoiseModel) {
		this.simplexObject = new SimplexNoise();

		this.children = new Array<Noise>();
		for(let i = 0; i < this.noiseModel.children.length; i++) {
			this.children.push(new Noise(this.noiseModel.children[i]));
		}
	}

	public noise(x: number, y: number): number {
		let result = 0;
		let childrenResult = 0;

		let frequency = this.noiseModel.frequency;
		let amplitude = 1;

		let min = 0;
		let max = 0;

		// noiseFunction should return a value between 0 and 1
		let noiseFunction = this.simplex.bind(this);
		if(this.noiseModel.type == "truecellular") {
			noiseFunction = this.truecellular.bind(this);
		}
		else if(this.noiseModel.type == "fastcellular") {
			noiseFunction = this.fastcellular.bind(this);
		}

		for(let i = 0; i < this.noiseModel.octaves; i++) {
			result += noiseFunction(x * frequency, y * frequency) * amplitude;
			max += amplitude;

			frequency *= this.noiseModel.lancunarity;
			amplitude *= this.noiseModel.persistence;
		}
	
		result = this.rescale(result, min, max, this.noiseModel.low, this.noiseModel.high);

		for(let i = 0; i < this.children.length; i++) {
			childrenResult += this.children[i].noise(x, y);
		}

		switch(this.noiseModel.operation) {
			case "multiply":
				return result * childrenResult;
			case "divide":
				return result / childrenResult;
			case "add":
				return result + childrenResult;
			case "subtract":
				return result - childrenResult
		}
	}

	private simplex(x: number, y: number): number {
		return (this.simplexObject.noise(x, y) + 1) / 2;
	}

	private truecellular(xC: number, yC: number): number {
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
		let vec2: any = function vec2(x, y) {
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
						var p = vec2.add([], floor([n[0], n[1]]), [x, y]);
						var d = length([r_vec2(p)[0] + x - fract([n[0], n[1]])[0], r_vec2(p)[1] + y - fract([n[0], n[1]])[1]]);
						if (dis > d) {
						dis = d;
						};
					};
				};
				return 1.0 - dis;
		};
		return worley([xC, yC], 1)
	}

	private MaxTerrainHeight = 1;
	private CellHeight = 0.05;
	private Scale = this.MaxTerrainHeight / this.CellHeight;

	private fastcellular(x: number, y: number) {
		let val = this.simplexObject.noise(x, y); //get the simplex value
		let zFloat = this.Scale * val; //get the "index" of the cell's height
		let zInt = zFloat * this.CellHeight; //scale up the index to get the actual Z value
		return zInt;
	}

	private rescale(value: number, min_old, max_old, min_new, max_new): number {
		return ((max_new - min_new) / (max_old - min_old) * (value - max_old)) + max_new;
	}
}