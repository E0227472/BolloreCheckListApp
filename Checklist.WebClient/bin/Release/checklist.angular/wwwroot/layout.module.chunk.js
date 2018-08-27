webpackJsonp(["layout.module"],{

/***/ "./node_modules/@ngx-loading-bar/core/@ngx-loading-bar/core.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingBarModule; });
/* unused harmony export LoadingBarComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoadingBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/debounceTime.js");




var LoadingBarService = /** @class */ (function () {
    function LoadingBarService() {
        this.progress$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_debounceTime__["a" /* debounceTime */].call(new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]());
        this._pending = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this._pendingRequests = 0;
        this._value = 0;
    }
    /**
     * @return {?}
     */
    LoadingBarService.prototype.start = function () {
        ++this._pendingRequests;
        if (this._value === 0) {
            // Inserts the loading bar element into the dom, and sets it to 2%
            this.set(2);
        }
    };
    /**
     * @return {?}
     */
    LoadingBarService.prototype.complete = function () {
        var _this = this;
        if (this._pendingRequests === 0) {
            return;
        }
        --this._pendingRequests;
        if (this._pendingRequests === 0 && this._value !== 100) {
            if (this._value > 0) {
                this.set(100);
                // Attempt to aggregate any start/complete calls within 500ms:
                setTimeout(function () { return _this.set(0); }, 500);
            }
        }
    };
    /**
     * @return {?}
     */
    LoadingBarService.prototype.ngOnDestroy = function () {
        this.progress$.complete();
    };
    /**
     * Set the loading bar's width to a certain percent.
     *
     * @param {?} n any value between 0 and 100
     * @return {?}
     */
    LoadingBarService.prototype.set = function (n) {
        var _this = this;
        if (n === 0 && this._pendingRequests > 0) {
            n = 2;
        }
        this._value = n;
        this.progress$.next(n);
        // increment loadingbar to give the illusion that there is always
        // progress but make sure to cancel the previous timeouts so we don't
        // have multiple incs running at the same time.
        clearTimeout(this._incTimeout);
        if (this._value > 0 && this._value < 100) {
            this._incTimeout = setTimeout(function () { return _this.increment(); }, 250);
        }
    };
    /**
     * Increments the loading bar by a random amount
     * but slows down as it progresses
     * @return {?}
     */
    LoadingBarService.prototype.increment = function () {
        var /** @type {?} */ rnd = 0;
        var /** @type {?} */ stat = this._value;
        if (stat >= 0 && stat < 25) {
            // Start out between 3 - 6% increments
            rnd = (Math.random() * (5 - 3 + 1) + 3);
        }
        else if (stat >= 25 && stat < 65) {
            // increment between 0 - 3%
            rnd = (Math.random() * 3);
        }
        else if (stat >= 65 && stat < 90) {
            // increment between 0 - 2%
            rnd = (Math.random() * 2);
        }
        else if (stat >= 90 && stat < 99) {
            // finally, increment it .5 %
            rnd = 0.5;
        }
        else {
            // after 99%, don't increment:
            rnd = 0;
        }
        this.set(this._value + rnd);
    };
    return LoadingBarService;
}());
LoadingBarService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
LoadingBarService.ctorParameters = function () { return []; };
var LoadingBarComponent = /** @class */ (function () {
    /**
     * @param {?} loader
     */
    function LoadingBarComponent(loader) {
        this.loader = loader;
        this.includeSpinner = true;
        this.includeBar = true;
    }
    return LoadingBarComponent;
}());
LoadingBarComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ngx-loading-bar',
                template: "\n    <ng-container *ngIf=\"(loader.progress$|async) as progress\">\n      <div id=\"loading-bar-spinner\" *ngIf=\"includeSpinner\" [style.color]=\"color\"><div class=\"spinner-icon\"></div></div>\n      <div id=\"loading-bar\" *ngIf=\"includeBar\" [style.color]=\"color\">\n        <div class=\"bar\" [style.background]=\"color\" [style.width]=\"progress + '%'\">\n          <div class=\"peg\"></div>\n        </div>\n      </div>\n    </ng-container>\n  ",
                preserveWhitespaces: false,
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                styles: ["\n    /* Make clicks pass-through */\n    :host > div {\n      pointer-events: none;\n      -webkit-pointer-events: none;\n      -webkit-transition: 350ms linear all;\n      transition: 350ms linear all;\n      color: #29d;\n      /* Fancy blur effect */ }\n      :host > div .bar {\n        -webkit-transition: width 350ms;\n        transition: width 350ms;\n        background: #29d;\n        position: fixed;\n        z-index: 10002;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 2px;\n        border-bottom-right-radius: 1px;\n        border-top-right-radius: 1px; }\n      :host > div .peg {\n        position: absolute;\n        width: 70px;\n        right: 0;\n        top: 0;\n        height: 2px;\n        opacity: .45;\n        -ms-box-shadow: 1px 0 6px 1px;\n        -webkit-box-shadow: 1px 0 6px 1px;\n        box-shadow: 1px 0 6px 1px;\n        color: inherit;\n        border-radius: 100%; }\n      :host > div:first-child {\n        display: block;\n        position: fixed;\n        z-index: 10002;\n        top: 10px;\n        left: 10px; }\n        :host > div:first-child .spinner-icon {\n          width: 14px;\n          height: 14px;\n          border: solid 2px transparent;\n          border-top-color: inherit;\n          border-left-color: inherit;\n          border-radius: 50%;\n          -webkit-animation: loading-bar-spinner 400ms linear infinite;\n          animation: loading-bar-spinner 400ms linear infinite; }\n\n    @-webkit-keyframes loading-bar-spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg); }\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg); } }\n\n    @keyframes loading-bar-spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg); }\n      100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg); } }\n  "],
            },] },
];
/**
 * @nocollapse
 */
