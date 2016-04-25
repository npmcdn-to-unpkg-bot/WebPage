import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

@Component({
    selector: 'upload',
    templateUrl: 'app/upload/upload.html',
    styleUrls: ['app/upload/upload.css'],
    directives: [MATERIAL_DIRECTIVES]
})

export class UploadComponent {
    dom:BrowserDomAdapter;
    
    public title = "Upload";
    
    public determinateValue: number = 0;
    public determinateValue2: number = 0;

    public files;
    
    constructor() {
    }

    upload() {
	console.log("show progress bar");
    }
    
    onChange(event) {
	console.log(event.target.files[0]);
	this.files = event.target.files;
    }

    doNothing() {
	console.log("do nothing");
    }
}