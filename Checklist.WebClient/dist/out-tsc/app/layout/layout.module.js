"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery-slimscroll");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var layout_routes_1 = require("./layout.routes");
var layout_component_1 = require("./layout.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var navbar_component_1 = require("./navbar/navbar.component");
var search_pipe_1 = require("./pipes/search.pipe");
var router_1 = require("@ngx-loading-bar/router");
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ngx_bootstrap_1.TooltipModule.forRoot(),
                ngx_bootstrap_1.BsDropdownModule.forRoot(),
                layout_routes_1.ROUTES,
                forms_1.FormsModule,
                router_1.LoadingBarRouterModule
            ],
            declarations: [
                layout_component_1.LayoutComponent,
                sidebar_component_1.SidebarComponent,
                navbar_component_1.NavbarComponent,
                search_pipe_1.SearchPipe,
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=layout.module.js.map