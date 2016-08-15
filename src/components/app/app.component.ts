import { Component } from '@angular/core';
import '../../../public/css/pure.css';

import { SidebarComponent } from '../sidebar/sidebar.component';
import { WebglViewComponent } from '../webgl-view/webgl-view.component';
import { NoiseOptionPanelComponent } from '../noise-option-panel/noise-option-panel.component';

@Component({
  selector: 'my-app',
  directives: [SidebarComponent, WebglViewComponent,NoiseOptionPanelComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
