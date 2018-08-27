webpackJsonp(["change-password.module"],{

/***/ "./src/app/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-xl-4 col-md-6 col-10\">\r\n        <h5 class=\"widget-login-logo  fadeInUp\">\r\n          <i class=\"fa fa-circle text-gray\"></i>\r\n          Checklist\r\n          <i class=\"fa fa-circle text-warning\"></i>\r\n        </h5>\r\n        <section class=\"widget widget-login  fadeInUp\">\r\n          <header>\r\n            <h3>Login to your Checklist App</h3>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <form [formGroup]=\"changePasswordForm\" class=\"login-form mt-lg\">\r\n              <div class=\"form-group\">\r\n                <input type=\"password\" formControlName=\"oldPassword\" class=\"form-control\" required placeholder=\"Old Password\">\r\n              </div>\r\n\r\n              <div formGroupName=\"passwords\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"password\" formControlName=\"newPassword\" class=\"form-control\" required placeholder=\"New Password\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" required placeholder=\"Confirm New Password\">\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"changePasswordForm.get(['passwords','newPassword']).value != changePasswordForm.get(['passwords','confirmPassword']).value && changePasswordForm.get(['passwords','confirmPassword']).value != '' \">\r\n                  Password does not match\r\n                </div>\r\n                <div class=\"text-danger\" *ngIf=\"showError\">\r\n                  {{errorMessage}}\r\n                </div>\r\n                <div class=\"text-success\" *ngIf=\"showSuccess\">\r\n                  {{successMessage}}\r\n                </div>\r\n              </div>             \r\n\r\n              <div class=\"clearfix\">\r\n                <div class=\"btn-toolbar float-right m-t-1\">\r\n                  <a class=\"btn btn-default btn-sm\" [routerLink]=\"['/login'] \">Go to Login</a>\r\n                  <button type=\"submit\" class=\"btn btn-inverse btn-sm\" (click)=\"changePassword()\" [disabled]=\"changePasswordForm.invalid\">Submit</button>\r\n                </div>\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/change-password/change-password.component.scss":
/***/ (function(module, exports) {

module.exports = "/*\n * Typography\n * ======================================================================== */\n.ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}\n.ng-select.ng-select-opened>.ng-select-container:hover{-webkit-box-shadow:none;box-shadow:none}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}\n.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #666}\n.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}\n.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}\n.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}\n.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}\n.ng-select .ng-has-value .ng-placeholder{display:none}\n.ng-select .ng-select-container{background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\n.ng-select .ng-select-container:hover{-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-select .ng-select-container .ng-value-container{-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:10px}\n.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#aaa}\n.ng-select.ng-select-single .ng-select-container{height:36px}\n.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;padding-left:10px;padding-right:50px;top:5px}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-left:7px;padding-top:5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:0.9em;margin-right:5px;margin-bottom:5px;background-color:#f5faff;border-radius:2px;border:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-select-disabled{background-color:#f9f9f9;border:1px solid #e3e3e3}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:0px 5px 0px 1px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;padding:0px 5px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d8eafd}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #c2e0ff}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding-bottom:3px;padding-left:3px}\n.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}\n.ng-select .ng-clear-wrapper{color:#999}\n.ng-select .ng-clear-wrapper .ng-clear:hover{color:#D0021B}\n.ng-select .ng-spinner-zone{padding-right:5px;padding-top:5px}\n.ng-select .ng-arrow-wrapper{padding-right:5px;width:25px}\n.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}\n.ng-select .ng-arrow-wrapper .ng-arrow:hover{border-top-color:#666}\n.ng-select .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}\n.ng-select .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.06);box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}\n.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}\n.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}\n.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}\n.ng-dropdown-panel .ng-dropdown-panel-items{margin-bottom:1px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:8px 10px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-select-disabled{color:rgba(0,0,0,0.54)}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#ebf5ff;color:#333}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected{color:#333;background-color:#f5faff;font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{color:#333;background-color:#f5faff}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label{font-weight:600}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#ebf5ff;color:#333}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#cccccc}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}\n.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-right:5px;font-size:80%;font-weight:400}\n/***********************************/\n/**             LOGIN             **/\n/***********************************/\n.login-page {\n  background-color: #ddd; }\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 0.9rem;\n  color: #868e96;\n  text-align: center; }\n@media (min-height: 600px) {\n    .login-page .page-footer {\n      position: fixed;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n.widget-login-container {\n  padding-top: 10%; }\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n.widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n.widget-login {\n  padding: 30px; }\n.widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n.widget-login-info {\n  font-size: 0.9rem;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n.login-form .form-control {\n  font-size: 0.9rem;\n  border: none;\n  background-color: #eeeeee; }\n.login-form .form-control:focus {\n    background-color: #868e96; }\n.login-error {\n  margin-right: 100px;\n  margin-top: 5px; }\n"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_auth_auth_service__ = __webpack_require__("./src/app/common/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_models_password_model__ = __webpack_require__("./src/app/common/models/password.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var apiUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(formBuilder, authService, router, userService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.classes = 'login-page app';
        this.showInvalidLogin = false;
        this.showError = false;
        this.showSuccess = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_5__common_models_password_model__["a" /* PasswordModel */]({});
        this.changePasswordForm = this.createForm();
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUserNameMessage.subscribe(function (message) { return _this.currentUserName = message; });
        if (this.currentUserName == '') {
            this.router.navigate(['/login']);
        }
    };
    ChangePasswordComponent.prototype.createForm = function () {
        return this.formBuilder.group({
            oldPassword: [this.model.oldPassword],
            passwords: this.formBuilder.group({
                newPassword: [this.model.newPassword, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
                confirmPassword: [this.model.confirmPassword, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            }, { validator: this.passwordConfirming })
        });
    };
    ChangePasswordComponent.prototype.passwordConfirming = function (c) {
        if (c.get('newPassword').value !== c.get('confirmPassword').value) {
            return { invalid: true };
        }
    };
    ChangePasswordComponent.prototype.changePassword = function () {
        var _this = this;
        var formData = this.changePasswordForm.getRawValue();
        this.userService.changePassword(this.currentUserName, formData.oldPassword, formData.passwords.newPassword).subscribe(function (res) {
            _this.successMessage = res.json();
            _this.showSuccess = true;
            _this.showError = false;
            _this.model = new __WEBPACK_IMPORTED_MODULE_5__common_models_password_model__["a" /* PasswordModel */]({});
            _this.changePasswordForm = _this.createForm();
        }, function (err) {
            _this.errorMessage = err.json();
            _this.showError = true;
            _this.showSuccess = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], ChangePasswordComponent.prototype, "classes", void 0);
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__("./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__("./src/app/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__common_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function() { return ChangePasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_password_component__ = __webpack_require__("./src/app/change-password/change-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__change_password_component__["a" /* ChangePasswordComponent */], pathMatch: 'full' }
];
var ChangePasswordModule = /** @class */ (function () {
    function ChangePasswordModule() {
    }
    ChangePasswordModule.routes = routes;
    ChangePasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__change_password_component__["a" /* ChangePasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_4__ng_select_ng_select__["b" /* NgSelectModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* ReactiveFormsModule */]
            ],
        })
    ], ChangePasswordModule);
    return ChangePasswordModule;
}());



/***/ })

});
//# sourceMappingURL=change-password.module.chunk.js.map