import {Component} from 'angular2/core';

@Component({
  selector: 'md-sub-menu',
    host: {
	'(mouseenter)': 'onMouseEnter()',
	'(mouseleave)': 'onMouseLeave()',
	'[class.show-sub-menu]': 'visible'
    },
  template: '<ng-content></ng-content><md-backdrop class="md-backdrop"></md-backdrop>',
  styleUrls: ['./app/submenu/submenu.css']
})

export class MdSubMenu {
    visible: boolean = false;

    /*toggle() {
	console.log("toggle in submenu");
	this.visible = !this.visible;
    }*/

    onMouseLeave() {
	console.log("good bye world");
	this.visible = !this.visible;
    }
    
    onMouseEnter() {
	console.log("hello world");
	this.visible = !this.visible;
    }
}