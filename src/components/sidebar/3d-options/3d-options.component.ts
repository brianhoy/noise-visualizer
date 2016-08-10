import { Component } from "@angular/core";

@Component({
    selector: "three-d-options",
    templateUrl: "./3d-options.component.html",
    styleUrls: ["../options.css"]
})
export class ThreeDOptionsComponent {
    public vertices: number;

    constructor() {
        this.vertices = 20;
    }

    updateVerticesSlider(e: Event) {
        let element = <HTMLInputElement> e.srcElement;
        this.vertices = parseFloat(element.value);
    }

    updateView() {
        console.log("updating view");
    }
}