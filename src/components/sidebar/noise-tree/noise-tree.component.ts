import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NoiseModel } from '../../../models/noise.model';
import { NoiseOptionService } from '../../../services/noise-options.service';

@Component({
    selector: 'noise-tree',
    inputs: ['noiseModel'],
    host: { 'class' : 'noise-tree'},
    directives: [NoiseTreeComponent],
    templateUrl: './noise-tree.component.html',
    styleUrls: ['./noise-tree.component.css']
})
export class NoiseTreeComponent implements OnInit {
    public noiseModel: NoiseModel;
    private showChildren: boolean;
    private selectedNoise: boolean;
    private root: boolean;

    constructor(private noiseOptionService: NoiseOptionService) {
        this.showChildren = true;
        this.selectedNoise = false;
    }
    toggleShowChildren() {
        this.showChildren = !this.showChildren;
    }
    addChildNoise() {
        this.noiseModel.children.push(new NoiseModel());
    }
    selectNoise() {
        console.log("selecting noise");

        this.selectedNoise = true;
        this.noiseOptionService.selectNoise(this.noiseModel);
    }
    ngOnInit() {
        this.noiseOptionService.getSelectedNoiseStream().subscribe((noise) => {
            if(noise.uid != this.noiseModel.uid) {
                this.selectedNoise = false;
            }
        });

        this.noiseOptionService.getDeletedNoiseStream().subscribe((deletedNoiseId) => {
            for(let i = 0; i <= this.noiseModel.children.length; i++) {
                if(deletedNoiseId == this.noiseModel.children[i].uid) {
                    this.noiseModel.children.splice(i, 1);
                    return;
                }
            }
        });
    }
}