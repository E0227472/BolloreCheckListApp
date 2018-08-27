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
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/of");
require("rxjs/add/observable/fromPromise");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/observable/throw");
var environment_1 = require("../../../environments/environment");
var apiUrl = environment_1.environment.apiUrl;
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.login = function (username, password) {
        var data = { username: username, password: password };
        var body = JSON.stringify(data);
        var header = new http_1.Headers();
        header.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: header });
        return this.http.post(apiUrl + '/users/authenticate', body, options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return response;
        })
            .catch(function (err) {
            return Observable_1.Observable.throw(err);
        });
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthService.prototype.getCurrentUser = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser;
    };
    /**
    * @param options if options are not supplied the default content type is application/json
    */
    AuthService.prototype.AuthGet = function (url) {
        return this.http.get(url, this.setAuthHeaders())
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable_1.Observable.throw(err);
        });
    };
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    AuthService.prototype.AuthPut = function (url, data) {
        var body = JSON.stringify(data);
        return this.http.put(url, body, this.setAuthHeaders())
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable_1.Observable.throw(err);
        });
    };
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    AuthService.prototype.AuthDelete = function (url) {
        return this.http.delete(url, this.setAuthHeaders())
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable_1.Observable.throw(err);
        });
    };
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    AuthService.prototype.AuthPost = function (url, data) {
        var body = JSON.stringify(data);
        return this.http.post(url, body, this.setAuthHeaders())
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable_1.Observable.throw(err);
        });
    };
    AuthService.prototype.setAuthHeaders = function () {
        // create authorization header with jwt token    
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var expires = currentUser.expires;
        if (currentUser && currentUser.token && expires > new Date()) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            headers.append('Content-Type', 'application/json');
            return new http_1.RequestOptions({ headers: headers });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map