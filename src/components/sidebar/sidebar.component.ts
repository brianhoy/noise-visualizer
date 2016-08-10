import { Component } from '@angular/core';
import { ThreeDOptionsComponent } from './3d-options/3d-options.component';
import { TwoDOptionsComponent } from './2d-options/2d-options.component';
import { NoiseTreeComponent } from './noise-tree/noise-tree.component';
import { NoiseModel } from '../../models/noise.model';

@Component({
	selector: 'sidebar',
	directives: [ThreeDOptionsComponent, TwoDOptionsComponent, NoiseTreeComponent],
	templateUrl: 'sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
	public selectedTab: number;
	public baseNoise: any;

	constructor() {
		this.baseNoise = new NoiseModel();
		this.selectedTab = 3;
	 }
	selectTab(tab: number) {
		console.log("selecting tab", tab);
		this.selectedTab = tab;
	}
}