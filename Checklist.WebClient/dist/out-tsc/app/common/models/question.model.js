"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuestionModel = /** @class */ (function () {
    function QuestionModel(model) {
        {
            this.id = model.id || 0;
            this.content = model.content || '';
            this.footerText = model.footerText || '';
            this.headerText = model.headerText || '';
            this.mainHeadingId = model.mainHeadingId || null;
            this.subHeadingId = model.subHeadingId || null;
            this.subOfSubHeadingId = model.subOfSubHeadingId || null;
            this.option1 = model.option1 || '';
            this.option2 = model.option2 || '';
            this.option3 = model.option3 || '';
            this.option4 = model.option4 || '';
            this.option5 = model.option5 || '';
            this.option6 = model.option6 || '';
        }
    }
    return QuestionModel;
}());
exports.QuestionModel = QuestionModel;
//# sourceMappingURL=question.model.js.map