import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

import {FeNavBarComponent} from 'app/fe-nav-bar/fe-nav-bar.component';
import {AboutComponent} from 'app/about/about.component';
import {ShaderComponent} from 'app/shaders/shaders.component';

@Component({
    selector: 'flogsta-engine',
    templateUrl: 'app/app/app.html',
    styleUrls: ['app/app/app.css'],
    directives: [FeNavBarComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/shaders', name: 'Shaders', component: ShaderComponent},
    {path:'/about', name: 'About', component: AboutComponent,  useAsDefault: true}
])

export class AppComponent {
    public about = 'About us';

    constructor() {
	console.log("constructed my-app");
    }
    
    clicked(string: str) {
	console.log("clocked menu");
    }
}

