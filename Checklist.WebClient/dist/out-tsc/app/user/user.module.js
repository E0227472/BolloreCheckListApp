"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_select_1 = require("@ng-select/ng-select");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ngx_bootstrap_2 = require("ngx-bootstrap");
var ngx_bootstrap_3 = require("ngx-bootstrap");
var angular2_datatable_1 = require("angular2-datatable");
var ng2_table_1 = require("ng2-table");
var widget_module_1 = require("../layout/widget/widget.module");
var utils_module_1 = require("../layout/utils/utils.module");
var manage_user_component_1 = require("./manage-user/manage-user.component");
exports.routes = [
    { path: '', component: manage_user_component_1.ManageUserComponent, pathMatch: 'full' }
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule.routes = exports.routes;
    UserModule = __decorate([
        core_1.NgModule({
            declarations: [
                manage_user_component_1.ManageUserComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ngx_bootstrap_1.AlertModule.forRoot(),
                ngx_bootstrap_1.TooltipModule.forRoot(),
                ngx_bootstrap_2.ButtonsModule.forRoot(),
                ngx_bootstrap_2.BsDropdownModule.forRoot(),
                ngx_bootstrap_2.PaginationModule.forRoot(),
                widget_module_1.WidgetModule,
                utils_module_1.UtilsModule,
                ng2_table_1.Ng2TableModule,
                angular2_datatable_1.DataTableModule,
                router_1.RouterModule.forChild(exports.routes),
                ngx_bootstrap_3.ModalModule,
                ng_select_1.NgSelectModule
            ],
            exports: [forms_1.ReactiveFormsModule],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map