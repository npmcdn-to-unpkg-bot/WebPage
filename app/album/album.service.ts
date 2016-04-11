import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx';
@Injectable()
export class AlbumService {

    private url = "localhost/~simon/ang2/rest/photos.php?req=all";
    constructor(http : Http) {
	console.log("album service created");
	http.get(this.url)
	    .map((res:Response) => res.json())
	    .subscribe(
		data => {
		    console.log(data)
		},
		err => console.error(err),
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