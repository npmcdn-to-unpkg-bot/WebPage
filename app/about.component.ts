import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'about',
    templateUrl: 'app/views/about.html',
    directives: [ROUTER_DIRECTIVES]
})

export class AboutComponent {
    public title = "About";
    
    constructor() {
	console.log("launched about site");
    }
}