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
var login_model_1 = require("../common/models/login.model");
var user_service_1 = require("../services/user.service");
var apiUrl = environment_1.environment.apiUrl;
var LoginComponent = /** @class */ (function () {
    //userNameShare: string;
    function LoginComponent(formBuilder, authService, router, userService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.classes = 'login-page app';
        this.showInvalidLogin = false;
        this.model = new login_model_1.LoginModel({});
        this.loginForm = this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.loadUserList();
    };
    LoginComponent.prototype.loadUserList = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (res) {
            _this.userList = res;
        });
    };
    LoginComponent.prototype.createForm = function () {
        return this.formBuilder.group({
            username: [this.model.username],
            password: [this.model.password]
        });
    };
    LoginComponent.prototype.postLogin = function () {
        var _this = this;
        var formData = this.loginForm.getRawValue();
        this.authService.login(formData.username.text, formData.password).subscribe(function (res) {
            if (res.ok) {
                _this.router.navigate(['/app/dashboard']);
            }
        }, function (err) {
            if (err.status == 401) {
                _this.showInvalidLogin = true;
            }
        });
    };
    LoginComponent.prototype.changePassword = function () {
        //let formData = this.loginForm.getRawValue();
        //this.userService.changeUserName(formData.username.username);
        this.router.navigate(['/change-password']);
    };
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "classes", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            styleUrls: ['./login.style.scss'],
            templateUrl: './login.template.html'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, auth_service_1.AuthService, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map