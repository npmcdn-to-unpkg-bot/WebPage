import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

import {MdMenu} from 'app/menu/menu.component';

import {SetupComponent} from 'app/setup/setup.component';
import {FeNavBarComponent} from 'app/fe-nav-bar/fe-nav-bar.component';
import {AboutComponent} from 'app/about/about.component';
import {ShaderComponent} from 'app/shaders/shaders.component';
import {GalleryComponent} from 'app/gallery/gallery.component';


@Component({
    selector: 'flogsta-engine',
    templateUrl: 'app/app/app.html',
    styleUrls: ['app/app/app.css'],
    directives: [SetupComponent, FeNavBarComponent, MdMenu, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/setup', name: 'Setup', component: SetupComponent},
    {path:'/shaders', name: 'Shaders', component: ShaderComponent},
    {path:'/gallery', name: 'Gallery', component: GalleryComponent},
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
