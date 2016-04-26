import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app/app.component';
import {
  APP_BASE_HREF
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  RouteConfig,
  Location
} from 'angular2/router';

import {provide} from 'angular2/core';
import {LocationStrategy, Location, HashLocationStrategy } from 'angular2/router';
import {UPLOAD_DIRECTIVES} from 'deps/ng2-uploader/ng2-uploader';

bootstrap(AppComponent,[ HTTP_PROVIDERS, ROUTER_PROVIDERS, UPLOAD_DIRECTIVES,
			provide(APP_BASE_HREF, {useValue : '/'}),
			provide(LocationStrategy, {useClass: HashLocationStrategy})]);