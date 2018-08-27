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
var app_config_1 = require("../app.config");
var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(config, el, router, renderer, ngZone) {
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.chatOpened = false;
        this.appClass = true;
        this.el = el;
        this.config = config.getConfig();
        this.configFn = config;
        this.router = router;
    }
    LayoutComponent.prototype.toggleSidebarListener = function (state) {
        var toggleNavigation = state === 'static'
            ? this.toggleNavigationState
            : this.toggleNavigationCollapseState;
        toggleNavigation.apply(this);
        localStorage.setItem('nav-static', JSON.stringify(this.navStatic));
    };
    LayoutComponent.prototype.toggleChatListener = function () {
        jQuery(this.el.nativeElement).find('.chat-notification-sing').remove();
        this.chatOpened = !this.chatOpened;
        setTimeout(function () {
            // demo: add class & badge to indicate incoming messages from contact
            // .js-notification-added ensures notification added only once
            jQuery('.chat-sidebar-user-group:first-of-type ' +
                '.list-group-item:first-child:not(.js-notification-added)')
                .addClass('active js-notification-added')
                .find('.fa-circle')
                .before('<span class="badge badge-danger badge-pill ' +
                'float-right animated bounceInDown">3</span>');
        }, 1000);
    };
    LayoutComponent.prototype.toggleNavigationState = function () {
        this.navStatic = !this.navStatic;
        if (!this.navStatic) {
            this.collapseNavigation();
        }
    };
    LayoutComponent.prototype.expandNavigation = function () {
        // this method only makes sense for non-static navigation state
        if (this.isNavigationStatic()
            && (this.configFn.isScreen('lg') || this.configFn.isScreen('xl'))) {
            return;
        }
        jQuery('app-layout').removeClass('nav-collapsed');
        this.$sidebar.find('.active .active').closest('.collapse').collapse('show')
            .siblings('[data-toggle=collapse]').removeClass('collapsed');
    };
    LayoutComponent.prototype.collapseNavigation = function () {
        // this method only makes sense for non-static navigation state
        if (this.isNavigationStatic()
            && (this.configFn.isScreen('lg') || this.configFn.isScreen('xl'))) {
            return;
        }
        jQuery('app-layout').addClass('nav-collapsed');
        this.$sidebar.find('.collapse.in').collapse('hide')
            .siblings('[data-toggle=collapse]').addClass('collapsed');
    };
    /**
     * Check and set navigation collapse according to screen size and navigation state
     */
    LayoutComponent.prototype.checkNavigationState = function () {
        var _this = this;
        if (this.isNavigationStatic()) {
            if (this.configFn.isScreen('sm')
                || this.configFn.isScreen('xs') || this.configFn.isScreen('md')) {
                this.collapseNavigation();
            }
        }
        else {
            if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
                setTimeout(function () {
                    _this.collapseNavigation();
                }, this.config.settings.navCollapseTimeout);
            }
            else {
                this.collapseNavigation();
            }
        }
    };
    LayoutComponent.prototype.isNavigationStatic = function () {
        return this.navStatic === true;
    };
    LayoutComponent.prototype.toggleNavigationCollapseState = function () {
        if (jQuery('app-layout').is('.nav-collapsed')) {
            this.expandNavigation();
        }
        else {
            this.collapseNavigation();
        }
    };
    LayoutComponent.prototype._sidebarMouseEnter = function () {
        if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
            this.expandNavigation();
        }
    };
    LayoutComponent.prototype._sidebarMouseLeave = function () {
        if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
            this.collapseNavigation();
        }
    };
    LayoutComponent.prototype.enableSwipeCollapsing = function () {
        var swipe = new Hammer(document.getElementById('content-wrap'));
        var d = this;
        swipe.on('swipeleft', function () {
            setTimeout(function () {
                if (d.configFn.isScreen('md')) {
                    return;
                }
                if (!jQuery('app-layout').is('.nav-collapsed')) {
                    d.collapseNavigation();
                }
            });
        });
        swipe.on('swiperight', function () {
            if (d.configFn.isScreen('md')) {
                return;
            }
            if (jQuery('app-layout').is('.chat-sidebar-opened')) {
                return;
            }
            if (jQuery('app-layout').is('.nav-collapsed')) {
                d.expandNavigation();
            }
        });
    };
    LayoutComponent.prototype.collapseNavIfSmallScreen = function () {
        if (this.configFn.isScreen('xs')
            || this.configFn.isScreen('sm') || this.configFn.isScreen('md')) {
            this.collapseNavigation();
        }
    };
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('nav-static') === 'true') {
            this.navStatic = true;
        }
        var $el = jQuery(this.el.nativeElement);
        this.$sidebar = $el.find('app-sidebar');
        $el.find('a[href="#"]').on('click', function (e) {
            e.preventDefault();
        });
        this.$sidebar.on('mouseenter', this._sidebarMouseEnter.bind(this));
        this.$sidebar.on('mouseleave', this._sidebarMouseLeave.bind(this));
        this.checkNavigationState();
        this.$sidebar.on('click', function () {
            if (jQuery('app-layout').is('.nav-collapsed')) {
                _this.expandNavigation();
            }
        });
        this.router.events.subscribe(function (event) {
            _this._navigationInterceptor(event);
            _this.collapseNavIfSmallScreen();
            window.scrollTo(0, 0);
        });
        if ('ontouchstart' in window) {
            this.enableSwipeCollapsing();
        }
        this.$sidebar.find('.collapse').on('show.bs.collapse', function (e) {
            // execute only if we're actually the .collapse element initiated event
            // return for bubbled events
            if (e.target !== e.currentTarget) {
                return;
            }
            var $triggerLink = jQuery(this).prev('[data-toggle=collapse]');
            jQuery($triggerLink.data('parent'))
                .find('.collapse.show').not(jQuery(this)).collapse('hide');
        })
            .on('show.bs.collapse', function (e) {
            // execute only if we're actually the .collapse element initiated event
            // return for bubbled events
            if (e.target !== e.currentTarget) {
                return;
            }
            jQuery(this).closest('li').addClass('open');
        }).on('hide.bs.collapse', function (e) {
            // execute only if we're actually the .collapse element initiated event
            // return for bubbled events
            if (e.target !== e.currentTarget) {
                return;
            }
            jQuery(this).closest('li').removeClass('open');
        });
    };
    LayoutComponent.prototype._navigationInterceptor = function (event) {
        var _this = this;
        if (event instanceof router_1.NavigationStart) {
            // We wanna run this function outside of Angular's zone to
            // bypass change detection
            this.ngZone.runOutsideAngular(function () {
                // For simplicity we are going to turn opacity on / off
                // you could add/remove a class for more advanced styling
                // and enter/leave animation of the spinner
                _this.renderer.setStyle(_this.spinnerElement.nativeElement, 'opacity', '1');
                _this.renderer.setStyle(_this.routerComponent.nativeElement, 'opacity', '0');
            });
        }
        if (event instanceof router_1.NavigationEnd) {
            this._hideSpinner();
        }
        // Set loading state to false in both of the below events to
        // hide the spinner in case a request fails
        if (event instanceof router_1.NavigationCancel) {
            this._hideSpinner();
        }
        if (event instanceof router_1.NavigationError) {
            this._hideSpinner();
        }
    };
    LayoutComponent.prototype._hideSpinner = function () {
        var _this = this;
        // We wanna run this function outside of Angular's zone to
        // bypass change detection,
        this.ngZone.runOutsideAngular(function () {
            // For simplicity we are going to turn opacity on / off
            // you could add/remove a class for more advanced styling
            // and enter/leave animation of the spinner
            _this.renderer.setStyle(_this.spinnerElement.nativeElement, 'opacity', '0');
            _this.renderer.setStyle(_this.routerComponent.nativeElement, 'opacity', '1');
        });
    };
    __decorate([
        core_1.HostBinding('class.nav-static'),
        __metadata("design:type", Boolean)
    ], LayoutComponent.prototype, "navStatic", void 0);
    __decorate([
        core_1.HostBinding('class.chat-sidebar-opened'),
        __metadata("design:type", Boolean)
    ], LayoutComponent.prototype, "chatOpened", void 0);
    __decorate([
        core_1.HostBinding('class.app'),
        __metadata("design:type", Boolean)
    ], LayoutComponent.prototype, "appClass", void 0);
    __decorate([
        core_1.ViewChild('spinnerElement'),
        __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
    ], LayoutComponent.prototype, "spinnerElement", void 0);
    __decorate([
        core_1.ViewChild('routerComponent'),
        __metadata("design:type", typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object)
    ], LayoutComponent.prototype, "routerComponent", void 0);
    LayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-layout',
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: './layout.template.html',
        }),
        __metadata("design:paramtypes", [app_config_1.AppConfig, typeof (_c = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof core_1.Renderer2 !== "undefined" && core_1.Renderer2) === "function" && _e || Object, typeof (_f = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _f || Object])
    ], LayoutComponent);
    return LayoutComponent;
    var _a, _b, _c, _d, _e, _f;
}());
exports.LayoutComponent = LayoutComponent;
//# sourceMappingURL=layout.component.js.map