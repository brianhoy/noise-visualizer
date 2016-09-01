import { Component, ViewEncapsulation } from "@angular/core";
import { SliderComponent } from '../../general/form-controls/slider.component';
import { ThreeDOptionsModel } from '../../../models/three-d-options.model';
import { ViewOptionService } from '../../../services/view-options.service';

@Component({
    selector: "three-d-options",
    directives: [SliderComponent],
    templateUrl: "./3d-options.component.html",
    styleUrls: ["../options.css"],
    encapsulation: ViewEncapsulation.None
})
export class ThreeDOptionsComponent {
    public options: ThreeDOptionsModel;

    constructor(private viewOptionService: ViewOptionService) {
        this.options = new ThreeDOptionsModel();
    }

    updateView() {
        this.viewOptionService.viewOptionStream.next(this.options);
        console.log("updating view");
    }
}