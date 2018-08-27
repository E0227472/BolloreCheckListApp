"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AnimateNumberDirective = /** @class */ (function () {
    function AnimateNumberDirective(el) {
        this.$el = jQuery(el.nativeElement);
    }
    AnimateNumberDirective.prototype.ngOnInit = function () {
        this.$el.animateNumber({
            number: this.$el.text().replace(/ /gi, ''),
            numberStep: jQuery.animateNumber.numberStepFactories.separator(' '),
            easing: 'easeInQuad'
        }, 1000);
    };
    AnimateNumberDirective = __decorate([
        core_1.Directive({
            selector: '[number-animate]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
    ], AnimateNumberDirective);
    return AnimateNumberDirective;
    var _a;
}());
exports.AnimateNumberDirective = AnimateNumberDirective;
//# sourceMappingURL=animate-number.directive.js.map