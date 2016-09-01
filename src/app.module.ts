import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}  from './components/app/app.component';
import {NoiseOptionService} from './services/noise-options.service';
import {DebugService} from './services/debug.service';
import {ViewOptionService} from './services/view-options.service';
import {ResizeService} from './services/resize.service';
import {ResizableModule} from 'angular2-resizable';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ResizableModule
	],
	declarations: [
		AppComponent,
	],
	providers: [
		NoiseOptionService,
		DebugService,
		ViewOptionService,
		ResizeService
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
