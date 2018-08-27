"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeadingModel = /** @class */ (function () {
    function HeadingModel(model) {
        {
            this.id = model.id || 0;
            this.checkListId = model.checkListId || '';
            this.content = model.content || '';
            this.headingType = model.headingType || '';
            this.headingTypeId = model.headingTypeId || 0;
        }
    }
    return HeadingModel;
}());
exports.HeadingModel = HeadingModel;
//# sourceMappingURL=heading.model.js.map