LoadingBarComponent.ctorParameters = function () { return [
    { type: LoadingBarService, },
]; };
LoadingBarComponent.propDecorators = {
    'includeSpinner': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'includeBar': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'color': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var LoadingBarModule = /** @class */ (function () {
    function LoadingBarModule() {
    }
    /**
     * @return {?}
     */
    LoadingBarModule.forRoot = function () {
        return {
            ngModule: LoadingBarModule,
            providers: [LoadingBarService],
        };
    };
    return LoadingBarModule;
}());
LoadingBarModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                declarations: [LoadingBarComponent],
                exports: [LoadingBarComponent],
            },] },
];
/**
 * @nocollapse
 */
LoadingBarModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=core.es5.js.map


/***/ }),

/***/ "./node_modules/@ngx-loading-bar/router/@ngx-loading-bar/router.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingBarRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_loading_bar_core__ = __webpack_require__("./node_modules/@ngx-loading-bar/core/@ngx-loading-bar/core.es5.js");



var LoadingBarRouterModule = /** @class */ (function () {
    /**
     * @param {?} router
     * @param {?} loadingBar
     */
    function LoadingBarRouterModule(router$$1, loadingBar) {
        router$$1.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationStart */]) {
                loadingBar.start();
            }
            if ((event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationError */] || event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */] || event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationCancel */])) {
                loadingBar.complete();
            }
        });
    }
    return LoadingBarRouterModule;
}());
LoadingBarRouterModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */],
                    __WEBPACK_IMPORTED_MODULE_2__ngx_loading_bar_core__["a" /* LoadingBarModule */].forRoot(),
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */],
                    __WEBPACK_IMPORTED_MODULE_2__ngx_loading_bar_core__["a" /* LoadingBarModule */],
                ],
            },] },
];
/**
 * @nocollapse
 */
LoadingBarRouterModule.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__ngx_loading_bar_core__["b" /* LoadingBarService */], },
]; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=router.es5.js.map


