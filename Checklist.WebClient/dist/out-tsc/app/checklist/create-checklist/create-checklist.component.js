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
var ngx_bootstrap_1 = require("ngx-bootstrap");
var modal_1 = require("ngx-bootstrap/modal");
var checklist_service_1 = require("../../services/checklist.service");
var heading_model_1 = require("../../common/models/heading.model");
var question_model_1 = require("../../common/models/question.model");
var user_service_1 = require("../../services/user.service");
var CreateChecklistComponent = /** @class */ (function () {
    function CreateChecklistComponent(formBuilder, checklistService, modalService, userService) {
        this.formBuilder = formBuilder;
        this.checklistService = checklistService;
        this.modalService = modalService;
        this.userService = userService;
        this.backToCheckList = new core_1.EventEmitter();
        this.questionHeading = 'Add Question';
        this.headerHeading = 'Add Headings';
        this.headingTypes = [{ id: 1, text: 'Main Heading' }, { id: 2, text: 'Sub Heading' }, { id: 3, text: 'Sub of Sub Heading' }];
    }
    CreateChecklistComponent.prototype.ngOnInit = function () {
        this.createChecklistForm = this.createForm();
        this.editChecklistForm = this.editForm();
        this.questionModel = new question_model_1.QuestionModel({});
        this.questionForm = this.createQuestionForm();
        this.headingModel = new heading_model_1.HeadingModel({});
        this.headingForm = this.createHeadingForm();
        if (this.detail.id > 0) {
            this.loadHeading(this.detail.id);
            this.loadQuestions(this.detail.id);
        }
        this.loadSubAdmin();
    };
    CreateChecklistComponent.prototype.ngAfterViewInit = function () {
        if (this.detail.id == 0) {
            this.createStartUp.show();
        }
    };
    CreateChecklistComponent.prototype.onToBack = function () {
        this.backToCheckList.emit('');
    };
    CreateChecklistComponent.prototype.openModal = function (template, id) {
        this.itemToDeleteId = id;
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    CreateChecklistComponent.prototype.confirmDecline = function () {
        this.modalRef.hide();
        this.itemToDeleteId = 0;
    };
    CreateChecklistComponent.prototype.closeStartup = function () {
        this.createStartUp.hide();
        this.onToBack();
    };
    /*** Checklist Region ***/
    CreateChecklistComponent.prototype.createForm = function () {
        return this.formBuilder.group({
            hubName: ['', forms_1.Validators.required],
            heading: ['', forms_1.Validators.required],
            userSubAdmin: [null]
        });
    };
    CreateChecklistComponent.prototype.editForm = function () {
        return this.formBuilder.group({
            hubName: [this.detail.hubName],
            isActive: [this.detail.isActive],
            userSubAdmin: [this.detail.subAdminId]
        });
    };
    CreateChecklistComponent.prototype.createChecklist = function () {
        var _this = this;
        var formData = this.createChecklistForm.getRawValue();
        var data = { hubName: formData.hubName, heading: formData.heading, subAdminId: formData.userSubAdmin };
        this.checklistService.createChecklist(data).subscribe(function (res) {
            _this.createStartUp.hide();
            _this.detail = res.json();
            _this.loadHeading(_this.detail.id);
        }, function (err) {
        });
    };
    CreateChecklistComponent.prototype.showEditChecklist = function () {
        this.editChecklistForm = this.editForm();
        this.editStartUp.show();
    };
    CreateChecklistComponent.prototype.updateChecklist = function () {
        var _this = this;
        var formData = this.editChecklistForm.getRawValue();
        var data = { hubName: formData.hubName, id: this.detail.id, isActive: formData.isActive, subAdminId: formData.userSubAdmin };
        this.checklistService.updateChecklist(data).subscribe(function (res) {
            _this.editStartUp.hide();
            _this.detail = res.json();
        }, function (err) {
        });
    };
    CreateChecklistComponent.prototype.loadSubAdmin = function () {
        var _this = this;
        this.userService.getSubAdmin().subscribe(function (res) {
            _this.subAdminList = res;
        });
    };
    /*** End of Checklist Region ***/
    /*** Heading Region ***/
    CreateChecklistComponent.prototype.createHeadingForm = function () {
        return this.formBuilder.group({
            headingType: [this.headingModel.headingTypeId],
            content: [this.headingModel.content]
        });
    };
    CreateChecklistComponent.prototype.loadHeading = function (id) {
        var _this = this;
        this.checklistService.getHeaderByChecklistId(id).subscribe(function (res) {
            _this.headingData = res;
        }, function (err) {
        });
    };
    CreateChecklistComponent.prototype.addHeading = function () {
        this.headingModel = new heading_model_1.HeadingModel({});
        this.headingModel.headingTypeId = 1;
        this.headingForm = this.createHeadingForm();
        this.headerHeading = 'Add Headings';
        this.headingWindow.show();
    };
    CreateChecklistComponent.prototype.createHeading = function () {
        var _this = this;
        var formData = this.headingForm.getRawValue();
        var data = { id: this.headingModel.id, checkListId: this.detail.id, content: formData.content, headingType: formData.headingType };
        this.checklistService.addHeading(data).subscribe(function (res) {
            _this.headingWindow.hide();
            _this.loadHeading(_this.detail.id);
        }, function (err) {
        });
    };
    CreateChecklistComponent.prototype.editHeading = function (item) {
        this.headerHeading = 'Edit Headings';
        this.headingModel = item;
        this.headingModel.headingTypeId = this.getHeadingId(this.headingModel.headingType);
        this.headingForm = this.createHeadingForm();
        this.headingWindow.show();
    };
    /*** End of Heading Region ***/
    /*** Question Region ***/
    CreateChecklistComponent.prototype.createQuestionForm = function () {
        return this.formBuilder.group({
            content: [this.questionModel.content],
            headerText: [this.questionModel.headerText],
            footerText: [this.questionModel.footerText],
            mainHeading: [this.questionModel.mainHeadingId],
            subHeading: [this.questionModel.subHeadingId],
            subOfSubHeading: [this.questionModel.subOfSubHeadingId],
            option1: [this.questionModel.option1],
            option2: [this.questionModel.option2],
            option3: [this.questionModel.option3],
            option4: [this.questionModel.option4],
            option5: [this.questionModel.option5],
            option6: [this.questionModel.option6]
        });
    };
    CreateChecklistComponent.prototype.loadQuestions = function (id) {
        var _this = this;
        this.checklistService.getQuestions(id).subscribe(function (res) {
            _this.questionData = res;
        }, function (err) {
        });
    };
    CreateChecklistComponent.prototype.addQuestion = function () {
        this.questionHeading = 'Add Questions';
        this.questionModel = new question_model_1.QuestionModel({});
        this.questionForm = this.createQuestionForm();
        this.loadHeadingTypes(this.detail.id);
        this.questionWindow.show();
    };
    CreateChecklistComponent.prototype.createQuestion = function () {
        var _this = this;
        var formData = this.questionForm.getRawValue();
        var data = { id: this.questionModel.id, checkListId: this.detail.id, content: formData.content,
            mainHeadingId: formData.mainHeading, subHeadingId: formData.subHeading, subOfSubHeadingId: formData.subOfSubHeading,
            option1: formData.option1, option2: formData.option2, option3: formData.option3, option4: formData.option4, option5: formData.option5,
            option6: formData.option6, headerText: formData.headerText, footerText: formData.footerText
        };
        this.checklistService.saveQuestion(data).subscribe(function (res) {
            _this.questionWindow.hide();
            _this.loadQuestions(_this.detail.id);
        }, function (err) {
        });
    };
    CreateChecklistComponent.prototype.editQuestion = function (item) {
        this.questionHeading = 'Edit Questions';
        this.loadHeadingTypes(this.detail.id);
        this.questionModel = item;
        this.questionForm = this.createQuestionForm();
        this.questionWindow.show();
    };
    CreateChecklistComponent.prototype.loadHeadingTypes = function (id) {
        var _this = this;
        this.checklistService.getHeadingByType(id).subscribe(function (res) {
            _this.mainHeading = res.mainHeading;
            _this.subHeading = res.subHeading;
            _this.subOfSubHeading = res.subOfSubHeading;
        }, function (err) {
        });
    };
    CreateChecklistComponent.prototype.questionDelete = function () {
        var _this = this;
        this.checklistService.deleteQuestions(this.itemToDeleteId).subscribe(function (res) {
            _this.confirmDecline();
            _this.loadQuestions(_this.detail.id);
        }, function (err) {
        });
    };
    /*** End of Question Region ***/
    /*** Helper methods ***/
    CreateChecklistComponent.prototype.getHeadingId = function (val) {
        if (val == 'MainHeading')
            return 1;
        else if (val == 'SubHeading')
            return 2;
        else if (val == 'SubOfSubHeading')
            return 3;
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CreateChecklistComponent.prototype, "backToCheckList", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CreateChecklistComponent.prototype, "detail", void 0);
    __decorate([
        core_1.ViewChild('createStartUp'),
        __metadata("design:type", typeof (_a = typeof ngx_bootstrap_1.ModalDirective !== "undefined" && ngx_bootstrap_1.ModalDirective) === "function" && _a || Object)
    ], CreateChecklistComponent.prototype, "createStartUp", void 0);
    __decorate([
        core_1.ViewChild('editStartUp'),
        __metadata("design:type", typeof (_b = typeof ngx_bootstrap_1.ModalDirective !== "undefined" && ngx_bootstrap_1.ModalDirective) === "function" && _b || Object)
    ], CreateChecklistComponent.prototype, "editStartUp", void 0);
    __decorate([
        core_1.ViewChild('questionWindow'),
        __metadata("design:type", typeof (_c = typeof ngx_bootstrap_1.ModalDirective !== "undefined" && ngx_bootstrap_1.ModalDirective) === "function" && _c || Object)
    ], CreateChecklistComponent.prototype, "questionWindow", void 0);
    __decorate([
        core_1.ViewChild('headingWindow'),
        __metadata("design:type", typeof (_d = typeof ngx_bootstrap_1.ModalDirective !== "undefined" && ngx_bootstrap_1.ModalDirective) === "function" && _d || Object)
    ], CreateChecklistComponent.prototype, "headingWindow", void 0);
    CreateChecklistComponent = __decorate([
        core_1.Component({
            selector: 'create-checklist',
            templateUrl: './create-checklist.component.html',
            styleUrls: ['./create-checklist.component.scss']
        }),
        __metadata("design:paramtypes", [typeof (_e = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _e || Object, checklist_service_1.ChecklistService, typeof (_f = typeof modal_1.BsModalService !== "undefined" && modal_1.BsModalService) === "function" && _f || Object, user_service_1.UserService])
    ], CreateChecklistComponent);
    return CreateChecklistComponent;
    var _a, _b, _c, _d, _e, _f;
}());
exports.CreateChecklistComponent = CreateChecklistComponent;
//# sourceMappingURL=create-checklist.component.js.map