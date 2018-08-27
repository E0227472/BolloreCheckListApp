"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var layout_component_1 = require("./layout.component");
var routes = [
    { path: '', component: layout_component_1.LayoutComponent, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            { path: 'another-page', loadChildren: '../another/another.module#AnotherModule' },
            { path: 'manage-checklist', loadChildren: '../checklist/checklist.module#ChecklistModule' },
            { path: 'manage-user', loadChildren: '../user/user.module#UserModule' },
            { path: 'checklist', loadChildren: '../user-checklist/user-checklist.module#UserChecklistModule' }
        ] }
];
exports.ROUTES = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=layout.routes.js.map