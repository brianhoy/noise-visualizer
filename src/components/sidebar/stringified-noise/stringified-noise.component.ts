import {Component, OnInit} from '@angular/core';
import {NoiseOptionService} from '../../../services/noise-options.service';
import {NoiseModel} from '../../../models/noise.model';

@Component({
	selector: 'stringified-noise',
	templateUrl: './stringified-noise.component.html',
	styleUrls: ['./stringified-noise.component.css']
})
export class StringifiedNoiseComponent implements OnInit {
	private stringifiedNoise: string;

	constructor(private noiseOptionService: NoiseOptionService) {

	}

	ngOnInit() {
		let element = <HTMLTextAreaElement> document.getElementById("stringifiedNoise");
		this.noiseOptionService.getRootNoiseStream().subscribe((noiseModel: NoiseModel) => {
			element.value = JSON.stringify(noiseModel);
		})

	}

	private copyToClipboard() {
		let element = <HTMLTextAreaElement> document.getElementById("stringifiedNoise");
		element.select();
		try {
			document.execCommand('copy');
		} catch (err) {
			window.prompt("Copy to clipboard: Ctrl+C, Enter", this.stringifiedNoise);
		}

	}

	private loadNoise() {
		let element = <HTMLTextAreaElement> document.getElementById("stringifiedNoise");
		console.log("text:", element.value);
		let noiseObj: NoiseModel = JSON.parse(element.value);
		this.noiseOptionService.loadNewRootNoise (noiseObj);
	}

}