import {Component} from 'angular2/core';

@Component({
  selector: 'md-sub-menu',
    host: {
	'(click)': 'toggle()',
	'(mouseenter)': 'onMouseEnter()',
	'[class.show-sub-menu]': 'visibleSub'
    },
  template: '<ng-content></ng-content><md-backdrop class="md-backdrop"></md-backdrop>',
  styleUrls: ['./app/submenu/submenu.css']
})
export class MdSubMenu {
    visibleSub: boolean = false;

    toggle() {
	console.log("toggle in submenu");
	this.visibleSub = !this.visibleSub;
    }

    onMouseEnter() {
	console.log("hello world");
	this.visibleSub = !this.visibleSub;
    }
}