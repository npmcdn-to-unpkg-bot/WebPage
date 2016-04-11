import {Injectable} from 'angular2/core';
import {PHOTOGRAPHERS} from './photographers';

@Injectable()
export class GalleryService {
    getPhotos(id) {
	var photos = [];
	var numberOfPhotos = 29;
	for(var i = 0; i < numberOfPhotos; i = i + 1) {
	    photos.push({img:"assets/img/gallery/test/" + i + ".jpg", author: "None"});
	}
	return photos;
    }

    getPhotographers() {
	return PHOTOGRAPHERS;
    }
}