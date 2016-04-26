import {Component,NgZone} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

@Component({
    selector: 'upload',
    templateUrl: 'app/upload/upload.html',
    styleUrls: ['app/upload/upload.css']
})

export class UploadComponent {
    
    public files;
    
    uploadProgresses: any[] = [];
    zone: NgZone;
    indexArray: any[] = [];
    progress number = 0;
    public url: 'http://localhost:10050/upload';
    
    constructor() {
	this.zone = new NgZone({ enableLongStackTrace: false });
    }
    
    increaseProgress(index, doneCallback: () => void) {
	this.uploadProgresses[index] += 1;
	console.log(`Current progress: ${this.progress}%`);
	
	if (this.uploadProgresses[index] < 100) {
	    window.setTimeout(() => {
		this.increaseProgress(index,doneCallback);
	    }, 10);
	} else {
	    doneCallback();
	}
    }
    
    onChange(event) {
	var len = event.target.files.length;
	this.files = event.target.files;
	for(var i = 0; i < len; i = i + 1) {
	    this.indexArray[i] = i;
	    this.uploadProgresses[i] = 0 + i*10;
	    this.increaseProgress(i,() => console.log('Done!'));
	    //this.event.target.files.index = i;
	}
    }
}