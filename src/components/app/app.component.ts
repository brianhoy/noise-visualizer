import { Component } from '@angular/core';
import '../../../public/css/pure.css';

import {SidebarComponent} from '../sidebar/sidebar.component';
import {WebglViewComponent} from '../webgl-view/webgl-view.component';
import {ResizeEvent} from 'angular2-resizable';
import {ResizeService} from '../../services/resize.service';

@Component({
  selector: 'my-app',
  directives: [SidebarComponent, WebglViewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	private sidebarStyle: Object = {};
	private contentStyle: Object = {};

	constructor(private resizeService: ResizeService) {

	}

	onSidebarResizeEnd(event: ResizeEvent): void {
		console.log("sidebar resize end rectangle", event.rectangle);
		// the +17 is to account for the scrollbar
		this.resizeService.sidebarResizeStream.next(event.rectangle.width + 17);
		this.sidebarStyle = {
			width: `${event.rectangle.width}px`,
			position: 'fixed',
		};
		this.contentStyle = {
			left: `${event.rectangle.width}px`
		}
	}

	private validateSidebarResize(event: ResizeEvent): boolean {
		const MIN_DIMENSIONS_PX: number = 50;
		const MAX_DIMENSIONS_PX: number = 500;
		if (event.rectangle.width < MIN_DIMENSIONS_PX || event.rectangle.width > MAX_DIMENSIONS_PX) {
			return false;
		}
		return true;
	}
}
