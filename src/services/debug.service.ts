import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'; 
import { Chunk } from '../models/Chunk';

@Injectable()
export class DebugService {
	private chunkStream: Subject<Chunk[][]>;

	constructor() {
		console.log("debug service created");
		this.chunkStream = new Subject<Chunk[][]>();
		this.chunkStream.subscribe((f) => {
			console.log("chunkstream update: ", f);
		})
	}
	public getChunkDebugStream(): Subject<Chunk[][]> {
		return this.chunkStream;
	}
}