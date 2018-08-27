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
var http_1 = require("@angular/http");
var auth_service_1 = require("../common/auth/auth.service");
var environment_1 = require("../../environments/environment");
var Observable_1 = require("rxjs/Observable");
var apiUrl = environment_1.environment.apiUrl;
var UserService = /** @class */ (function () {
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    UserService.prototype.getAllUser = function () {
        return this.authService.AuthGet(apiUrl + '/users/GetAllUser').map(function (response) { return response.json(); });
    };
    UserService.prototype.getAll = function () {
        return this.http.get(apiUrl + '/users').map(function (response) { return response.json(); });
    };
    UserService.prototype.getSubAdmin = function () {
        return this.authService.AuthGet(apiUrl + '/users/GetSubAdmin').map(function (response) { return response.json(); });
    };
    UserService.prototype.changePassword = function (username, oldPassword, newPassword) {
        var data = { username: username, oldPassword: oldPassword, newPassword: newPassword };
        var body = JSON.stringify(data);
        var header = new http_1.Headers();
        header.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: header });
        return this.http.post(apiUrl + '/users/ChangePassword', body, options)
            .map(function (response) {
            return response;
        })
            .catch(function (err) {
            return Observable_1.Observable.throw(err);
        });
    };
    UserService.prototype.updatePassword = function (data) {
        return this.authService.AuthPost(apiUrl + '/users/UpdatePassword', data);
    };
    UserService.prototype.delete = function (id) {
        return this.authService.AuthDelete(apiUrl + '/users/' + id);
    };
    UserService.prototype.createUser = function (data) {
        return this.authService.AuthPost(apiUrl + '/users/CreateUser', data);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, auth_service_1.AuthService])
    ], UserService);
    return UserService;
    var _a;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map