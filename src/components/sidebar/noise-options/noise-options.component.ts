import {Component} from '@angular/core';
import {NgForm}    from '@angular/forms';
import {NoiseOptionService} from '../../../services/noise-options.service';
import {NoiseModel} from '../../../models/noise.model';
import {SliderComponent} from '../../general/form-controls/slider.component';

@Component({
    selector: 'noise-options',
    directives: [ SliderComponent ],
    styleUrls: ['./noise-options.component.css'],
    templateUrl: './noise-options.component.html'
})
export class NoiseOptionsComponent {
    private selectedNoise: NoiseModel;
    private panelStyle: Object = {};

    constructor(private noiseOptionService: NoiseOptionService) {
		console.log("noise-options component loaded");
        this.noiseOptionService.getSelectedNoiseStream().subscribe((noise) => {
            this.selectedNoise = noise;
        });
    }

    private updateModel() {
        this.noiseOptionService.updateRootNoise();
    }
}