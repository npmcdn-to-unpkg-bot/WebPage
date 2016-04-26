import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class UploadService {
    private url = "rest/api.php";
    private _http;

    constructor(http : Http) {
	console.log("Album service created");
	this._http = http;
    }

    logError(err) {
	console.error('There was an error: ' + err);
    }
    
    sendPhotos(files) {
	console.log("building args");
	var ourHeader = new Headers();
	ourHeader.append("Content-Type", "application/x-www-form-urlencoded");

	var args = new FormData();
	var a = "type=upload";
	var len = files.length;
	for(var i = 0; i < len; i = i + 1) {
	    args.append("images[]",files[i]);
	    console.log(args.get("images[]"));
	}

	this._http.post(this.url, args, { header : ourHeader}).
	    map((res: Response) => console.log(res))
	    .subscribe(
		data => console.log(data),
		err => console.log(err),
		() => console.log('Random Quote Complete')
	    );
    }

    sendPhotosXXX(files: File[]) {
	return new Promise((resolve, reject) => {
	    let xhr: XMLHttpRequest = new XMLHttpRequest();
	    let formData: FormData = new FormData();

	    formData.append("type", "upload");
	    for (let i = 0; i < files.length; i++) {
		console.log(files[i]);
		formData.append("images[]", files[i]);
	    }

	    xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
		    if (xhr.status === 200) {
			resolve(JSON.parse(xhr.response));
		    } else {
			reject(xhr.response);
		    }
		}
	    };

	    xhr.open('POST', this.url, true);
	    xhr.send(formData);
	});
    }		      
}
