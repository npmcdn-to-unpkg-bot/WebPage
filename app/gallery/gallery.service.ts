import {Injectable} from 'angular2/core';
import {PHOTOGRAPHERS} from './photographers';

@Injectable()
export class GalleryService {
    getPhotos() {
	var photos = [];
	var numberOfPhotos = 8;
	for(var i = 0; i < numberOfPhotos; i = i + 1) {
	    photos.push("assets/img/gallery/test/" + i + ".jpg")
	}
	console.log(photos);
	return photos;
    }

    getPhotographers() {
	return PHOTOGRAPHERS;
    }
}