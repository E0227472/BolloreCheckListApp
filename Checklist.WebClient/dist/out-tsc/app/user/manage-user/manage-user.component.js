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
var ngx_bootstrap_1 = require("ngx-bootstrap");
var auth_service_1 = require("../../common/auth/auth.service");
var user_service_1 = require("../../services/user.service");
var password_model_1 = require("../../common/models/password.model");
var user_model_1 = require("../../common/models/user.model");
var ManageUserComponent = /** @class */ (function () {
    function ManageUserComponent(authService, userService, formBuilder) {
        this.authService = authService;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.deleteMessage = 'Are you sure to delete?';
        this.roleList = [{ id: 2, text: 'SubAmin' }, { id: 3, text: 'User' }];
        this.showSubAdmin = false;
        this.showUserError = false;
        this.model = new password_model_1.PasswordModel({});
        this.changePasswordForm = this.createForm();
        this.userModel = new user_model_1.UserModel({});
        this.createUserForm = this.createNewUserForm();
    }
    ManageUserComponent.prototype.ngOnInit = function () {
        this.loadUsers();
        this.loadSubAdmin();
    };
    ManageUserComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getAllUser().subscribe(function (res) {
            _this.data = res;
        });
    };
    ManageUserComponent.prototype.showPassword = function (id) {
        this.changePasswordForm = this.createForm();
        this.selectedId = id;
        this.passwordWindow.show();
    };
    ManageUserComponent.prototype.createForm = function () {
        return this.formBuilder.group({
            passwords: this.formBuilder.group({
                newPassword: [this.model.newPassword, [forms_1.Validators.required]],
                confirmPassword: [this.model.confirmPassword, [forms_1.Validators.required]],
            }, { validator: this.passwordConfirming })
        });
    };
    ManageUserComponent.prototype.passwordConfirming = function (c) {
        if (c.get('newPassword').value !== c.get('confirmPassword').value) {
            return { invalid: true };
        }
    };
    ManageUserComponent.prototype.updatePassword = function () {
        var _this = this;
        var id = this.selectedId;
        var formData = this.changePasswordForm.getRawValue();
        var data = { id: id, password: formData.passwords.newPassword };
        this.userService.updatePassword(data).subscribe(function (res) {
            _this.passwordWindow.hide();
        });
    };
    ManageUserComponent.prototype.confirmDelete = function (id, role) {
        if (role == 'SubAdmin')
            this.deleteMessage = 'If you delete a SubAdmin its Users will also get deleted with SubAdmin. Are you sure to delete?';
        else
            this.deleteMessage = 'If you delete this user all results related to this user will be deleted. Are you sure to delete?';
        this.deleteId = id;
        this.confirmWindow.show();
    };
    ManageUserComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.delete(this.deleteId).subscribe(function (res) {
            _this.loadUsers();
            _this.confirmWindow.hide();
        }, function (err) {
            _this.deleteMessage = 'Sub-Admin Id being used in Checklist. Delete Sub-Admin from all Checklists.';
        });
    };
    ManageUserComponent.prototype.createNewUserForm = function () {
        return this.formBuilder.group({
            firstName: this.userModel.firstName,
            lastName: this.userModel.lastName,
            username: this.userModel.username,
            role: null,
            userSubAdmin: null,
            passwords: this.formBuilder.group({
                newPassword: [this.model.newPassword, [forms_1.Validators.required]],
                confirmPassword: [this.model.confirmPassword, [forms_1.Validators.required]],
            }, { validator: this.passwordConfirming })
        });
    };
    ManageUserComponent.prototype.showCreateUser = function () {
        this.loadSubAdmin();
        this.createUserForm = this.createNewUserForm();
        this.showUserError = false;
        this.createUserWindow.show();
    };
    ManageUserComponent.prototype.onRoleChange = function ($event) {
        if ($event.text == 'User')
            this.showSubAdmin = true;
        else {
            this.createUserForm.get('userSubAdmin').clearValidators();
            this.createUserForm.get('userSubAdmin').updateValueAndValidity();
            this.showSubAdmin = false;
        }
    };
    ManageUserComponent.prototype.loadSubAdmin = function () {
        var _this = this;
        this.userService.getSubAdmin().subscribe(function (res) {
            _this.subAdminList = res;
        });
    };
    ManageUserComponent.prototype.postNewUser = function () {
        var _this = this;
        var formData = this.createUserForm.getRawValue();
        var data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            username: formData.username,
            role: formData.role,
            UserSubAdminId: formData.userSubAdmin,
            password: formData.passwords.newPassword,
        };
        this.userService.createUser(data).subscribe(function (res) {
            _this.loadUsers();
            _this.createUserWindow.hide();
        }, function (err) {
            _this.userErrorMessage = err.json();
            _this.showUserError = true;
        });
    };
    __decorate([
        core_1.ViewChild('passwordWindow'),
        __metadata("design:type", typeof (_a = typeof ngx_bootstrap_1.ModalDirective !== "undefined" && ngx_bootstrap_1.ModalDirective) === "function" && _a || Object)
    ], ManageUserComponent.prototype, "passwordWindow", void 0);
    __decorate([
        core_1.ViewChild('confirmWindow'),
        __metadata("design:type", typeof (_b = typeof ngx_bootstrap_1.ModalDirective !== "undefined" && ngx_bootstrap_1.ModalDirective) === "function" && _b || Object)
    ], ManageUserComponent.prototype, "confirmWindow", void 0);
    __decorate([
        core_1.ViewChild('createUserWindow'),
        __metadata("design:type", typeof (_c = typeof ngx_bootstrap_1.ModalDirective !== "undefined" && ngx_bootstrap_1.ModalDirective) === "function" && _c || Object)
    ], ManageUserComponent.prototype, "createUserWindow", void 0);
    ManageUserComponent = __decorate([
        core_1.Component({
            selector: 'app-manage-user',
            templateUrl: './manage-user.component.html',
            styleUrls: ['./manage-user.component.scss']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, user_service_1.UserService, typeof (_d = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _d || Object])
    ], ManageUserComponent);
    return ManageUserComponent;
    var _a, _b, _c, _d;
}());
exports.ManageUserComponent = ManageUserComponent;
//# sourceMappingURL=manage-user.component.js.map