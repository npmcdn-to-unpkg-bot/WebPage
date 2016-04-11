import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {MdMenu} from 'app/menu/menu.component';

@Component({
    selector: 'fe-nav-bar',
    templateUrl: 'app/fe-nav-bar/fe-nav-bar.html'
    styleUrls: ['app/fe-nav-bar/fe-nav-bar.css'],
    directives: [MdMenu, ROUTER_DIRECTIVES]
})

export class FeNavBarComponent {
    public title = "About";

    public categories = [2016,2015,2014];
    
    constructor() {
    }

    clicked(str) {
	console.log(str);
    }
}
