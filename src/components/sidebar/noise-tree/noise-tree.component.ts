import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NoiseModel } from '../../../models/noise.model';
import { NoiseOptionService } from '../../../services/noise-options.service';
import { ContextMenuComponent, ContextMenuService } from 'angular2-contextmenu';

@Component({
    selector: 'noise-tree',
    inputs: ['root', 'noiseModel', 'xoffset'],
    host: { 'class' : 'noise-tree'},
    directives: [NoiseTreeComponent, ContextMenuComponent],
    providers: [ContextMenuService],
    templateUrl: './noise-tree.component.html',
    styleUrls: ['./noise-tree.component.css', '../../general/contextmenu.css']
})
export class NoiseTreeComponent implements OnInit {
    public noiseModel: NoiseModel;
    private showChildren: boolean;
    private selectedNoise: boolean;
    private root: boolean;
    private contextMenuActions: Array<any>;
    private xoffset;

    constructor(private noiseOptionService: NoiseOptionService, private contextMenuService: ContextMenuService) {
        this.showChildren = true;
        this.selectedNoise = false;

    }
    toggleShowChildren() {
        console.log('toggling show children');
        this.showChildren = !this.showChildren;
    }
    addChildNoise() {
        console.log("calling updateRootNoise");
        let newNoise = new NoiseModel();
        setTimeout(() => {
            this.showChildren = true;
            this.noiseOptionService.selectNoise(newNoise);
        }, 0);
        this.noiseModel.children.push(newNoise);
        this.noiseOptionService.updateRootNoise();
        //this.noiseOptionService.updateRootNoise(this.noiseModel);
    }
    selectNoise() {
        console.log("selecting noise");

        this.selectedNoise = true;
        this.noiseOptionService.selectNoise(this.noiseModel);
    }
    deleteNoise() {
        this.noiseOptionService.deleteNoise(this.noiseModel.uid);
        this.noiseOptionService.selectRootNoise();
    }
    ngOnInit() {
        this.noiseOptionService.newNoiseStream.subscribe((noise)=> {
            if(this.root) {
                console.log("setting root noise in newNoiseStr")
                this.noiseModel = noise;
            }
        });
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

        this.contextMenuActions = new Array();
        this.contextMenuActions.push({
            html: () => `Select this noise`,
            click: (item) => this.selectNoise()
        });
        this.contextMenuActions.push({
            html: () => `Add child noise`,
            click: (item) => this.addChildNoise()
        });
        if(!this.root) {
            this.contextMenuActions.push({
                    html: () => `Delete this noise`,
                    click: (item) => this.deleteNoise()
            });
        }
        if(this.root) {
            this.noiseOptionService.updateRootNoise(this.noiseModel);
            this.selectNoise();
        }
    }
    public onContextMenu($event: MouseEvent, item: any): void {
        this.contextMenuService.show.next({
            actions: this.contextMenuActions,
            event: $event,
            item: item,
        });
        $event.preventDefault();
    }
}