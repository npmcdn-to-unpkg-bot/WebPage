import {Component} from 'angular2/core';

@Component({
  selector: 'md-menu',
    host: {
      '(click)': 'toggle()',
      '[class.show-menu]': 'visible'
    },
  template: '<ng-content></ng-content><md-backdrop class="md-backdrop"></md-backdrop>',
  styleUrls: ['./app/menu/menu.css']
})
export class MdMenu {
    visible: boolean = false;
    toggle() {
        this.visible = !this.visible;
    }
}