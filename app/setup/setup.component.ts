import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

@Component({
    selector: 'setup',
    templateUrl: 'app/setup/setup.html'
    styleUrls: ['app/setup/setup.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class SetupComponent {
    public title = "Setup goes here";
    constructor() {
	console.log("called setup constructor");
    }

    clicked(str) {
	console.log(str);
    }
}