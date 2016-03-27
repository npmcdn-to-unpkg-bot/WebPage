import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app/app.component';
//import {ROUTER_PROVIDERS,RouteConfig} from 'angular2/router';
import {
  APP_BASE_HREF
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  RouteConfig,
  Location
} from 'angular2/router';

import {provide} from 'angular2/core';
import {LocationStrategy, Location, HashLocationStrategy } from 'angular2/router';

bootstrap(AppComponent,[ROUTER_PROVIDERS,provide(APP_BASE_HREF, {useValue : '/'}),
			provide(LocationStrategy, {useClass: HashLocationStrategy})]);