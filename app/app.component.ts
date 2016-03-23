import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

import {FeNavBarComponent} from './fe-nav-bar.component';
import {AboutComponent} from './about.component';

@Component({
    selector: 'flogsta-engine',
    templateUrl: 'app/views/my-app.html',
    styleUrls: ['app/css/flogsta-engine.css'],
    directives: [FeNavBarComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/about', name: 'About', component: AboutComponent,  useAsDefault: true}
])

export class AppComponent {
    public about = 'About us';
    public authors = AUTHORS;

    clicked(string: str) {
	console.log("clocked menu");
    }
}

interface Author {
    year: number;
    name: string;
}

var AUTHORS : Author[] = [
    {year : 1987, name : 'Mattias Linder'},
    {year : 1992, name : 'Simon Bergström'}
];

