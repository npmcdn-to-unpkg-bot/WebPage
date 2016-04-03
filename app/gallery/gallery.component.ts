import {Component,ElementRef} from 'angular2/core';
import {GalleryService} from './gallery.service';
import {DOM} from "angular2/src/platform/dom/dom_adapter";

@Component({
    selector: 'gallery',
    templateUrl: 'app/gallery/gallery.html',
    styleUrls: ['app/gallery/gallery.css'],
    providers: [GalleryService],
    host: {
       '(document:click)': 'onClick($event)',
  },
})

export class GalleryComponent {
    public title = "Gallery";
    public photographers = this._galleryService.getPhotographers();
    public photos = this._galleryService.getPhotos();
    public currentImg = null;
    public currentImgIndex = 0;
    constructor(private _galleryService: GalleryService) {
	console.log("launched gallery site hello, screenwidth: " + screen.width);
    }

    openModal(currImg) {
	this.currentImg = currImg;
	var numb = currImg.match(/\d/g).join("");
	this.currentImgIndex = parseInt(numb);
	console.log("index: " + numb);
	var modal = document.getElementById('myModal');
	modal.style.display = "block";
    }
    closeModal(ev) {
	console.log("close modal" + ev);
	var modal = document.getElementById('myModal');
	modal.style.display = "none";
    }

    onClick(event) {
	console.log("event: " + event);
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
	console.log("what: " + this.currentImgIndex);
	this.currentImg = this.photos[this.currentImgIndex];
    }

    prevImg() {
	if(this.currentImgIndex < 1) {
	    this.currentImgIndex = this.photos.length - 1;
	} else {
	    this.currentImgIndex = this.currentImgIndex - 1;
	}
	this.currentImg = this.photos[this.currentImgIndex];
    }
}

interface Photograph {
    year: number;
    name: string;
    location: string;
}

