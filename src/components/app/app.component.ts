import { Component } from '@angular/core';
import '../../../public/css/pure.css';

import {SidebarComponent} from '../sidebar/sidebar.component';
import {WebglViewComponent} from '../webgl-view/webgl-view.component';

@Component({
  selector: 'my-app',
  directives: [SidebarComponent, WebglViewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
