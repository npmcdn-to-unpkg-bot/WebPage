import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

@Component({
    selector: 'about',
    templateUrl: 'app/about/about.html',
    styleUrls: ['app/about/about.css']
    //directives: [MATERIAL_DIRECTIVES]
})

export class AboutComponent {
    public title = "About";
    public authors = AUTHORS;
    
    constructor() {
	console.log("launched about site");
	console.log("screenwidth: " + screen.width);
    }
}

interface Author {
    year: number;
    name: string;
}

var AUTHORS : Author[] = [
    {born : 1987, name : 'Mattias Linder', about: 'lorem ipsum mattias lol', github: 'https://github.com/mali1488',img: 'assets/img/ml.jpg'},
    {born : 1992, name : 'Simon Bergström', about: 'lorem ipsum simon bergström lolol', github: 'https://github.com/menuan', img: 'assets/img/sb.jpg'}
];