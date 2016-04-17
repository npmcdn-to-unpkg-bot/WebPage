import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class AlbumService {
    private url = "rest/api.php";
    private _http;
    private _albums = [];
    
    constructor(http : Http) {
	console.log("Album service created");
	this._http = http;
    }

    logError(err) {
	console.error('There was an error: ' + err);
    }
    
    getAlbums() {
	//return this._albums;
	console.log("Sending request to: " + this.url);

	// let args = JSON.stringify({ type: 'album', req: 'all'});
	let args = "type=album&req=all";
	var ourHeader = new Headers();
	ourHeader.append("Content-Type", "application/x-www-form-urlencoded");
	var dataret;

	return this._http.post(this.url, args, { headers: ourHeader})
	    .map((res:Response) => res.json());
	    /*.subscribe(
		data => {
		    console.log(data);
		    //dataret = data;
		},
		err => this.logError(err), // Syntax error här, brah'!
		() => console.log('Done')
	    );*/
    }

}
