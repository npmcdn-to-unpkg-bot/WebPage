import {Component} from 'angular2/core'

@Component({
    selector: 'shader',
    templateUrl: 'app/shaders/shaders.html',
        styleUrls: ['app/shaders/shaders.css']
})

export class ShaderComponent {
    public title = "Shaders hello";
    
    constructor() {
	console.log("ShaderComponent constructed");
    }
}