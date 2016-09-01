import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ThreeDOptionsModel } from '../models/three-d-options.model'

/*
	Here's how this service works:
		- The options components call viewOptionStream.next with a new ThreeDOptionsModel every time the user presses the Update View button
		- ChunkManager subscribes to viewOptionStream.next, setting all of the values and reloading all the chunks when a new value is pushed
*/

@Injectable()
export class ViewOptionService {
	public viewOptionStream: BehaviorSubject<ThreeDOptionsModel>;

	constructor() {
		this.viewOptionStream = new BehaviorSubject<ThreeDOptionsModel>(new ThreeDOptionsModel());
	}
}