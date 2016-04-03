import {Injectable} from 'angular2/core';
import {PHOTOGRAPHERS} from './photographers';

@Injectable()
export class GalleryService {
    getImages() {
	return 0;
    }

    getPhotographers() {
	return PHOTOGRAPHERS;
    }
}