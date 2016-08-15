import { Component } from '@angular/core';
import { NoiseOptionService } from '../../services/noise-options.service';
import { NoiseModel } from '../../models/noise.model';
import { NgForm }    from '@angular/forms';
import { SliderComponent } from '../general/form-controls/slider.component';

@Component({
    selector: 'noise-option-panel',
    directives: [ SliderComponent ],
    styleUrls: ['./noise-option-panel.component.css'],
    templateUrl: './noise-option-panel.component.html'
})
export class NoiseOptionPanelComponent {
    private selectedNoise: NoiseModel;
    private ayy: any;

    constructor(private noiseOptionService: NoiseOptionService) {
        this.noiseOptionService.getSelectedNoiseStream().subscribe((noise) => {
            console.log("incoming noise");
            console.log(noise);
            this.selectedNoise = noise;
        });
    }
}