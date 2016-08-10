import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NoiseModel } from '../../../models/noise.model';

@Component({
    selector: 'noise-tree',
    inputs: ['noiseModel'],
    host: { 'class' : 'noise-tree'},
    directives: [NoiseTreeComponent],
    templateUrl: './noise-tree.component.html',
    styleUrls: ['./noise-tree.component.css']
})
export class NoiseTreeComponent implements OnInit {
    private noiseModel: NoiseModel;
    private showChildren: boolean;

    constructor() {
        this.showChildren = true;
    }
    toggleShowChildren() {
        this.showChildren = !this.showChildren;
    }
    addChildNoise() {
        this.noiseModel.children.push(new NoiseModel());
    }
    ngOnInit() {

    }
}