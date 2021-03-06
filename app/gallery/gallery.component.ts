import {Component,ElementRef} from 'angular2/core';
import {GalleryService} from './gallery.service';
import {DOM} from "angular2/src/platform/dom/dom_adapter";
import {RouterLink, RouteParams } from 'angular2/router';

@Component({
    selector: 'gallery',
    templateUrl: 'app/gallery/gallery.html',
    styleUrls: ['app/gallery/gallery.css'],
    providers: [GalleryService],
    host: {
	'(document:click)': 'onClick($event)',
	'(document:keydown)': 'keydown($event)'
  },
})

export class GalleryComponent {
    public title = "Gallery";
    public photographers = this._galleryService.getPhotographers();
    public photos = [];// = this._galleryService.getPhotos();
    public id = 0;
    public currentImg = null;
    public currentImgIndex : number = 0;
    public currentAuthor : number = 0; 

    constructor(private _galleryService: GalleryService, private _routeParams:RouteParams) {
	this.id  = this._routeParams.get('id');
	this.photos = this._galleryService.getPhotos(this.id);
	console.log("this id: " + this.id);
    }

    keydown(event) {
	console.log(event.which);
	if (event.which == 27) {
	    this.closeModal({target:'modal'});
	} else if (event.which == 37) {
	    this.prevImg();
	} else if (event.which == 39) {
	    this.nextImg();
	}
    }
        
    openModal(currImg) {
	this.currentImg = currImg;
	var numb : number = currImg.match(/\d/g).join("");
	this.currentImgIndex = +numb;
	this.currentAuthor = this.photos[this.currentImgIndex].author;
	var modal = document.getElementById('myModal');
	modal.style.display = "block";
    }
    closeModal(ev) {
	var modal = document.getElementById('myModal');
	modal.style.display = "none";
    }

    onClick(event) {
	var modal = document.getElementById('myModal');
	if (event.target == modal) {
            modal.style.display = "none";
	}
    }

    nextImg() {
	if(this.currentImgIndex >= this.photos.length - 1) {
	    this.currentImgIndex = 0;
	} else {
	    this.currentImgIndex = this.currentImgIndex + 1;
	}
	this.currentImg = this.photos[this.currentImgIndex].img;
	this.currentAuthor = this.photos[this.currentImgIndex].author;
    }

    prevImg() {
	if(this.currentImgIndex < 1) {
	    this.currentImgIndex = this.photos.length - 1;
	} else {
	    this.currentImgIndex = this.currentImgIndex - 1;
	}
	this.currentImg = this.photos[this.currentImgIndex].img;
	this.currentAuthor = this.photos[this.currentImgIndex].author;
    }
}

interface Photograph {
    year: string;
    name: string;
    location: string;
}

