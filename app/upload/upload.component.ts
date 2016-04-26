import {Component,NgZone} from 'angular2/core';
import {UploadService} from './upload.service';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

import {Http, Headers} from 'angular2/http';
import 'rxjs/Rx';

@Component({
    selector: 'upload',
    templateUrl: 'app/upload/upload.html',
    styleUrls: ['app/upload/upload.css'],
    providers: [UploadService]
})

export class UploadComponent {
    public test = "testing";
    public files;
    public upload = {
	albums : "",
	tags : "",
	desc : ""
    };
    
    //uploadProgresses: any[] = [];
    public uploadProgress = 0;
    zone: NgZone;
    indexArray: any[] = [];
    showProgress = false;
    
    public url: 'http://localhost:10050/upload';

    constructor(private _uploadService: UploadService) {
	this.zone = new NgZone({ enableLongStackTrace: false });
	this.uploadProgress = 0;
	this._uploadService.progress$.subscribe(
	    data => {
		this.uploadProgress = data;
	    });
    }
    
    onChange(event) {
	this.showProgress = true;
	this._uploadService.makeFileRequest("rest/api.php", [], event.target.files)
	    .subscribe(() => {
		console.log('sent');
	    });
    }
}
