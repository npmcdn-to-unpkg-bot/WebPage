import {Component} from 'angular2/core';

@Component({
  selector: 'md-menu',
    host: {
	'(click)': 'toggle()',
	'[class.show-menu]': 'visibleSub'
    },
  template: '<ng-content></ng-content><md-backdrop class="md-backdrop"></md-backdrop>',
  styleUrls: ['./app/menu/menu.css']
})
export class MdMenu {
    visibleSub: boolean = false;

    toggle() {
	console.log("toggle");
	this.visibleSub = !this.visibleSub;
    }
}