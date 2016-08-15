import { Injectable } from '@angular/core';
import { NoiseModel } from '../models/noise.model';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NoiseOptionService {
    private rootNoise: NoiseModel;
    private selectedNoiseStream: BehaviorSubject<NoiseModel>;
    private deletedNoiseStream: Subject<number>;

    constructor() {
        this.rootNoise = new NoiseModel();
        this.selectedNoiseStream = new BehaviorSubject<NoiseModel>(this.rootNoise);
        this.deletedNoiseStream = new Subject<number>();
    }
    public selectNoise(noise: NoiseModel): void {
        this.selectedNoiseStream.next(noise);
    }
    public deleteNoise(noiseId: number): void {
        this.deletedNoiseStream.next(noiseId);
    }

    public getDeletedNoiseStream(): Subject<number> {
        return this.deletedNoiseStream;
    }
    public getSelectedNoiseStream(): Subject<NoiseModel> {
        return this.selectedNoiseStream;
    }
    public getRootNoise(): NoiseModel {
        return this.rootNoise;
    }
}