/***/ }),

/***/ "./node_modules/jquery-slimscroll/jquery.slimscroll.js":
/***/ (function(module, exports) {

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function($) {

  $.fn.extend({
    slimScroll: function(options) {

      var defaults = {

        // width in pixels of the visible scroll area
        width : 'auto',

        // height in pixels of the visible scroll area
        height : '250px',

        // width in pixels of the scrollbar and rail
        size : '7px',

        // scrollbar color, accepts any hex/color value
        color: '#000',

        // scrollbar position - left/right
        position : 'right',

        // distance in pixels between the side edge and the scrollbar
        distance : '1px',

        // default scroll position on load - top / bottom / $('selector')
        start : 'top',

        // sets scrollbar opacity
        opacity : .4,

        // enables always-on mode for the scrollbar
        alwaysVisible : false,

        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut : false,

        // sets visibility of the rail
        railVisible : false,

        // sets rail color
        railColor : '#333',

        // sets rail opacity
        railOpacity : .2,

        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable : true,

        // defautlt CSS class of the slimscroll rail
        railClass : 'slimScrollRail',

        // defautlt CSS class of the slimscroll bar
        barClass : 'slimScrollBar',

        // defautlt CSS class of the slimscroll wrapper
        wrapperClass : 'slimScrollDiv',

        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll : false,

        // scroll amount applied to each mouse wheel step
        wheelStep : 20,

        // scroll amount applied when user is using gestures
        touchScrollStep : 200,

        // sets border radius
        borderRadius: '7px',

        // sets border radius of the rail
        railBorderRadius : '7px'
      };

      var o = $.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
        barHeight, percentScroll, lastScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false;

        // used in event handlers and for better minification
        var me = $(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass))
        {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.siblings('.' + o.barClass);
            rail = me.siblings('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if ($.isPlainObject(options))
            {
              // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
              if ( 'height' in options && options.height == 'auto' ) {
                me.parent().css('height', 'auto');
                me.css('height', 'auto');
                var height = me.parent().parent().height();
                me.parent().css('height', height);
                me.css('height', height);
              } else if ('height' in options) {
                var h = options.height;
                me.parent().css('height', h);
                me.css('height', h);
              }

              if ('scrollTo' in options)
              {
                // jump to a static point
                offset = parseInt(o.scrollTo);
              }
              else if ('scrollBy' in options)
              {
                // jump by value pixels
                offset += parseInt(o.scrollBy);
              }
              else if ('destroy' in options)
              {
                // remove slimscroll elements
                bar.remove();
                rail.remove();
                me.unwrap();
                return;
              }

              // scroll content by the given offset
              scrollContent(offset, false, true);
            }

            return;
        }
        else if ($.isPlainObject(options))
        {
            if ('destroy' in options)
            {
            	return;
            }
        }

        // optionally set height to the parent's height
        o.height = (o.height == 'auto') ? me.parent().height() : o.height;

        // wrap content
        var wrapper = $(divS)
          .addClass(o.wrapperClass)
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: o.width,
            height: o.height
          });

        // update style for the div
        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // create scrollbar rail
        var rail = $(divS)
          .addClass(o.railClass)
          .css({
            width: o.size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
            'border-radius': o.railBorderRadius,
            background: o.railColor,
            opacity: o.railOpacity,
            zIndex: 90
          });

        // create scrollbar
        var bar = $(divS)
          .addClass(o.barClass)
          .css({
            background: o.color,
            width: o.size,
            position: 'absolute',
            top: 0,
            opacity: o.opacity,
            display: o.alwaysVisible ? 'block' : 'none',
            'border-radius' : o.borderRadius,
            BorderRadius: o.borderRadius,
            MozBorderRadius: o.borderRadius,
            WebkitBorderRadius: o.borderRadius,
            zIndex: 99
          });

        // set position
        var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable){
          bar.bind("mousedown", function(e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;

            $doc.bind("mousemove.slimscroll", function(e){
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false);// scroll content
            });

            $doc.bind("mouseup.slimscroll", function(e) {
              isDragg = false;hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function(e){
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        // on bar over
        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        // show on parent mouseover
        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        // support for mobile
        me.bind('touchstart', function(e,b){
          if (e.originalEvent.touches.length)
          {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        me.bind('touchmove', function(e){
          // prevent scrolling the page if necessary
          if(!releaseScroll)
          {
  		      e.originalEvent.preventDefault();
		      }
          if (e.originalEvent.touches.length)
          {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom')
        {
          // scroll content to bottom
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (o.start !== 'top')
        {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel(this);

        function _onWheel(e)
        {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          var target = e.target || e.srcTarget || e.srcElement;
          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel)
          {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({ top: delta + 'px' });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({ top: offsetTop + 'px' });
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }

        function attachWheel(target)
        {
          if (window.addEventListener)
          {
            target.addEventListener('DOMMouseScroll', _onWheel, false );
            target.addEventListener('mousewheel', _onWheel, false );
          }
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

        function getBarHeight()
        {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
          bar.css({ height: barHeight + 'px' });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({ display: display });
        }

        function showBar()
        {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll)
          {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll)
            {
                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                me.trigger('slimscroll', msg);
            }
          }
          else
          {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if(barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          // only hide when options allow it
          if (!o.alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
              {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

      });

      // maintain chainability
      return this;
    }
  });

  $.fn.extend({
    slimscroll: $.fn.slimScroll
  });

})(jQuery);


/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationStart */]) {
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
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
            this._hideSpinner();
        }
        // Set loading state to false in both of the below events to
        // hide the spinner in case a request fails
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationCancel */]) {
            this._hideSpinner();
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationError */]) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.nav-static'),
        __metadata("design:type", Boolean)
    ], LayoutComponent.prototype, "navStatic", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.chat-sidebar-opened'),
        __metadata("design:type", Boolean)
    ], LayoutComponent.prototype, "chatOpened", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.app'),
        __metadata("design:type", Boolean)
    ], LayoutComponent.prototype, "appClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('spinnerElement'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], LayoutComponent.prototype, "spinnerElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('routerComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], LayoutComponent.prototype, "routerComponent", void 0);
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("./src/app/layout/layout.template.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery_slimscroll__ = __webpack_require__("./node_modules/jquery-slimscroll/jquery.slimscroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery_slimscroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_routes__ = __webpack_require__("./src/app/layout/layout.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__ = __webpack_require__("./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("./src/app/layout/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_search_pipe__ = __webpack_require__("./src/app/layout/pipes/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_loading_bar_router__ = __webpack_require__("./node_modules/@ngx-loading-bar/router/@ngx-loading-bar/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { ChatSidebarComponent } from './chat-sidebar/chat-sidebar.component';
//import { ChatMessageComponent } from './chat-sidebar/chat-message/chat-message.component';

//import { NotificationsLoadDirective } from './notifications/notifications-load.directive';
//import { NotificationsComponent } from './notifications/notifications.component';

var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["g" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["b" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__layout_routes__["a" /* ROUTES */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngx_loading_bar_router__["a" /* LoadingBarRouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                //ChatSidebarComponent,
                __WEBPACK_IMPORTED_MODULE_9__pipes_search_pipe__["a" /* SearchPipe */],
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__layout_component__["a" /* LayoutComponent */], children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            { path: 'another-page', loadChildren: '../another/another.module#AnotherModule' },
            { path: 'manage-user', loadChildren: '../user/user.module#UserModule' },
        ] }
];
var ROUTES = __WEBPACK_IMPORTED_MODULE_0__angular_router__["g" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "./src/app/layout/layout.template.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-sidebar id=\"sidebar\" role=\"navigation\" class=\"sidebar\"></app-sidebar>\r\n<app-navbar (toggleSidebarEvent)=\"toggleSidebarListener($event)\"\r\n            (toggleChatEvent)=\"toggleChatListener()\" class=\"page-controls navbar navbar-dashboard\"></app-navbar>\r\n<!--<app-chat-sidebar class=\"chat-sidebar\"></app-chat-sidebar>-->\r\n<div class=\"content-wrap\" id=\"content-wrap\">\r\n  <ngx-loading-bar></ngx-loading-bar>\r\n  <main id=\"content\" class=\"content\" role=\"main\">\r\n    <div class=\"loading-overlay\" #spinnerElement>\r\n      <div class=\"sk-fading-circle\">\r\n        <div class=\"sk-circle1 sk-circle\"></div>\r\n        <div class=\"sk-circle2 sk-circle\"></div>\r\n        <div class=\"sk-circle3 sk-circle\"></div>\r\n        <div class=\"sk-circle4 sk-circle\"></div>\r\n        <div class=\"sk-circle5 sk-circle\"></div>\r\n        <div class=\"sk-circle6 sk-circle\"></div>\r\n        <div class=\"sk-circle7 sk-circle\"></div>\r\n        <div class=\"sk-circle8 sk-circle\"></div>\r\n        <div class=\"sk-circle9 sk-circle\"></div>\r\n        <div class=\"sk-circle10 sk-circle\"></div>\r\n        <div class=\"sk-circle11 sk-circle\"></div>\r\n        <div class=\"sk-circle12 sk-circle\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"router-component\" #routerComponent>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <footer class=\"content-footer\">\r\n      <a href=\"#\" rel=\"nofollow\" target=\"_blank\">Checklist App</a>\r\n    </footer>\r\n  </main>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("./src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_auth_auth_service__ = __webpack_require__("./src/app/common/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(config, authService) {
        this.authService = authService;
        this.toggleSidebarEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.config = config.getConfig();
    }
    NavbarComponent.prototype.toggleSidebar = function (state) {
        this.toggleSidebarEvent.emit(state);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getCurrentUser();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], NavbarComponent.prototype, "toggleSidebarEvent", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/layout/navbar/navbar.template.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_2__common_auth_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/layout/navbar/navbar.template.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar-nav flex-row\" (click)=\"$event.preventDefault()\">\n  <li class=\"nav-item\">\n    <ng-template #sidebarToggleTooltip>\n      Turn on/off <br> sidebar <br>collapsing\n    </ng-template>\n    <!-- whether to automatically collapse sidebar on mouseleave. If activated acts more like usual admin templates -->\n    <a (click)=\"toggleSidebar('static')\"  class=\"nav-link d-none ml-3 d-lg-flex\" [tooltip]=\"sidebarToggleTooltip\"\n      placement=\"bottom\">\n      <i class=\"fa fa-bars fa-lg\"></i>\n    </a>\n    <!-- shown on xs & sm screen. collapses and expands navigation -->\n    <a (click)=\"toggleSidebar('collapse')\" class=\"d-lg-none nav-link\" href=\"#\" data-html=\"true\" title=\"Show/hide<br>sidebar\" data-placement=\"bottom\">\n      <span class=\"rounded rounded-lg bg-gray text-white d-md-none\"><i class=\"fa fa-bars fa-lg\"></i></span>\n      <i class=\"ml-3 fa fa-bars fa-lg d-none d-md-block d-lg-none\"></i>\n    </a>\n  </li> \n</ul>\n\n<a class=\"navbar-brand d-md-none\" [routerLink]=\" ['/app/dashboard'] \">\n  <i class=\"fa fa-circle fa-sm text-gray mr-n-sm\"></i>\n  <i class=\"fa fa-circle fa-sm text-warning\"></i>\n  &nbsp;\n  {{config.name}}\n  &nbsp;\n  <i class=\"fa fa-circle fa-sm text-warning mr-n-sm\"></i>\n  <i class=\"fa fa-circle fa-sm text-gray\"></i>\n</a>\n\n<ul class=\"navbar-nav mr-3 d-none d-md-flex flex-row\" (click)=\"$event.preventDefault()\">\n    \n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\n      <a href=\"#\" class=\"nav-link dropdown-toggle\" dropdownToggle>\r\n        <!--<i class=\"fa fa-cog fa-lg\"></i>-->\r\n        {{currentUser.firstName}}&nbsp;<strong>{{currentUser.lastName}}</strong>&nbsp;<i class=\"fa fa-cog fa-lg\"></i>\r\n      </a>\n      <ul *dropdownMenu class=\"dropdown-menu dropdown-menu-right\">\n        <!--<li><a class=\"dropdown-item\" href=\"#\"><i class=\"glyphicon glyphicon-user\"></i> &nbsp; My Account</a></li>\n        <li class=\"dropdown-divider\"></li>\n        <li><a class=\"dropdown-item\" [routerLink]=\" ['/error'] \">Calendar</a></li>\n        <li><a class=\"dropdown-item\" [routerLink]=\" ['/error'] \">Inbox &nbsp;&nbsp;<span class=\"badge badge-pill badge-danger animated bounceIn\">9</span></a></li>-->\n        <!--<li class=\"dropdown-divider\"></li>-->\n        <li><a class=\"dropdown-item\" [routerLink]=\" ['/login'] \"><i class=\"fa fa-sign-out\"></i> &nbsp; Log Out</a></li>\n      </ul>\n    </li>\n    \n  </ul>\n"

/***/ }),

/***/ "./src/app/layout/pipes/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (conversation) {
                if (conversation.name) {
                    return conversation.name.search(searchText) !== -1 ||
                        conversation.lastMessage.search(searchText) !== -1;
                }
                else {
                    if (conversation.text) {
                        return conversation.text.search(searchText) !== -1;
                    }
                }
            });
        }
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'SearchPipe',
            pure: false
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("./src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_auth_auth_service__ = __webpack_require__("./src/app/common/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.changeActiveNavigationItem(_this.location);
            }
        });
        this.currentUser = this.authService.getCurrentUser();
    };
    SidebarComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/layout/sidebar/sidebar.template.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_4__common_auth_auth_service__["a" /* AuthService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"js-sidebar-content\">\n  <header class=\"logo d-none d-md-block\">\n    <a href=\"index.html\">{{config.name}}</a>\n  </header>\n  <div class=\"sidebar-status d-md-none dropdown\" dropdown [autoClose]=\"false\" (isOpenChange)=\"toggleSidebarOverflow($event)\" placement=\"bottom left\">\r\n    <a [routerLink]=\"\" class=\"dropdown-toggle\" dropdownToggle>\r\n      &nbsp;\r\n      {{currentUser.firstName}}&nbsp;<strong>{{currentUser.lastName}}</strong>\r\n    </a>\r\n  </div>\n  <!-- main notification links are placed inside of .sidebar-nav -->\n  <ul class=\"sidebar-nav\">\n    <li>\n      <a [routerLink]=\" ['dashboard'] \">\n      <span class=\"icon\">\n          <i class=\"fa fa-home\"></i>\n      </span>\n        Dashboard\n      </a>\n    </li>\n    <li *ngIf=\"currentUser.role == 'Admin'\">\n      <a [routerLink]=\" ['manage-user'] \">\n      <span class=\"icon\">\n          <i class=\"fa fa-user\"></i>\n      </span>\n        Manage Users     \n      </a>\n    </li>\n    <li *ngIf=\"configFn.isScreen('xs') || configFn.isScreen('sm')\">\n      <a (click)=\"logout()\">\n        <span class=\"icon\">\n          <i class=\"fa fa-sign-out\"></i>\n        </span>\n        Logout\n      </a>\n    </li>\n  </ul>\n  \n</div>\n"

/***/ })

});
//# sourceMappingURL=layout.module.chunk.js.map