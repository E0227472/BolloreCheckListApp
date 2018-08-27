"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var angular2_datatable_1 = require("angular2-datatable");
var ng2_table_1 = require("ng2-table");
var widget_module_1 = require("../layout/widget/widget.module");
var user_checklist_component_1 = require("./user-checklist.component");
var checklist_service_1 = require("../services/checklist.service");
var view_checklist_module_1 = require("../view-checklist/view-checklist.module");
exports.routes = [
    { path: '', component: user_checklist_component_1.UserChecklistComponent, pathMatch: 'full' }
];
var UserChecklistModule = /** @class */ (function () {
    function UserChecklistModule() {
    }
    UserChecklistModule.routes = exports.routes;
    UserChecklistModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(exports.routes),
                widget_module_1.WidgetModule,
                ng2_table_1.Ng2TableModule,
                angular2_datatable_1.DataTableModule,
                view_checklist_module_1.ViewChecklistModule
            ],
            declarations: [user_checklist_component_1.UserChecklistComponent],
            providers: [checklist_service_1.ChecklistService]
        })
    ], UserChecklistModule);
    return UserChecklistModule;
}());
exports.UserChecklistModule = UserChecklistModule;
//# sourceMappingURL=user-checklist.module.js.map