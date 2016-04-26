import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {AlbumService} from './album.service';
//import {DOM} from "angular2/src/platform/dom/dom_adapter";

@Component({
    selector: 'album',
    templateUrl: 'app/album/album.html'
    styleUrls: ['app/album/album.css'],
    providers: [AlbumService],
    directives: [ROUTER_DIRECTIVES]
})

export class AlbumComponent {
    public title = "Album";
    public albums = [];
    private ajaxHandle;
    alb : string;
    
    constructor(private _albumService: AlbumService) {
	console.log("Attempting to fetch albums!");
	this.ajaxHandle = this._albumService.getAlbums()
	    .subscribe(
		data => {
		    console.log(data[0]),
		    this.albums = data },
		err => _albumService.logError(err),
		() => console.log("Done running console.log(data)!")
	    );
	console.log("Did we get all the way here?");
    }

    hack(val) {
	return Array.from(val);
    }


}
