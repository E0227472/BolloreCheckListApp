webpackJsonp(["dashboard.module"],{

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_auth_auth_service__ = __webpack_require__("./src/app/common/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.userService.getAllUser().subscribe(function (res) {
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.template.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_widget_widget_module__ = __webpack_require__("./src/app/layout/widget/widget.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */], pathMatch: 'full' }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule.routes = routes;
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_4__layout_widget_widget_module__["a" /* WidgetModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.template.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">Dashboard <small><small></small></small></h1>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <!--<section widget class=\"widget\">\n      <header>\n        <h4>\n          Example <span class=\"fw-semi-bold\">Widget</span>\n        </h4>\n        <div class=\"widget-controls\">\n          <a data-widgster=\"expand\" title=\"Expand\" href=\"#\"><i class=\"glyphicon glyphicon-chevron-up\"></i></a>\n          <a data-widgster=\"collapse\" title=\"Collapse\" href=\"#\"><i class=\"glyphicon glyphicon-chevron-down\"></i></a>\n          <a href=\"#\" data-widgster=\"close\"><i class=\"glyphicon glyphicon-remove\"></i></a>\n        </div>\n      </header>\n      <div class=\"widget-body\">\n       \n        <p class=\"lead\">You are looking at a completely new version of Sing App built\n          with brand new <strong>Angular Final Release</strong></p>\n        <p class=\"fs-mini\">Made by <a href=\"http://flatlogic.com\" target=\"_blank\">Flatlogic</a>.</p>\n      </div>\n    </section>-->\n  </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map