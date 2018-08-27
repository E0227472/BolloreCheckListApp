"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel = /** @class */ (function () {
    function UserModel(model) {
        {
            this.username = model.username || '';
            this.password = model.password || '';
            this.firstName = model.firstName || '';
            this.lastName = model.lastName || '';
            this.role = model.role || '';
        }
    }
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map