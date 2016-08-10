import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { NoiseOptionService } from './services/noise-options.service';

if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [NoiseOptionService]);