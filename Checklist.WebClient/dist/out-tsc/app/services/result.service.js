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
var apiUrl = environment_1.environment.apiUrl;
var ResultService = /** @class */ (function () {
    function ResultService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ResultService.prototype.getResult = function (hubName, year, employementType) {
        return this.authService.AuthGet(apiUrl + "/Result/GetResult?hubName=" + hubName + "&year=" + year + "&employementType=" + employementType)
            .map(function (response) { return response.json(); });
    };
    //saveChecklistAnswer(data) {
    //  return this.authService.AuthPost(apiUrl + '/UserAnswer/SaveChecklistAnswer', data);
    //}
    ResultService.prototype.getHubItems = function () {
        return this.authService.AuthGet(apiUrl + '/Result/GetHubItems').map(function (response) { return response.json(); });
    };
    ResultService.prototype.deleteResult = function (id) {
        return this.authService.AuthGet(apiUrl + '/Result/DeleteResult?resultId=' + id).map(function (response) { return response.json(); });
    };
    ResultService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, auth_service_1.AuthService])
    ], ResultService);
    return ResultService;
    var _a;
}());
exports.ResultService = ResultService;
//# sourceMappingURL=result.service.js.map