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
var checklist_answer_model_1 = require("../common/models/checklist-answer.model");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../common/auth/auth.service");
var checklist_answer_service_1 = require("../services/checklist-answer.service");
var signature_field_component_1 = require("../common/signature-field/signature-field.component");
var ViewChecklistComponent = /** @class */ (function () {
    function ViewChecklistComponent(formBuilder, checklistAnswerService, authService) {
        this.formBuilder = formBuilder;
        this.checklistAnswerService = checklistAnswerService;
        this.authService = authService;
        this.backToCheckList = new core_1.EventEmitter();
        //checklistId: number;
        this.employementTypeData = [{ id: 1, text: 'Permanent Staff' }, { id: 2, text: 'Contractor' }];
        this.showCompany = false;
        this.showHRMS = false;
        this.showContractText = false;
        this.isAdmin = false;
    }
    ViewChecklistComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getCurrentUser();
        this.dateNow = new Date();
        this.model = new checklist_answer_model_1.ChecklistAnswerModel({});
        this.checklistForm = this.createForm();
        if (this.currentUser.role == 'User') {
            this.loadQuestions(this.detail.id);
        }
        else if (this.currentUser.role == 'Admin' || this.currentUser.role == 'SubAdmin') {
            this.isAdmin = true;
            this.loadResultAnswer(this.detail.id, this.detail.resultId);
        }
    };
    ViewChecklistComponent.prototype.onToBack = function () {
        this.backToCheckList.emit('');
    };
    ViewChecklistComponent.prototype.loadQuestions = function (checklistId) {
        var _this = this;
        this.checklistAnswerService.getChecklistQuestion(checklistId).subscribe(function (res) {
            _this.data = res;
            if (_this.currentUser.role == 'User') {
                _this.addQuestionToControl();
            }
            else if (_this.currentUser.role == 'Admin' || _this.currentUser.role == 'SubAdmin') {
                _this.setResultData();
            }
        });
    };
    ViewChecklistComponent.prototype.loadResultAnswer = function (checklistId, resultId) {
        var _this = this;
        this.checklistAnswerService.getResultAnswer(checklistId, resultId).subscribe(function (res) {
            _this.resultData = res;
            _this.loadQuestions(_this.detail.id);
        });
    };
    ViewChecklistComponent.prototype.setResultData = function () {
        var data = this.resultData;
        this.model = data.result;
        this.checklistForm = this.createForm();
        this.sigs.first.writeValue(data.result.signatureBase64);
        this.dateNow = new Date(data.result.submitOn);
        if (data.result.employementType == 2) {
            this.showCompany = true;
            this.showHRMS = false;
            this.showContractText = false;
        }
        else if (data.result.employementType == 1) {
            this.showHRMS = true;
            this.showCompany = false;
            this.showContractText = true;
        }
        for (var _i = 0, _a = data.answers; _i < _a.length; _i++) {
            var item = _a[_i];
            this.checklistForm.addControl(item.question.id, new forms_1.FormControl(item.userAnswer, forms_1.Validators.required));
        }
    };
    //setResultData() {
    //  let data = this.resultData;
    //  this.model = data.result;
    //  this.checklistForm = this.createForm();
    //  this.sigs.first.writeValue(data.result.signatureBase64);
    //  this.dateNow = new Date(data.result.submitOn);
    //  //this.model.HRMS = data.result.hrms;
    //  if (data.result.employementType == 1) {
    //    this.showCompany = false;
    //    //this.showHRMS = false;
    //    this.showContractText = false;
    //  }
    //  else if (data.result.employementType == 2) {
    //    //this.showHRMS = true;
    //    this.showCompany = true;
    //    this.showContractText = true;
    //  }    
    //  for (let item of data.answers) {
    //    this.checklistForm.addControl(item.question.id, new FormControl(item.userAnswer, Validators.required));
    //  }
    //}
    ViewChecklistComponent.prototype.createForm = function () {
        return this.formBuilder.group({
            name: [this.model.name],
            employementType: [this.model.employementType],
            companyName: [this.model.companyName],
            HRMS: [this.model.hrms],
            remarks: [this.model.remarks],
            signature: [this.model.signature, forms_1.Validators.required]
        });
    };
    ViewChecklistComponent.prototype.addQuestionToControl = function () {
        var control = this.checklistForm.controls;
        for (var _i = 0, _a = this.data.questions; _i < _a.length; _i++) {
            var question = _a[_i];
            this.checklistForm.addControl(question.id, new forms_1.FormControl('', forms_1.Validators.required));
        }
    };
    ViewChecklistComponent.prototype.postChecklist = function () {
        var _this = this;
        var formData = this.checklistForm.getRawValue();
        var answerData = [];
        for (var item in formData) {
            if (!isNaN(parseInt(item))) {
                var answer = {};
                answer["id"] = item;
                answer["answer"] = formData[item];
                answerData.push(answer);
            }
        }
        var dataToPost = {
            checkListId: this.detail.id, name: formData.name, employementType: formData.employementType, userSignature: this.sigs.first.signature,
            companyName: formData.companyName, HRMS: formData.HRMS, answerItems: answerData, remarks: formData.remarks
        };
        this.checklistAnswerService.saveChecklistAnswer(dataToPost).subscribe(function (res) {
            if (res.ok)
                _this.onToBack();
        }, function (err) {
        });
    };
    ViewChecklistComponent.prototype.onEmployementChange = function ($event) {
        if ($event != undefined) {
            if ($event.id == 2) {
                this.showCompany = true;
                this.showHRMS = false;
                this.showContractText = false;
                this.checklistForm.get('HRMS').setValue('');
                this.checklistForm.get('HRMS').clearValidators();
                this.checklistForm.get('HRMS').updateValueAndValidity();
            }
            else if ($event.id == 1) {
                this.showHRMS = true;
                this.showCompany = false;
                this.showContractText = true;
                this.checklistForm.get('companyName').setValue('');
                this.checklistForm.get('companyName').clearValidators();
                this.checklistForm.get('companyName').updateValueAndValidity();
            }
        }
        else {
            this.showHRMS = false;
            this.showCompany = false;
            this.showContractText = false;
        }
    };
    ViewChecklistComponent.prototype.ngAfterViewInit = function () {
        this.secondSig = this.sigs.find(function (sig, index) { return index === 1; });
        this.beResponsive();
        this.setOptions();
    };
    // set the dimensions of the signature pad canvas
    ViewChecklistComponent.prototype.beResponsive = function () {
        this.size(this.sigContainer.first, this.sigs.first);
    };
    ViewChecklistComponent.prototype.size = function (container, sig) {
        sig.signaturePad.set('canvasWidth', container.nativeElement.clientWidth);
        sig.signaturePad.set('canvasHeight', container.nativeElement.clientHeight);
    };
    ViewChecklistComponent.prototype.setOptions = function () {
        this.sigs.first.signaturePad.set('penColor', 'rgb(255, 0, 0)');
        //this.sigs.first.signaturePad.set('backgroundColor', 'rgb(255,255,255)');
        //this.secondSig.signaturePad.set('penColor', 'rgb(255, 255, 0)');
        //this.secondSig.signaturePad.set('backgroundColor', 'rgb(0, 0, 255)');
        //this.secondSig.signaturePad.clear(); // clearing is needed to set the background colour
    };
    ViewChecklistComponent.prototype.clear = function () {
        this.sigs.first.clear();
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ViewChecklistComponent.prototype, "backToCheckList", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ViewChecklistComponent.prototype, "detail", void 0);
    __decorate([
        core_1.ViewChildren(signature_field_component_1.SignatureFieldComponent),
        __metadata("design:type", typeof (_a = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _a || Object)
    ], ViewChecklistComponent.prototype, "sigs", void 0);
    __decorate([
        core_1.ViewChildren('sigContainer'),
        __metadata("design:type", typeof (_b = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _b || Object)
    ], ViewChecklistComponent.prototype, "sigContainer", void 0);
    ViewChecklistComponent = __decorate([
        core_1.Component({
            selector: 'view-checklist',
            templateUrl: './view-checklist.component.html',
            styleUrls: ['./view-checklist.component.scss']
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, checklist_answer_service_1.ChecklistAnswerService, auth_service_1.AuthService])
    ], ViewChecklistComponent);
    return ViewChecklistComponent;
    var _a, _b, _c;
}());
exports.ViewChecklistComponent = ViewChecklistComponent;
//# sourceMappingURL=view-checklist.component.js.map