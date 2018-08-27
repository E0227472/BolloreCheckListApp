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
var router_1 = require("@angular/router");
var auth_service_1 = require("../common/auth/auth.service");
var environment_1 = require("../../environments/environment");
var password_model_1 = require("../common/models/password.model");
var user_service_1 = require("../services/user.service");
var apiUrl = environment_1.environment.apiUrl;
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
        this.model = new password_model_1.PasswordModel({});
        this.changePasswordForm = this.createForm();
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.loadUserList();
        //this.userService.currentUserNameMessage.subscribe(message => this.currentUserName = message);
        //if (this.currentUserName == '') {
        //  this.router.navigate(['/login']);
        //}
    };
    ChangePasswordComponent.prototype.loadUserList = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (res) {
            _this.userList = res;
        });
    };
    ChangePasswordComponent.prototype.createForm = function () {
        return this.formBuilder.group({
            username: [this.model.username],
            oldPassword: [this.model.oldPassword],
            passwords: this.formBuilder.group({
                newPassword: [this.model.newPassword, [forms_1.Validators.required]],
                confirmPassword: [this.model.confirmPassword, [forms_1.Validators.required]],
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
        debugger;
        var formData = this.changePasswordForm.getRawValue();
        this.userService.changePassword(formData.username.text, formData.oldPassword, formData.passwords.newPassword).subscribe(function (res) {
            _this.successMessage = res.json();
            _this.showSuccess = true;
            _this.showError = false;
            _this.model = new password_model_1.PasswordModel({});
            _this.changePasswordForm = _this.createForm();
        }, function (err) {
            _this.errorMessage = err.json();
            _this.showError = true;
            _this.showSuccess = false;
        });
    };
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object)
    ], ChangePasswordComponent.prototype, "classes", void 0);
    ChangePasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-change-password',
            templateUrl: './change-password.component.html',
            styleUrls: ['./change-password.component.scss']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, auth_service_1.AuthService, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, user_service_1.UserService])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
    var _a, _b;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;
//# sourceMappingURL=change-password.component.js.map