webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../another/another.module": [
		"./src/app/another/another.module.ts",
		"another.module"
	],
	"../dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"common",
		"dashboard.module"
	],
	"../user/user.module": [
		"./src/app/user/user.module.ts",
		"user.module",
		"common"
	],
	"./change-password/change-password.module": [
		"./src/app/change-password/change-password.module.ts",
		"common",
		"change-password.module"
	],
	"./layout/layout.module": [
		"./src/app/layout/layout.module.ts",
		"common",
		"layout.module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.config = {
            name: 'Checklist',
            title: 'Checklist',
            version: '1.0.0',
            /**
             * Whether to print and alert some log information
             */
            debug: true,
            /**
             * In-app constants
             */
            settings: {
                colors: {
                    'white': '#fff',
                    'black': '#000',
                    'gray-light': '#999',
                    'gray-lighter': '#eee',
                    'gray': '#666',
                    'gray-dark': '#343434',
                    'gray-darker': '#222',
                    'gray-semi-light': '#777',
                    'gray-semi-lighter': '#ddd',
                    'brand-primary': '#5d8fc2',
                    'brand-success': '#64bd63',
                    'brand-warning': '#f0b518',
                    'brand-danger': '#dd5826',
                    'brand-info': '#5dc4bf'
                },
                screens: {
                    'xs-max': 543,
                    'sm-min': 544,
                    'sm-max': 767,
                    'md-min': 768,
                    'md-max': 991,
                    'lg-min': 992,
                    'lg-max': 1199,
                    'xl-min': 1200
                },
                navCollapseTimeout: 2500
            },
        };
        this._resizeCallbacks = [];
        this._screenSizeCallbacks = {
            xs: { enter: [], exit: [] },
            sm: { enter: [], exit: [] },
            md: { enter: [], exit: [] },
            lg: { enter: [], exit: [] },
            xl: { enter: [], exit: [] }
        };
        this._initResizeEvent();
        this._initOnScreenSizeCallbacks();
    }
    AppConfig.prototype.isScreen = function (size) {
        var screenPx = window.innerWidth;
        return (screenPx >= this.config.settings.screens[size + '-min'] || size === 'xs')
            && (screenPx <= this.config.settings.screens[size + '-max'] || size === 'xl');
    };
    AppConfig.prototype.getScreenSize = function () {
        var screenPx = window.innerWidth;
        if (screenPx <= this.config.settings.screens['xs-max']) {
            return 'xs';
        }
        if ((screenPx >= this.config.settings.screens['sm-min'])
            && (screenPx <= this.config.settings.screens['sm-max'])) {
            return 'sm';
        }
        if ((screenPx >= this.config.settings.screens['md-min'])
            && (screenPx <= this.config.settings.screens['md-max'])) {
            return 'md';
        }
        if ((screenPx >= this.config.settings.screens['lg-min'])
            && (screenPx <= this.config.settings.screens['lg-max'])) {
            return 'lg';
        }
        if (screenPx >= this.config.settings.screens['xl-min']) {
            return 'xl';
        }
    };
    AppConfig.prototype.onScreenSize = function (size, fn, /* Boolean= */ onEnter) {
        onEnter = typeof onEnter !== 'undefined' ? onEnter : true;
        if (typeof size === 'object') {
            for (var i = 0; i < size.length; i++) {
                this._screenSizeCallbacks[size[i]][onEnter ? 'enter' : 'exit'].push(fn);
            }
        }
        else {
            this._screenSizeCallbacks[size][onEnter ? 'enter' : 'exit'].push(fn);
        }
    };
    AppConfig.prototype.changeColor = function (color, ratio, darker) {
        var pad = function (num, totalChars) {
            var padVal = '0';
            num = num + '';
            while (num.length < totalChars) {
                num = padVal + num;
            }
            return num;
        };
        // Trim trailing/leading whitespace
        color = color.replace(/^\s*|\s*$/, '');
        // Expand three-digit hex
        color = color.replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i, '#$1$1$2$2$3$3');
        // Calculate ratio
        var difference = Math.round(ratio * 256) * (darker ? -1 : 1), 
        // Determine if input is RGB(A)
        rgb = color.match(new RegExp('^rgba?\\(\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '\\s*,\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '\\s*,\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '(?:\\s*,\\s*' +
            '(0|1|0?\\.\\d+))?' +
            '\\s*\\)$', 'i')), alpha = !!rgb && rgb[4] !== null ? rgb[4] : null, 
        // Convert hex to decimal
        decimal = !!rgb ? [rgb[1], rgb[2], rgb[3]] : color.replace(/^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i, function () {
            return parseInt(arguments[1], 16) + ',' +
                parseInt(arguments[2], 16) + ',' +
                parseInt(arguments[3], 16);
        }).split(/,/);
        // Return RGB(A)
        return !!rgb ?
            'rgb' + (alpha !== null ? 'a' : '') + '(' +
                Math[darker ? 'max' : 'min'](parseInt(decimal[0], 10) + difference, darker ? 0 : 255) + ', ' +
                Math[darker ? 'max' : 'min'](parseInt(decimal[1], 10) + difference, darker ? 0 : 255) + ', ' +
                Math[darker ? 'max' : 'min'](parseInt(decimal[2], 10) + difference, darker ? 0 : 255) +
                (alpha !== null ? ', ' + alpha : '') +
                ')' :
            // Return hex
            [
                '#',
                pad(Math[darker ? 'max' : 'min'](parseInt(decimal[0], 10) + difference, darker ? 0 : 255).toString(16), 2),
                pad(Math[darker ? 'max' : 'min'](parseInt(decimal[1], 10) + difference, darker ? 0 : 255).toString(16), 2),
                pad(Math[darker ? 'max' : 'min'](parseInt(decimal[2], 10) + difference, darker ? 0 : 255).toString(16), 2)
            ].join('');
    };
    AppConfig.prototype.lightenColor = function (color, ratio) {
        return this.changeColor(color, ratio, false);
    };
    AppConfig.prototype.darkenColor = function (color, ratio) {
        return this.changeColor(color, ratio, true);
    };
    AppConfig.prototype.max = function (array) {
        return Math.max.apply(null, array);
    };
    AppConfig.prototype.min = function (array) {
        return Math.min.apply(null, array);
    };
    AppConfig.prototype._initResizeEvent = function () {
        var resizeTimeout;
        jQuery(window).on('resize', function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function () {
                jQuery(window).trigger('sn:resize');
            }, 100);
        });
    };
    AppConfig.prototype._initOnScreenSizeCallbacks = function () {
        var _this = this;
        var resizeTimeout, prevSize = this.getScreenSize();
        jQuery(window).resize(function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function () {
                var size = _this.getScreenSize();
                if (size !== prevSize) {
                    // run exit callbacks first
                    _this._screenSizeCallbacks[prevSize].exit.forEach(function (fn) {
                        fn(size, prevSize);
                    });
                    // run enter callbacks then
                    _this._screenSizeCallbacks[size].enter.forEach(function (fn) {
                        fn(size, prevSize);
                    });
                    console.log('screen changed. new: ' + size + ', old: ' + prevSize);
                }
                prevSize = size;
            }, 100);
        });
    };
    AppConfig.prototype.getConfig = function () {
        return this.config;
    };
    AppConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppConfig);
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_config__ = __webpack_require__("./src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__error_error_component__ = __webpack_require__("./src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var APP_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_10__app_config__["a" /* AppConfig */]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__error_error_component__["a" /* ErrorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__["b" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["g" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* ROUTES */], {
                    useHash: true,
                    preloadingStrategy: __WEBPACK_IMPORTED_MODULE_5__angular_router__["e" /* PreloadAllModules */]
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_user_service__["a" /* UserService */],
                APP_PROVIDERS
            ].concat(__WEBPACK_IMPORTED_MODULE_8__app_routes__["b" /* authProviders */], [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__["a" /* NG_SELECT_DEFAULT_CONFIG */],
                    useValue: {
                        notFoundText: 'Items not found'
                    }
                }
            ])
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return authProviders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_error_component__ = __webpack_require__("./src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_guards_auth_guard__ = __webpack_require__("./src/app/common/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_auth_auth_service__ = __webpack_require__("./src/app/common/auth/auth.service.ts");



var ROUTES = [{
        path: '', redirectTo: 'app', pathMatch: 'full'
    },
    {
        path: 'app', loadChildren: './layout/layout.module#LayoutModule', canActivate: [__WEBPACK_IMPORTED_MODULE_1__common_guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'login', loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordModule'
    },
    {
        path: 'error', component: __WEBPACK_IMPORTED_MODULE_0__error_error_component__["a" /* ErrorComponent */]
    },
    {
        path: '**', component: __WEBPACK_IMPORTED_MODULE_0__error_error_component__["a" /* ErrorComponent */]
    }
];
var authProviders = [
    __WEBPACK_IMPORTED_MODULE_1__common_guards_auth_guard__["a" /* AuthGuard */],
    __WEBPACK_IMPORTED_MODULE_2__common_auth_auth_service__["a" /* AuthService */]
];


/***/ }),

