import { Component } from '@angular/core';

@Component({
	selector: 'sidebar',
	templateUrl: 'sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
	public selectedTab: number;

	constructor() {
		this.selectedTab = 3;
	 }
	selectTab(tab: number) {
		this.selectedTab = tab;
	}
}