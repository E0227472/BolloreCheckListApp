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
var forms_1 = require("@angular/forms");
var signature_pad_1 = require("angular2-signaturepad/signature-pad");
/*
  Generated class for the SignatureField component.
  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var SignatureFieldComponent = /** @class */ (function () {
    function SignatureFieldComponent() {
        this.options = {};
        this._signature = null;
        this.propagateChange = null;
    }
    SignatureFieldComponent_1 = SignatureFieldComponent;
    Object.defineProperty(SignatureFieldComponent.prototype, "signature", {
        get: function () {
            return this._signature;
        },
        set: function (value) {
            this._signature = value;
            console.log('set signature to ' + this._signature);
            console.log('signature data :');
            console.log(this.signaturePad.toData());
            this.propagateChange(this.signature);
        },
        enumerable: true,
        configurable: true
    });
    SignatureFieldComponent.prototype.writeValue = function (value) {
        if (!value) {
            return;
        }
        this._signature = value;
        this.signaturePad.fromDataURL(this.signature);
    };
    SignatureFieldComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    SignatureFieldComponent.prototype.registerOnTouched = function () {
        // no-op
    };
    SignatureFieldComponent.prototype.ngAfterViewInit = function () {
        this.signaturePad.clear();
    };
    SignatureFieldComponent.prototype.drawBegin = function () {
        //console.log('Begin Drawing');
    };
    SignatureFieldComponent.prototype.drawComplete = function () {
        this.signature = this.signaturePad.toDataURL('image/jpeg', 0.5);
    };
    SignatureFieldComponent.prototype.clear = function () {
        this.signaturePad.clear();
        this.signature = '';
    };
    __decorate([
        core_1.ViewChild(signature_pad_1.SignaturePad),
        __metadata("design:type", typeof (_a = typeof signature_pad_1.SignaturePad !== "undefined" && signature_pad_1.SignaturePad) === "function" && _a || Object)
    ], SignatureFieldComponent.prototype, "signaturePad", void 0);
    SignatureFieldComponent = SignatureFieldComponent_1 = __decorate([
        core_1.Component({
            selector: 'signature-field',
            templateUrl: 'signature-field.component.html',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return SignatureFieldComponent_1; }),
                    multi: true,
                },
            ],
        })
    ], SignatureFieldComponent);
    return SignatureFieldComponent;
    var SignatureFieldComponent_1, _a;
}());
exports.SignatureFieldComponent = SignatureFieldComponent;
//# sourceMappingURL=signature-field.component.js.map