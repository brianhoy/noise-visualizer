import { Injectable } from '@angular/core';
import { NoiseModel } from '../models/noise.model';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NoiseOptionService {
    private rootNoise: NoiseModel;

    public newNoiseStream: Subject<NoiseModel>;
    private rootNoiseStream: BehaviorSubject<NoiseModel>;
    private selectedNoiseStream: BehaviorSubject<NoiseModel>;
    private deletedNoiseStream: Subject<number>;

    constructor() {
        this.rootNoise = new NoiseModel();
        this.newNoiseStream = new Subject<NoiseModel>();
        this.selectedNoiseStream = new BehaviorSubject<NoiseModel>(this.rootNoise);
        this.rootNoiseStream = new BehaviorSubject<NoiseModel>(this.rootNoise);
        this.deletedNoiseStream = new Subject<number>();
    }
    public selectNoise(noise: NoiseModel): void {
        console.log("selectnoise", noise);
        this.selectedNoiseStream.next(noise);
    }
    public deleteNoise(noiseId: number): void {
        this.deletedNoiseStream.next(noiseId);
    }
    public loadNewRootNoise(rootNoise?: NoiseModel) {
        this.newNoiseStream.next(rootNoise);
        this.updateRootNoise(rootNoise);
    }
    public updateRootNoise(rootNoise?: NoiseModel) {
        console.log("updateRootNoise called");
        this.rootNoise = rootNoise || this.rootNoise;
        this.rootNoiseStream.next(this.rootNoise);
        this.selectRootNoise();
    }
    public selectRootNoise() {
        this.selectedNoiseStream.next(this.rootNoise);
    }
    public getDeletedNoiseStream(): Subject<number> {
        return this.deletedNoiseStream;
    }
    public getSelectedNoiseStream(): Subject<NoiseModel> {
        return this.selectedNoiseStream;
    }
    public getRootNoiseStream(): Subject<NoiseModel> {
        return this.rootNoiseStream;
    }
    public getRootNoise(): NoiseModel {
        return this.rootNoise;
    }
}