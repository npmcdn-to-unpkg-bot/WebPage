import {Component} from 'angular2/core';
import {GalleryService} from './gallery.service';

@Component({
    selector: 'gallery',
    templateUrl: 'app/gallery/gallery.html',
    styleUrls: ['app/gallery/gallery.css'],
    providers: [GalleryService]
})

export class GalleryComponent {
    public title = "Gallery";
    public photographers = this._galleryService.getPhotographers();
    public photos = this._galleryService.getPhotos();
    constructor(private _galleryService: GalleryService) { /* Constructor for service */
	console.log("launched gallery site hello, screenwidth: " + screen.width);    
    }
}

interface Photograph {
    year: number;
    name: string;
    location: string;
}

