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
var angular_datatables_1 = require("angular-datatables");
var forms_1 = require("@angular/forms");
var ng_select_1 = require("@ng-select/ng-select");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var dashboard_component_1 = require("./dashboard.component");
var widget_module_1 = require("../layout/widget/widget.module");
var result_service_1 = require("../services/result.service");
var view_checklist_module_1 = require("../view-checklist/view-checklist.module");
exports.routes = [
    { path: '', component: dashboard_component_1.DashboardComponent, pathMatch: 'full' }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule.routes = exports.routes;
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule,
                router_1.RouterModule.forChild(exports.routes),
                forms_1.FormsModule,
                widget_module_1.WidgetModule,
                angular2_datatable_1.DataTableModule,
                ng2_table_1.Ng2TableModule,
                view_checklist_module_1.ViewChecklistModule,
                angular_datatables_1.DataTablesModule,
                ng_select_1.NgSelectModule,
                forms_1.ReactiveFormsModule,
                ngx_bootstrap_1.ModalModule
            ],
            declarations: [dashboard_component_1.DashboardComponent],
            providers: [result_service_1.ResultService]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map