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
var ng_select_1 = require("@ng-select/ng-select");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ngx_bootstrap_2 = require("ngx-bootstrap");
var ngx_bootstrap_3 = require("ngx-bootstrap");
var angular2_datatable_1 = require("angular2-datatable");
var ng2_table_1 = require("ng2-table");
var widget_module_1 = require("../layout/widget/widget.module");
var utils_module_1 = require("../layout/utils/utils.module");
var angular2_signaturepad_1 = require("angular2-signaturepad");
var checklist_service_1 = require("../services/checklist.service");
var view_checklist_component_1 = require("./view-checklist.component");
var checklist_answer_service_1 = require("../services/checklist-answer.service");
var signature_field_component_1 = require("../common/signature-field/signature-field.component");
var ViewChecklistModule = /** @class */ (function () {
    function ViewChecklistModule() {
    }
    ViewChecklistModule = __decorate([
        core_1.NgModule({
            declarations: [
                signature_field_component_1.SignatureFieldComponent,
                view_checklist_component_1.ViewChecklistComponent
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
                ngx_bootstrap_3.ModalModule,
                ng_select_1.NgSelectModule,
                angular2_signaturepad_1.SignaturePadModule
            ],
            exports: [
                forms_1.ReactiveFormsModule,
                view_checklist_component_1.ViewChecklistComponent
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                checklist_service_1.ChecklistService,
                ngx_bootstrap_3.BsModalService,
                checklist_answer_service_1.ChecklistAnswerService
            ]
        })
    ], ViewChecklistModule);
    return ViewChecklistModule;
}());
exports.ViewChecklistModule = ViewChecklistModule;
//# sourceMappingURL=view-checklist.module.js.map