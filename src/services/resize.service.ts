import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ResizeService {
	public sidebarResizeStream: Subject<number>;
	public noisePanelResizeStream: Subject<number>;

	constructor() { 
		this.sidebarResizeStream = new Subject<number>();
		this.noisePanelResizeStream = new Subject<number>();
	}
}