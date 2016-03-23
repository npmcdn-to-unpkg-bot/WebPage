import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'fe-nav-bar',
    templateUrl: 'app/views/fe-nav-bar.html',
    styleUrls: ['app/css/fe-nav-bar.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class FeNavBarComponent {
    public title = "Flogsta engine";
    constructor() {
	console.log("called navbar constructor");
    }

    clicked(str) {
	console.log(str);
    }
}