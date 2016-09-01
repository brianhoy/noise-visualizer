export class ThreeDOptionsModel {
	constructor(public segmentsPerChunk?: number, 
		public chunkSize?: number, 
		public renderDistance?: number) {
		this.segmentsPerChunk = this.segmentsPerChunk || 30;
		this.chunkSize = this.chunkSize || 5000;
		this.renderDistance = this.renderDistance || 25000;
	}
}