import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {MdMenu} from 'app/menu/menu.component';
import {MdSubMenu} from 'app/submenu/submenu.component';

@Component({
    selector: 'fe-nav-bar',
    templateUrl: 'app/fe-nav-bar/fe-nav-bar.html'
    styleUrls: ['app/fe-nav-bar/fe-nav-bar.css'],
    directives: [MdMenu, MdSubMenu, ROUTER_DIRECTIVES]
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
