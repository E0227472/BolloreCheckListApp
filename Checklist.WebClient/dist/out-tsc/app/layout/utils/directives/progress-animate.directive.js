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
var ProgressAnimateDirective = /** @class */ (function () {
    function ProgressAnimateDirective(el) {
        this.$el = jQuery(el.nativeElement);
    }
    ProgressAnimateDirective.prototype.ngOnInit = function () {
        var width = this.$el.data('width'), $bar = this.$el;
        $bar.css('opacity', 0);
        setTimeout(function () {
            $bar.css({
                transition: 'none',
                width: 0,
                opacity: 1
            });
            setTimeout(function () {
                $bar.css('transition', '').css('width', width);
            });
        });
    };
    ProgressAnimateDirective = __decorate([
        core_1.Directive({
            selector: '[progress-animate]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
    ], ProgressAnimateDirective);
    return ProgressAnimateDirective;
    var _a;
}());
exports.ProgressAnimateDirective = ProgressAnimateDirective;
//# sourceMappingURL=progress-animate.directive.js.map