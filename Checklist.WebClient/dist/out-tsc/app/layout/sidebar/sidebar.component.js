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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var app_config_1 = require("../../app.config");
var auth_service_1 = require("../../common/auth/auth.service");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(config, el, router, location, authService) {
        this.authService = authService;
        this.$el = jQuery(el.nativeElement);
        this.config = config.getConfig();
        this.configFn = config;
        this.router = router;
        this.location = location;
    }
    SidebarComponent.prototype.initSidebarScroll = function () {
        var $sidebarContent = this.$el.find('.js-sidebar-content');
        if (this.$el.find('.slimScrollDiv').length !== 0) {
            $sidebarContent.slimscroll({
                destroy: true
            });
        }
        $sidebarContent.slimscroll({
            height: window.innerHeight,
            size: '4px'
        });
    };
    SidebarComponent.prototype.changeActiveNavigationItem = function (location) {
        var $newActiveLink = this.$el.find('a[href="#' + location.path().split('?')[0] + '"]');
        // collapse .collapse only if new and old active links belong to different .collapse
        if (!$newActiveLink.is('.active > .collapse > li > a')) {
            this.$el.find('.active .active').closest('.collapse').collapse('hide');
        }
        this.$el.find('.sidebar-nav .active').removeClass('active');
        $newActiveLink.closest('li').addClass('active')
            .parents('li').addClass('active');
        // uncollapse parent
        $newActiveLink.closest('.collapse').addClass('in').css('height', '')
            .siblings('a[data-toggle=collapse]').removeClass('collapsed');
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        this.changeActiveNavigationItem(this.location);
    };
    SidebarComponent.prototype.toggleSidebarOverflow = function ($event) {
        jQuery('#sidebar').css('z-index', $event ? '2' : '0');
        jQuery('.js-sidebar-content, .slimScrollDiv').css('overflow', $event ? 'visible' : 'hidden');
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        jQuery(window).on('sn:resize', this.initSidebarScroll.bind(this));
        this.initSidebarScroll();
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.changeActiveNavigationItem(_this.location);
            }
        });
        this.currentUser = this.authService.getCurrentUser();
    };
    SidebarComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.template.html'
        }),
        __metadata("design:paramtypes", [app_config_1.AppConfig, typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _c || Object, auth_service_1.AuthService])
    ], SidebarComponent);
    return SidebarComponent;
    var _a, _b, _c;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map