"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PasswordModel = /** @class */ (function () {
    function PasswordModel(model) {
        {
            this.username = model.username || '';
            this.oldPassword = model.oldPassword || '';
            this.newPassword = model.newPassword || '';
            this.confirmPassword = model.confirmPassword || '';
        }
    }
    return PasswordModel;
}());
exports.PasswordModel = PasswordModel;
//# sourceMappingURL=password.model.js.map