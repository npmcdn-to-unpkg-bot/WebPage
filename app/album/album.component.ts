import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {AlbumService} from './album.service';
import {DOM} from "angular2/src/platform/dom/dom_adapter";

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
    
    constructor(private _albumService: AlbumService) {
	console.log("Attempting to fetch albums!");
	this.albums = this._albumService.getAlbums();
	console.log("Done attempting...");
    }

}
