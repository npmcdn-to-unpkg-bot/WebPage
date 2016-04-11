import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class AlbumService {

    private url = "rest/api.php?type=album&req=all&id=2&x=4&y=1";
    constructor(http : Http) {
	console.log("album service created");
	http.post(this.url)
	    .map((res:Response) => res.json())
	    .subscribe(
		data => {
		    console.log(data)
		},
		err => console.error(err), // Syntax error här, brah'!
		() => console.log('done')
	    );
    }

    logError(err) {
	console.error('There was an error: ' + err);
    }
    
    getAlbums() {
	return [0,4,6];
    }
}
