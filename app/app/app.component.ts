import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

import {SetupComponent} from 'app/setup/setup.component';
import {FeNavBarComponent} from 'app/fe-nav-bar/fe-nav-bar.component';
import {AboutComponent} from 'app/about/about.component';
import {ShaderComponent} from 'app/shaders/shaders.component';
import {GalleryComponent} from 'app/gallery/gallery.component';
import {GalleryService} from 'app/gallery/gallery.service';
import {AlbumService} from 'app/album/album.service';
import {AlbumComponent} from 'app/album/album.component';
import {UploadComponent} from 'app/upload/upload.component';

@Component({
    selector: 'flogsta-engine',
    templateUrl: 'app/app/app.html',
    styleUrls: ['app/app/app.css'],
    directives: [SetupComponent, FeNavBarComponent, ROUTER_DIRECTIVES,MATERIAL_DIRECTIVES]
})

@RouteConfig([
    {path:'/setup', name: 'Setup', component: SetupComponent},
    {path:'/shaders', name: 'Shaders', component: ShaderComponent},
    {path:'/album', name: 'Album', component: AlbumComponent},
    {path:'/gallery', name: 'Gallery', component: GalleryComponent},
    {path:'/gall/:id', name: 'GalleryYear', component: GalleryComponent},
    {path:'/albums', name: 'Albums', component: AlbumComponent},
    {path:'/upload', name: 'Upload', component: UploadComponent},
    {path:'/about', name: 'About', component: AboutComponent,  useAsDefault: true}
])

export class AppComponent {
    public about = 'About us';

    constructor() {
    }
    
    clicked(string: str) {
	console.log("clocked menu");
    }
}
