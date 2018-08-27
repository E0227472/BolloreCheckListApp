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
var checklist_service_1 = require("../services/checklist.service");
var UserChecklistComponent = /** @class */ (function () {
    function UserChecklistComponent(checklistService) {
        this.checklistService = checklistService;
        this.showUserChecklist = true;
        this.showViewChecklist = false;
    }
    UserChecklistComponent.prototype.ngOnInit = function () {
        this.loadChecklist();
    };
    UserChecklistComponent.prototype.changeChecklistComponent = function (componentName) {
        if (componentName == 'userCheckList') {
            this.showUserChecklist = true;
            this.showViewChecklist = false;
            this.loadChecklist();
        }
    };
    UserChecklistComponent.prototype.openViewChecklist = function (item) {
        this.checklistDetail = item;
        this.showUserChecklist = false;
        this.showViewChecklist = true;
    };
    UserChecklistComponent.prototype.loadChecklist = function () {
        var _this = this;
        this.checklistService.getChecklistForUser().subscribe(function (res) {
            _this.data = res;
        });
    };
    UserChecklistComponent = __decorate([
        core_1.Component({
            selector: 'app-user-checklist',
            templateUrl: './user-checklist.component.html',
            styleUrls: ['./user-checklist.component.scss']
        }),
        __metadata("design:paramtypes", [checklist_service_1.ChecklistService])
    ], UserChecklistComponent);
    return UserChecklistComponent;
}());
exports.UserChecklistComponent = UserChecklistComponent;
//# sourceMappingURL=user-checklist.component.js.map