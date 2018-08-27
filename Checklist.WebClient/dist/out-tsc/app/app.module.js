"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var ng_select_1 = require("@ng-select/ng-select");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
var app_config_1 = require("./app.config");
var angular2_signaturepad_1 = require("angular2-signaturepad");
var error_component_1 = require("./error/error.component");
var user_service_1 = require("./services/user.service");
//import { SignatureFieldComponent } from './common/signature-field/signature-field.component';
var APP_PROVIDERS = [
    app_config_1.AppConfig
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [
                app_component_1.AppComponent,
                error_component_1.ErrorComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                ng_select_1.NgSelectModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES, {
                    useHash: true,
                    preloadingStrategy: router_1.PreloadAllModules
                }),
                angular2_signaturepad_1.SignaturePadModule
            ],
            providers: [
                user_service_1.UserService,
                APP_PROVIDERS
            ].concat(app_routes_1.authProviders, [
                {
                    provide: ng_select_1.NG_SELECT_DEFAULT_CONFIG,
                    useValue: {
                        notFoundText: 'Items not found'
                    }
                }
            ])
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map