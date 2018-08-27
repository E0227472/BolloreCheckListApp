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
var ChecklistAnswerService = /** @class */ (function () {
    function ChecklistAnswerService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ChecklistAnswerService.prototype.getChecklistQuestion = function (id) {
        return this.authService.AuthGet(apiUrl + '/UserAnswer/GetChecklistQuestion?id=' + id).map(function (response) { return response.json(); });
    };
    ChecklistAnswerService.prototype.saveChecklistAnswer = function (data) {
        return this.authService.AuthPost(apiUrl + '/UserAnswer/SaveChecklistAnswer', data);
    };
    ChecklistAnswerService.prototype.getResultAnswer = function (checklistId, resultId) {
        return this.authService.AuthGet(apiUrl + '/Result/GetResultAnswer?checklistId=' + checklistId + '&resultId=' + resultId).map(function (response) { return response.json(); });
    };
    ChecklistAnswerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, auth_service_1.AuthService])
    ], ChecklistAnswerService);
    return ChecklistAnswerService;
    var _a;
}());
exports.ChecklistAnswerService = ChecklistAnswerService;
//# sourceMappingURL=checklist-answer.service.js.map