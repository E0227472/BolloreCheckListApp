"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChecklistAnswerModel = /** @class */ (function () {
    function ChecklistAnswerModel(model) {
        {
            this.id = model.id || 0;
            this.name = model.name || '';
            this.employementType = model.employementType || null;
            this.hrms = model.hrms || '';
            this.companyName = model.companyName || '';
            this.remarks = model.remarks || '';
            this.signature = model.signature || '';
        }
    }
    return ChecklistAnswerModel;
}());
exports.ChecklistAnswerModel = ChecklistAnswerModel;
//# sourceMappingURL=checklist-answer.model.js.map