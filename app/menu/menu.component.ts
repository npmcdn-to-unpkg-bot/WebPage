import {Component} from 'angular2/core';

@Component({
  selector: 'md-menu',
    host: {
	'(mouseenter)': 'onMouseEnter()',
	'(mouseleave)': 'onMouseLeave()',
	'(click)': 'toggle()',
	'[class.show-menu]': 'visible'
    },
  template: '<ng-content></ng-content><md-backdrop class="md-backdrop"></md-backdrop>',
  styleUrls: ['./app/menu/menu.css']
})
export class MdMenu {
    visible: boolean = false;
    toggle() {
	console.log("toggle");
	//this.visible = !this.visible;
    }

    onMouseEnter() {
	console.log("md-menu hover");
	this.visible = !this.visible;
    }

    onMouseLeave() {
	console.log("md-menu leave");
	this.visible = false;
    }
}