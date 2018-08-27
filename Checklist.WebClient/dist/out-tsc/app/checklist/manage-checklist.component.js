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
var ManageChecklistComponent = /** @class */ (function () {
    function ManageChecklistComponent(checklistService) {
        this.checklistService = checklistService;
        this.showCreateCheck = false;
        this.showChecklist = true;
    }
    ManageChecklistComponent.prototype.ngOnInit = function () {
        this.loadChecklist();
    };
    ManageChecklistComponent.prototype.changeChecklistComponent = function (componentName) {
        if (componentName == 'checkList') {
            this.showCreateCheck = false;
            this.showChecklist = true;
            this.loadChecklist();
        }
        else if (componentName == 'create') {
            this.showCreateCheck = true;
            this.showChecklist = false;
            this.createDetail = { id: 0, hubName: '' };
        }
    };
    ManageChecklistComponent.prototype.loadChecklist = function () {
        var _this = this;
        this.checklistService.getChecklist().subscribe(function (res) {
            _this.data = res;
        });
    };
    ManageChecklistComponent.prototype.editChecklist = function (item) {
        this.createDetail = { id: item.id, hubName: item.hubName, isActive: item.isActive, subAdminId: item.subAdminId };
        this.showCreateCheck = true;
        this.showChecklist = false;
    };
    ManageChecklistComponent = __decorate([
        core_1.Component({
            selector: 'app-manage-checklist',
            templateUrl: './manage-checklist.component.html',
            styleUrls: ['./manage-checklist.component.scss']
        }),
        __metadata("design:paramtypes", [checklist_service_1.ChecklistService])
    ], ManageChecklistComponent);
    return ManageChecklistComponent;
}());
exports.ManageChecklistComponent = ManageChecklistComponent;
//# sourceMappingURL=manage-checklist.component.js.map