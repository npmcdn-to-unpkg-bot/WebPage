System.register(['angular2/core', 'angular2/router', './fe-nav-bar.component', './about.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, fe_nav_bar_component_1, about_component_1;
    var AppComponent, AUTHORS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (fe_nav_bar_component_1_1) {
                fe_nav_bar_component_1 = fe_nav_bar_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.about = 'About us';
                    this.authors = AUTHORS;
                }
                AppComponent.prototype.clicked = function (string) {
                    console.log("clocked menu");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'flogsta-engine',
                        templateUrl: 'app/views/my-app.html',
                        styleUrls: ['app/css/flogsta-engine.css'],
                        directives: [fe_nav_bar_component_1.FeNavBarComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            AUTHORS = [
                { year: 1987, name: 'Mattias Linder' },
                { year: 1992, name: 'Simon Bergström' }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map