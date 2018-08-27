"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_component_1 = require("./error/error.component");
var auth_guard_1 = require("./common/guards/auth.guard");
var auth_service_1 = require("./common/auth/auth.service");
exports.ROUTES = [{
        path: '', redirectTo: 'app', pathMatch: 'full'
    },
    {
        path: 'app', loadChildren: './layout/layout.module#LayoutModule', canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'login', loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordModule'
    },
    {
        path: 'error', component: error_component_1.ErrorComponent
    },
    {
        path: '**', component: error_component_1.ErrorComponent
    }
];
exports.authProviders = [
    auth_guard_1.AuthGuard,
    auth_service_1.AuthService
];
//# sourceMappingURL=app.routes.js.map