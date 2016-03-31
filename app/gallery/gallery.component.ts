import {Component} from 'angular2/core';

@Component({
    selector: 'gallery',
    templateUrl: 'app/gallery/gallery.html',
    styleUrls: ['app/gallery/gallery.css'],
})

export class GalleryComponent {
    public title = "Gallery";
    public photographers = PHOTOGRAPHERS;
    
    constructor() {
	console.log("launched gallery site");
	console.log("screenwidth: " + screen.width);
    }
}

interface Photographer {
    year: number;
    name: string;
}

interface Photograph {
    year: number;
    name: string;
    location: string;
}

var PHOTOGRAPHERS : Photographer[] = {born : 1992, name : 'Simon Bergström',
				      about: 'It\'s a me, Simon!',
				      github: 'https://github.com/menuan',
				      img: 'assets/img/sb.jpg'}
];
