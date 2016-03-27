import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
@Component({
    selector: 'fe-nav-bar',
    templateUrl: 'app/fe-nav-bar/fe-nav-bar.html'
    styleUrls: ['app/fe-nav-bar/fe-nav-bar.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class FeNavBarComponent {
    public title = "About";
    constructor() {
	console.log("called navbar constructor");
    }

    clicked(str) {
	console.log(str);
    }
}