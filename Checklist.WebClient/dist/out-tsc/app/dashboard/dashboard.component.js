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
var forms_1 = require("@angular/forms");
var user_service_1 = require("../services/user.service");
var auth_service_1 = require("../common/auth/auth.service");
var router_1 = require("@angular/router");
var result_service_1 = require("../services/result.service");
var rxjs_1 = require("rxjs");
var angular_datatables_1 = require("angular-datatables");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, userService, router, resultService, formBuilder) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.resultService = resultService;
        this.formBuilder = formBuilder;
        this.showUserChecklist = true;
        this.showViewChecklist = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs_1.Subject();
        this.employementTypeData = [{ id: 1, text: 'Permanent Staff' }, { id: 2, text: 'Contractor' }];
        this.yearData = [{ id: '2018', text: '2018' }, { id: '2019', text: '2019' }, { id: '2019', text: '2020' }, { id: '2021', text: '2021' }, { id: '2022', text: '2022' }, { id: '2023', text: '2023' },
            { id: '2024', text: '2024' }, { id: '2025', text: '2025' }, { id: '2026', text: '2026' }, { id: '2027', text: '2027' }, { id: '2028', text: '2028' }, { id: '2029', text: '2029' }, { id: '2030', text: '2030' }];
        this.deleteMessage = 'Are you sure to delete?';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getCurrentUser();
        if (this.currentUser.role == 'User') {
            this.router.navigate(['/app/checklist']);
        }
        else {
            this.filterForm = this.createForm();
            this.loadResultTable();
            this.loadResult();
            this.loadHubItems();
        }
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        // $.fn['dataTable'].ext.search.pop();
    };
    DashboardComponent.prototype.loadResult = function () {
        var _this = this;
        this.resultService.getResult(null, null, null).subscribe(function (res) {
            _this.data = res;
            _this.loadResultTable();
            _this.dtTrigger.next();
        });
    };
    DashboardComponent.prototype.changeChecklistComponent = function (componentName) {
        if (componentName == 'userCheckList') {
            this.showUserChecklist = true;
            this.showViewChecklist = false;
        }
    };
    DashboardComponent.prototype.openViewChecklist = function (item) {
        this.checklistDetail = { id: item.checkListId, resultId: item.id };
        this.showUserChecklist = false;
        this.showViewChecklist = true;
    };
    DashboardComponent.prototype.loadResultTable = function () {
        this.dtOptions = {
            data: this.data,
            searching: false,
            ordering: false,
            bInfo: false,
            dom: 'Bfrtip',
            buttons: [
                {
                    extend: 'excel', text: 'Export Excel',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4]
                    }
                },
                {
                    extend: 'pdf', text: 'Export PDF',
                    exportOptions: {
                        columns: [0, 1, 2, 3, 4]
                    }
                }
            ]
        };
    };
    DashboardComponent.prototype.filter = function () {
        var _this = this;
        var formData = this.filterForm.getRawValue();
        this.resultService.getResult(formData.hubName, formData.year, formData.employementType).subscribe(function (res) {
            _this.data = res;
            _this.datatableElement.dtInstance.then(function (dtInstance) {
                dtInstance.data.bind(_this.data);
            });
        });
    };
    DashboardComponent.prototype.createForm = function () {
        return this.formBuilder.group({
            hubName: [null],
            employementType: [null],
            year: [null]
        });
    };
    DashboardComponent.prototype.loadHubItems = function () {
        var _this = this;
        this.resultService.getHubItems().subscribe(function (res) {
            _this.hubData = res;
        });
    };
    DashboardComponent.prototype.confirmDelete = function (item) {
        this.itemToDelete = item;
        this.confirmWindow.show();
    };
    DashboardComponent.prototype.deleteResult = function () {
        var _this = this;
        this.resultService.deleteResult(this.itemToDelete.id).subscribe(function (res) {
            _this.filter();
            _this.confirmWindow.hide();
        });
    };
    __decorate([
        core_1.ViewChild(angular_datatables_1.DataTableDirective),
        __metadata("design:type", typeof (_a = typeof angular_datatables_1.DataTableDirective !== "undefined" && angular_datatables_1.DataTableDirective) === "function" && _a || Object)
    ], DashboardComponent.prototype, "datatableElement", void 0);
    __decorate([
        core_1.ViewChild('confirmWindow'),
        __metadata("design:type", typeof (_b = typeof ngx_bootstrap_1.ModalDirective !== "undefined" && ngx_bootstrap_1.ModalDirective) === "function" && _b || Object)
    ], DashboardComponent.prototype, "confirmWindow", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.template.html',
            styleUrls: ['./dashboard.component.scss']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, user_service_1.UserService, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, result_service_1.ResultService, typeof (_d = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _d || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map