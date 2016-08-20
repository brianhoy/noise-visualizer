import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './components/app/app.component';
import { NoiseOptionService } from './services/noise-options.service';
import { DebugService } from './services/debug.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent,
	],
	providers: [
		NoiseOptionService,
		DebugService
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
