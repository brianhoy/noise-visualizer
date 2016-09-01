import {Component} from '@angular/core';
import {ThreeDOptionsComponent} from './3d-options/3d-options.component';
import {NoiseTreeComponent} from './noise-tree/noise-tree.component';
import {NoiseOptionsComponent} from './noise-options/noise-options.component';
import {StringifiedNoiseComponent} from './stringified-noise/stringified-noise.component';

import {NoiseModel} from '../../models/noise.model';
import {Chunk} from '../../models/Chunk';

@Component({
	selector: 'sidebar',
	directives: [ThreeDOptionsComponent, NoiseTreeComponent, NoiseOptionsComponent, StringifiedNoiseComponent],
	templateUrl: 'sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
	public baseNoise: any;
	public debugChunks: Chunk[][];
	private Math;
	private toggled: { displayOptions: boolean, noiseTree: boolean, noiseOptions: boolean, stringifiedNoise: boolean};

	constructor() {
		this.toggled = { displayOptions: false, noiseTree: false, noiseOptions: false, stringifiedNoise: false };
		this.Math = Math;
		this.baseNoise = new NoiseModel();
	 }

	 private toggleSection(section: string): void {
		 console.log("toggling section", section);
		 this.toggled[section] = !this.toggled[section];
	 }
}