/***/ "./src/app/common/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var apiUrl = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].apiUrl;
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.login = function (username, password) {
        var data = { username: username, password: password };
        var body = JSON.stringify(data);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return this.http.post(apiUrl + 'users/authenticate', body, options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return response;
        })
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthService.prototype.getCurrentUser = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser;
    };
    /**
    * @param options if options are not supplied the default content type is application/json
    */
    AuthService.prototype.AuthGet = function (url) {
        return this.http.get(url, this.setAuthHeaders())
            .map(function (response) { return response; })
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    AuthService.prototype.AuthPut = function (url, data) {
        var body = JSON.stringify(data);
        return this.http.put(url, body, this.setAuthHeaders())
            .map(function (response) { return response; })
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    AuthService.prototype.AuthDelete = function (url) {
        return this.http.delete(url, this.setAuthHeaders())
            .map(function (response) { return response; })
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    AuthService.prototype.AuthPost = function (url, data) {
        var body = JSON.stringify(data);
        return this.http.post(url, body, this.setAuthHeaders())
            .map(function (response) { return response; })
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    AuthService.prototype.setAuthHeaders = function () {
        // create authorization header with jwt token    
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var expires = currentUser.expires;
        if (currentUser && currentUser.token && expires > new Date()) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            headers.append('Content-Type', 'application/json');
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/common/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(router) {
        this.classes = 'error-page app';
        this.router = router;
    }
    ErrorComponent.prototype.searchResult = function () {
        this.router.navigate(['/app', 'dashboard']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], ErrorComponent.prototype, "classes", void 0);
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error',
            styles: [__webpack_require__("./src/app/error/error.style.scss")],
            template: __webpack_require__("./src/app/error/error.template.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/error/error.style.scss":
/***/ (function(module, exports) {

module.exports = "/*\n * Typography\n * ======================================================================== */\n/***********************************/\n/**          ERROR PAGE           **/\n/***********************************/\n.error-page {\n  background-color: #ddd; }\n.error-container {\n  padding-top: 5%;\n  text-align: center; }\n.error-container > .btn {\n    padding-left: 35px;\n    padding-right: 35px; }\n.error-code {\n  margin: 20px;\n  font-size: 80px;\n  font-weight: 400;\n  color: #343434; }\n@media (min-width: 768px) {\n    .error-code {\n      font-size: 180px; } }\n.error-info {\n  font-size: 20px;\n  color: #343434; }\n.error-help {\n  font-size: 14px; }\n.error-page .page-footer {\n  position: fixed;\n  bottom: 30px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  font-size: 0.9rem;\n  color: #868e96;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/error/error.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <main id=\"content\" class=\"error-container\" role=\"main\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-xl-4 col-md-6 col-10\">\n        <div class=\"error-container\">\n          <h1 class=\"error-code\">404</h1>\n          <p class=\"error-info\">\n            Opps, it seems that this page does not exist.\n          </p>\n          <!--<p class=\"error-help mb\">\n            If you are sure it should, search for it.\n          </p>-->\n          <!--<form (ngSubmit)=\"searchResult()\" method=\"get\">\n            <div class=\"form-group\">\n              <input class=\"form-control input-no-border\" type=\"text\" placeholder=\"Search Pages\">\n            </div>\n            <button type=\"submit\"  class=\"btn btn-inverse\">\n              Search <i class=\"fa fa-search text-warning ml-xs\"></i>\n            </button>\n          </form>-->\n        </div>\n      </div>\n    </div>\n  </main>\n  <!--<footer class=\"page-footer\">\n     \n  </footer>-->\n</div>\n"

/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_auth_auth_service__ = __webpack_require__("./src/app/common/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var apiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
var UserService = /** @class */ (function () {
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.userNameSource = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.currentUserNameMessage = this.userNameSource.asObservable();
    }
    UserService.prototype.changeUserName = function (message) {
        this.userNameSource.next(message);
    };
    UserService.prototype.getAllUser = function () {
        return this.authService.AuthGet(apiUrl + '/users/GetAllUser').map(function (response) { return response.json(); });
    };
    UserService.prototype.getAll = function () {
        return this.http.get(apiUrl + '/users').map(function (response) { return response.json(); });
    };
    UserService.prototype.getSubAdmin = function () {
        return this.authService.AuthGet(apiUrl + '/users/GetSubAdmin').map(function (response) { return response.json(); });
    };
    UserService.prototype.changePassword = function (username, oldPassword, newPassword) {
        var data = { username: username, oldPassword: oldPassword, newPassword: newPassword };
        var body = JSON.stringify(data);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return this.http.post(apiUrl + 'users/ChangePassword', body, options)
            .map(function (response) {
            return response;
        })
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].throw(err);
        });
    };
    UserService.prototype.updatePassword = function (data) {
        return this.authService.AuthPost(apiUrl + '/users/UpdatePassword', data);
    };
    UserService.prototype.delete = function (id) {
        return this.authService.AuthDelete(apiUrl + '/users/' + id);
    };
    UserService.prototype.createUser = function (data) {
        return this.authService.AuthPost(apiUrl + '/users/CreateUser', data);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__common_auth_auth_service__["a" /* AuthService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    //apiUrl: 'http://' + window.location.hostname + ':6001/api/',
    apiUrl: 'http://104.42.132.64:55501/api/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map