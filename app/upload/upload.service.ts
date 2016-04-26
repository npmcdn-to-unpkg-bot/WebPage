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

	var args = new FormData();;
	var a = "type=upload&images[]=";
	var len = files.length;
	for(var i = 0; i < len; i = i + 1) {
	    args.append("images[]",files[i]);
	    console.log(args.get("images[]"));
	}

	return this._http.post(this.url, args, { header : ourHeader}).
	    map((res: Response) => console.log("Respone: " + res))
	    .subscribe(
		data => console.log("got data: " + data),
		err => console.log("error: " + err),
		() => console.log('Random Quote Complete')
	    );
    }
    
}