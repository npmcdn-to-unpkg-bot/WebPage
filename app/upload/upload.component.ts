import {Component,NgZone} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {UPLOAD_DIRECTIVES} from 'ng2-uploader/ng2-uploader';

@Component({
    selector: 'upload',
    templateUrl: 'app/upload/upload.html',
    styleUrls: ['app/upload/upload.css'],
    directives: [UPLOAD_DIRECTIVES]
})

export class UploadComponent {
    
    public title = "Upload";
    
    public determinateValue: number = 0;
    public determinateValue2: number = 0;

    public files;

    uploadFiles: any[];
    uploadProgresses: any[] = [];
    zone: NgZone;
    options: Object = {
	url: 'http://localhost:10050/upload'
    };
    constructor() {
	this.zone = new NgZone({ enableLongStackTrace: false });
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

    handleUpload(data): void {
	let id = data.id;
	let index = this.findIndex(id);
	if (index === -1) {
	    this.uploadProgresses.push({id: id, percent: 0});
	}
	if (this.uploadProgresses[index]) {
	    this.zone.run(() => {
		this.uploadProgresses[index].percent = data.progress.percent;
	    });
	}
    }

    findIndex(id: string): number {
	return this.uploadProgresses.findIndex(x => x.id === id);
    }
}