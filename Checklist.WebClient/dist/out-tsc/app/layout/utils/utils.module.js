"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var animate_number_directive_1 = require("./directives/animate-number.directive");
var check_all_directive_1 = require("./directives/check-all.directive");
var progress_animate_directive_1 = require("./directives/progress-animate.directive");
var UtilsModule = /** @class */ (function () {
    function UtilsModule() {
    }
    UtilsModule = __decorate([
        core_1.NgModule({
            declarations: [
                animate_number_directive_1.AnimateNumberDirective,
                check_all_directive_1.CheckAllDirective,
                progress_animate_directive_1.ProgressAnimateDirective
            ],
            exports: [
                animate_number_directive_1.AnimateNumberDirective,
                check_all_directive_1.CheckAllDirective,
                progress_animate_directive_1.ProgressAnimateDirective
            ],
            imports: [
                common_1.CommonModule
            ]
        })
    ], UtilsModule);
    return UtilsModule;
}());
exports.UtilsModule = UtilsModule;
//# sourceMappingURL=utils.module.js.map