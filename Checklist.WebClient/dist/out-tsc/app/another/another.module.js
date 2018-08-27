"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var another_component_1 = require("./another.component");
exports.routes = [
    { path: '', component: another_component_1.AnotherComponent, pathMatch: 'full' }
];
var AnotherModule = /** @class */ (function () {
    function AnotherModule() {
    }
    AnotherModule.routes = exports.routes;
    AnotherModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(exports.routes)],
            declarations: [another_component_1.AnotherComponent]
        })
    ], AnotherModule);
    return AnotherModule;
}());
exports.AnotherModule = AnotherModule;
//# sourceMappingURL=another.module.js.map