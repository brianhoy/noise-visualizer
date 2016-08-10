import { Injectable } from '@angular/core';
import { NoiseModel } from '../models/noise.model';

@Injectable()
export class NoiseOptionService {
    private rootNoise: NoiseModel;

    constructor() {
        this.rootNoise = new NoiseModel();
    }
    public getRootNoise(): NoiseModel {
        return this.rootNoise;
    }
}