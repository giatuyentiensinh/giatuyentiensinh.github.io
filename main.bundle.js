webpackJsonp([0,4],{

/***/ 410:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 410;


/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(533);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/tuyenng/GIT/web-aboutme/src/main.js.map

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(722),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/tuyenng/GIT/web-aboutme/src/app.component.js.map

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_materialize__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_translate__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_grid__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layout_layout_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__skill_skill_component__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__project_project_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__friend_friend_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__cv_cv_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__contact_contact_component__ = __webpack_require__(534);
/* unused harmony export firebaseConfig */
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var routes = [
    { path: '', redirectTo: '/cv', pathMatch: 'full' },
    // { path: '**', redirectTo: '/cv', pathMatch: 'full' },
    { path: 'cv', component: __WEBPACK_IMPORTED_MODULE_16__cv_cv_component__["a" /* CvComponent */] },
    {
        path: 'layout', component: __WEBPACK_IMPORTED_MODULE_12__layout_layout_component__["a" /* LayoutComponent */], children: [
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
            { path: 'skill', component: __WEBPACK_IMPORTED_MODULE_13__skill_skill_component__["a" /* SkillComponent */] },
            { path: 'project', component: __WEBPACK_IMPORTED_MODULE_14__project_project_component__["a" /* ProjectComponent */] },
            { path: 'friend', component: __WEBPACK_IMPORTED_MODULE_15__friend_friend_component__["a" /* FriendComponent */] }
        ]
    }
];
var firebaseConfig = {
    apiKey: 'AIzaSyAYJ1r9qkbwCwXsPVmdU24HXJPu8YujGtM',
    authDomain: 'web-aboutme.firebaseapp.com',
    databaseURL: 'https://web-aboutme.firebaseio.com',
    storageBucket: "web-aboutme.appspot.com",
    messagingSenderId: "695374920782"
};
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8_ng2_translate__["b" /* TranslateStaticLoader */](http, './assets/i18n', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__layout_layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_13__skill_skill_component__["a" /* SkillComponent */],
                __WEBPACK_IMPORTED_MODULE_14__project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_15__friend_friend_component__["a" /* FriendComponent */],
                __WEBPACK_IMPORTED_MODULE_16__cv_cv_component__["a" /* CvComponent */],
                __WEBPACK_IMPORTED_MODULE_17__contact_contact_component__["a" /* ContactComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_materialize__["MaterializeModule"],
                __WEBPACK_IMPORTED_MODULE_9_angular2_grid__["NgGridModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_translate__["c" /* TranslateModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_8_ng2_translate__["d" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["b" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["HashLocationStrategy"] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/tuyenng/GIT/web-aboutme/src/app.module.js.map

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(347);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(af) {
        this.checkLoading = true;
        this.comment = af.database.list('/comment');
    }
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        this.checkLoading = false;
        this.comment.push({
            name: this.name,
            email: this.email,
            message: this.message,
            time: new Date()
        }).then(function () {
            console.log(_this.message);
            console.log(_this.email);
            console.log(_this.name);
            _this.checkLoading = true;
        });
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(723),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFire */]) === 'function' && _a) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a;
}());
//# sourceMappingURL=/home/tuyenng/GIT/web-aboutme/src/contact.component.js.map

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CvComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CvComponent = (function () {
    function CvComponent() {
    }
    CvComponent.prototype.ngOnInit = function () {
    };
    CvComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cv',
            template: __webpack_require__(724),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [])
    ], CvComponent);
    return CvComponent;
}());
//# sourceMappingURL=/home/tuyenng/GIT/web-aboutme/src/cv.component.js.map

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__(247);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FriendComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendComponent = (function () {
    function FriendComponent(translate) {
        this.translate = translate;
        translate.addLangs(["en", "vi"]);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');
    }
    FriendComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-friend',
            template: __webpack_require__(725),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["a" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["a" /* TranslateService */]) === 'function' && _a) || Object])
    ], FriendComponent);
    return FriendComponent;
    var _a;
}());
//# sourceMappingURL=/home/tuyenng/GIT/web-aboutme/src/friend.component.js.map

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(726),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/tuyenng/GIT/web-aboutme/src/home.component.js.map

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__(247);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutComponent = (function () {
    function LayoutComponent(translate) {
        this.translate = translate;
        translate.addLangs(["en", "vi"]);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');
    }
    LayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(727),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["a" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["a" /* TranslateService */]) === 'function' && _a) || Object])
    ], LayoutComponent);
    return LayoutComponent;
    var _a;
}());
//# sourceMappingURL=/home/tuyenng/GIT/web-aboutme/src/layout.component.js.map

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = (function () {
    function ProjectComponent() {
    }
    ProjectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(728),
            styles: [__webpack_require__(720)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectComponent);
    return ProjectComponent;
}());
//# sourceMappingURL=/home/tuyenng/GIT/web-aboutme/src/project.component.js.map

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SkillComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillComponent = (function () {
    function SkillComponent() {
        this.boxes = [];
        this.rgb = '#efefef';
        this.gridConfig = {
            'margins': [5],
            'draggable': true,
            'resizable': true,
            'max_cols': 0,
            'max_rows': 0,
            'visible_cols': 0,
            'visible_rows': 0,
            'min_cols': 1,
            'min_rows': 1,
            'col_width': 2,
            'row_height': 2,
            'cascade': 'up',
            'min_width': 60,
            'min_height': 50,
            'fix_to_grid': false,
            'auto_style': true,
            'auto_resize': false,
            'maintain_ratio': false,
            'prefer_new': false,
            'zoom_on_drag': false,
            'limit_to_screen': true
        };
        this.itemPositions = [];
        var dashconf = this._generateDefaultDashConfig();
        for (var i = 0; i < dashconf.length; i++) {
            var conf = dashconf[i];
            conf.payload = 1 + i;
            this.boxes[i] = { id: i + 1, config: conf };
            console.log(this.boxes[i].config);
        }
        this.curNum = dashconf.length + 1;
    }
    SkillComponent.prototype.ngOnInit = function () {
    };
    SkillComponent.prototype._generateDefaultDashConfig = function () {
        return [
            { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 25, 'sizey': 25 },
            { 'dragHandle': '.handle', 'col': 36, 'row': 1, 'sizex': 25, 'sizey': 25 },
            { 'dragHandle': '.handle', 'col': 1, 'row': 2, 'sizex': 25, 'sizey': 25 },
            { 'dragHandle': '.handle', 'col': 36, 'row': 2, 'sizex': 25, 'sizey': 25 },
            { 'dragHandle': '.handle', 'col': 1, 'row': 3, 'sizex': 25, 'sizey': 25 },
            { 'dragHandle': '.handle', 'col': 36, 'row': 3, 'sizex': 25, 'sizey': 25 }
        ];
    };
    SkillComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-skill',
            template: __webpack_require__(729),
            styles: [__webpack_require__(721)]
        }), 
        __metadata('design:paramtypes', [])
    ], SkillComponent);
    return SkillComponent;
}());
//# sourceMappingURL=/home/tuyenng/GIT/web-aboutme/src/skill.component.js.map

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/tuyenng/GIT/web-aboutme/src/environment.js.map

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/tuyenng/GIT/web-aboutme/src/polyfills.js.map

/***/ },

/***/ 714:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 715:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 716:
/***/ function(module, exports) {

module.exports = "nav .brand-logo {\n  color: #212121;\n}\nnav ul a {\n  color: #212121;\n  font-weight: bold;\n}\n.active {\n  background-color: #E5E5E5;\n}\n"

/***/ },

/***/ 717:
/***/ function(module, exports) {

module.exports = ".point {\n\tcursor: pointer;\n}"

/***/ },

/***/ 718:
/***/ function(module, exports) {

module.exports = ".image {\n  position: relative;\n  width: 100%;\n  height: 450px;\n}\n\n.text-img {\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n}"

/***/ },

/***/ 719:
/***/ function(module, exports) {

module.exports = "h5 {\n  margin-bottom: 0px;\n}\n"

/***/ },

/***/ 720:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 721:
/***/ function(module, exports) {

module.exports = ".grid {\n  background-color: #efefef;\n  width: 100%;\n  min-height: 750px;\n}\n.grid-item {\n  background-color: #ffffff;\n  -webkit-transition: width 0.25s, height 0.25s, left 0.25s, top 0.25s, right 0.25s, bottom 0.25s;\n  transition: width 0.25s, height 0.25s, left 0.25s, top 0.25s, right 0.25s, bottom 0.25s;\n  border: solid 1px;\n}\n.grid-item:active, .grid-item.moving {\n  z-index: 2;\n  -webkit-transition: none;\n  transition: none;\n}\n.grid-placeholder {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n@media (max-width: 767px) {\n  .grid {\n    width: 100% !important;\n    height: auto !important;\n    padding: 10px;\n  }\n  .grid-item {\n    position: static !important;\n    width: 100% !important;\n    margin-bottom: 10px;\n  }\n  .grid-item:last-child {\n    margin-bottom: 0;\n  }\n}\n"

/***/ },

/***/ 722:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ },

/***/ 723:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n    <form class=\"col s12\" (ngSubmit)=\"onSubmit()\" #form=\"ngForm\">\n        <!-- <legend class=\"blue-text text-darken-4\">\n            <h4>Give me a message</h4>\n        </legend> -->\n        <div class=\"row\">\n            <div class=\"input-field col s6 light-blue-text\">\n                <input id=\"name\" type=\"text\" class=\"validate\" name=\"name\" [(ngModel)]=\"name\" #nameV=\"ngModel\" required />\n                <label for=\"name\">Name</label>\n                <div [hidden]=\"nameV.valid || nameV.pristine\" class=\"red-text\">\n                    Tên không được bỏ trống\n                </div>\n            </div>\n            <div class=\"input-field col s6 light-blue-text\">\n                <input id=\"email\" type=\"email\" class=\"validate\" name=\"email\" [(ngModel)]=\"email\" #emailV=\"ngModel\" required />\n                <label for=\"email\">Email</label>\n                <div [hidden]=\"emailV.valid || emailV.pristine\" class=\"red-text\">\n                    Email không được bỏ trống\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"input-field col s12 light-blue-text\">\n                <textarea id=\"message\" class=\"materialize-textarea\" name=\"message\" [(ngModel)]=\"message\" #messageV=\"ngModel\" required></textarea>\n                <label for=\"message\">Your message</label>\n                <div [hidden]=\"messageV.valid || messageV.pristine\" class=\"red-text\">\n                    Thông điệp không được bỏ trống\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col s6\">\n                <button type=\"submit\" class=\"btn light-blue darken-4\" [disabled]=\"!form.form.valid\">Send</button>\n            </div>\n            <div class=\"col s6\" *ngIf=\"!checkLoading\">\n                <div class=\"preloader-wrapper big active\">\n                    <div class=\"spinner-layer spinner-blue\">\n                        <div class=\"circle-clipper left\">\n                            <div class=\"circle\"></div>\n                        </div>\n                        <div class=\"gap-patch\">\n                            <div class=\"circle\"></div>\n                        </div>\n                        <div class=\"circle-clipper right\">\n                            <div class=\"circle\"></div>\n                        </div>\n                    </div>\n                    <div class=\"spinner-layer spinner-red\">\n                        <div class=\"circle-clipper left\">\n                            <div class=\"circle\"></div>\n                        </div>\n                        <div class=\"gap-patch\">\n                            <div class=\"circle\"></div>\n                        </div>\n                        <div class=\"circle-clipper right\">\n                            <div class=\"circle\"></div>\n                        </div>\n                    </div>\n                    <div class=\"spinner-layer spinner-yellow\">\n                        <div class=\"circle-clipper left\">\n                            <div class=\"circle\"></div>\n                        </div>\n                        <div class=\"gap-patch\">\n                            <div class=\"circle\"></div>\n                        </div>\n                        <div class=\"circle-clipper right\">\n                            <div class=\"circle\"></div>\n                        </div>\n                    </div>\n                    <div class=\"spinner-layer spinner-green\">\n                        <div class=\"circle-clipper left\">\n                            <div class=\"circle\"></div>\n                        </div>\n                        <div class=\"gap-patch\">\n                            <div class=\"circle\"></div>\n                        </div>\n                        <div class=\"circle-clipper right\">\n                            <div class=\"circle\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ },

/***/ 724:
/***/ function(module, exports) {

module.exports = "<!-- header -->\n<header class=\"navbar-fixed\">\n    <nav class=\"white\">\n        <div>\n            <a class=\"brand-logo waves-effect waves m-l-xl\"><strong>Tuyen-ng</strong></a>\n            <!-- activate side-bav in mobile view -->\n            <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse black-text\" materialize=\"sideNav\" [materializeParams]=\"[{menuWidth: 300, edge: 'left', closeOnClick: true, draggable: true}]\">\n                <i class=\"material-icons\">menu</i>\n            </a>\n            <ul class=\"right hide-on-med-and-down\">\n                <li><a href=\"#about\">ABOUT</a></li>\n                <li><a href=\"#experience\">EXPERIENCES</a></li>\n                <li><a href=\"#work\">PROJECTS</a></li>\n                <li><a href=\"#contact\">CONTACT</a></li>\n            </ul>\n            <!-- navbar for mobile -->\n            <ul class=\"side-nav\" id=\"mobile-demo\">\n                <li><a class=\"waves-effect waves-green\" href=\"#about\">ABOUT</a></li>\n                <li><a class=\"waves-effect waves-green\" href=\"#experience\">EXPERIENCES</a></li>\n                <li><a class=\"waves-effect waves-green\" href=\"#work\">PROJECTS</a></li>\n                <li><a class=\"waves-effect waves-green\" href=\"#contact\">CONTACT</a></li>\n            </ul>\n        </div>\n    </nav>\n</header>\n<!-- /header -->\n<!-- content-->\n<!-- slide -->\n<section materialize=\"scrollSpy\" id=\"slide\" class=\"deep-purple lighten-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col s12 m5 l5 b\">\n                <h3>Nguyen Gia</h3>\n                <a routerLink=\"/layout/home\" routerLinkActive=\"active\" class=\"text-name\">Tuyen</a>\n                <h4><a href=\"http://hust.edu.vn\" class=\"grey-text text-lighten-1\">HUST Engineering</a></h4>\n                <div class=\"hide-on-small-only\">\n                    <!-- <a class=\"btn-floating waves-effect waves white center-align button-icon\" href=\"https://www.facebook.com/javaoriami\" tooltipped data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Facebook\"> -->\n                    <a class=\"btn-floating waves-effect waves white center-align button-icon\" href=\"https://www.facebook.com/javaoriami\">\n                        <svg style=\"width:24px;height:24px;\" viewBox=\"0 0 24 24\">\n                            <path fill=\"#000000\" d=\"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z\" />\n                        </svg>\n                    </a>\n                    <!-- <a class=\"btn-floating waves-effect waves white center-align button-icon\" href=\"https://plus.google.com/117976078610191841927\" tooltipped data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Google +\"> -->\n                    <a class=\"btn-floating waves-effect waves white center-align button-icon\" href=\"https://plus.google.com/117976078610191841927\">\n                        <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n                            <path fill=\"#000000\" d=\"M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z\" />\n                        </svg>\n                    </a>\n                    <!-- <a class=\"btn-floating waves-effect waves white center-align button-icon\" tooltipped data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Linkedin\"> -->\n                    <a class=\"btn-floating waves-effect waves white center-align button-icon\">\n                        <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n                            <path fill=\"#000000\" d=\"M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z\" />\n                        </svg>\n                    </a>\n                    <!-- <a class=\"btn-floating waves-effect waves white center-align button-icon\" tooltipped data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Twitter\"> -->\n                    <a class=\"btn-floating waves-effect waves white center-align button-icon\">\n                        <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n                            <path fill=\"#000000\" d=\"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\" />\n                        </svg>\n                    </a>\n                    <!-- <a class=\"btn-floating waves-effect waves white center-align button-icon\" tooltipped data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Pinterest\"> -->\n                    <a class=\"btn-floating waves-effect waves white center-align button-icon\">\n                        <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n                            <path fill=\"#000000\" d=\"M13.25,17.25C12.25,17.25 11.29,16.82 10.6,16.1L9.41,20.1L9.33,20.36L9.29,20.34C9.04,20.75 8.61,21 8.12,21C7.37,21 6.75,20.38 6.75,19.62C6.75,19.56 6.76,19.5 6.77,19.44L6.75,19.43L6.81,19.21L9.12,12.26C9.12,12.26 8.87,11.5 8.87,10.42C8.87,8.27 10.03,7.62 10.95,7.62C11.88,7.62 12.73,7.95 12.73,9.26C12.73,10.94 11.61,11.8 11.61,13C11.61,13.94 12.37,14.69 13.29,14.69C16.21,14.69 17.25,12.5 17.25,10.44C17.25,7.71 14.89,5.5 12,5.5C9.1,5.5 6.75,7.71 6.75,10.44C6.75,11.28 7,12.12 7.43,12.85C7.54,13.05 7.6,13.27 7.6,13.5A1.25,1.25 0 0,1 6.35,14.75C5.91,14.75 5.5,14.5 5.27,14.13C4.6,13 4.25,11.73 4.25,10.44C4.25,6.33 7.73,3 12,3C16.27,3 19.75,6.33 19.75,10.44C19.75,13.72 17.71,17.25 13.25,17.25Z\" />\n                        </svg>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col s12 m7 l7\">\n                <a routerLink=\"/layout/home\" routerLinkActive=\"active\" class=\"right\">\n                    <img class=\"responsive-img\" src=\"assets/images/image-tuyen.jpg\" />\n                </a>\n                <!-- <div carousel style=\"height: 250px; perspective: 300px;\">\n                    <a class=\"carousel-item\" href=\"javascript:void(0);\"><img src=\"assets/images/image-tuyen5.png\"></a>\n                    <a class=\"carousel-item\" href=\"javascript:void(0);\"><img src=\"assets/images/image-tuyen.jpg\"></a>\n                    <a class=\"carousel-item\" href=\"javascript:void(0);\"><img src=\"assets/images/image-tuyen3.png\"></a>\n                    <a class=\"carousel-item\" href=\"javascript:void(0);\"><img src=\"assets/images/image-tuyen2.png\"></a>\n                    <a class=\"carousel-item\" href=\"javascript:void(0);\"><img src=\"assets/images/image-tuyen4.png\"></a>\n                </div> -->\n            </div>\n        </div>\n    </div>\n</section>\n<!-- /slide -->\n<!-- about -->\n<section materialize=\"scrollSpy\" id=\"about\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col s12 m5 l5\">\n                <img materialize=\"materialbox\" class=\"responsive-img hoverable\" data-caption=\"Đồ Sơn Hải Phòng\" src=\"assets/images/WP_20150621_07_55_14_Pro.jpg\">\n                <img materialize=\"materialbox\" class=\"responsive-img hoverable\" data-caption=\"Itbee Team\" src=\"assets/images/IMG_0586.jpg\">\n            </div>\n            <div class=\"col s12 m7 l7\">\n                <h2>About me</h2>\n                <p>Hi, My name is Tuyen,</p>\n                <p>I'm 22 years old, My hometown in Viet Nam</p>\n                <p>I'm have been practice social network, web server and data analysis with my team for many year. I always want to use my skills to build big project.</p>\n                <p class=\"divider\"></p>\n                <a ui-sref=\"app.about\" class=\"right btn-floating deep-purple lighten-3 waves-effect waves-blue\" materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"READ MORE\"><i class=\"material-icons\">info</i></a>\n                <h3>My skills</h3>\n                <div>\n                    <h5>\n                        Presentation\n                        <span class=\"right\">70%</span>\n                    </h5>\n                    <div class=\"progress light-blue darken-1\">\n                        <div class=\"determinate light-blue darken-4\" style=\"width: 70%\"></div>\n                    </div>\n                </div>\n                <div>\n                    <h5>\n                        Research\n                        <span class=\"right\">80%</span>\n                    </h5>\n                    <div class=\"progress light-blue darken-1\">\n                        <div class=\"determinate light-blue darken-4\" style=\"width: 80%\"></div>\n                    </div>\n                </div>\n                <div>\n                    <h5>\n                        Team work\n                        <span class=\"right\">85%</span>\n                    </h5>\n                    <div class=\"progress light-blue darken-1\">\n                        <div class=\"determinate light-blue darken-4\" style=\"width: 85%\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- /about -->\n<!-- Experience -->\n<section materialize=\"scrollSpy\" id=\"experience\" class=\"deep-purple lighten-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col s12 m3\">\n                <img src=\"assets/images/playframework.png\" class=\"responsive-img\" />\n                <p>Play Framework is a web development framework with Scala and Java APIs that empowers developers to build applications with an ease unparalleled on the JVM.</p>\n            </div>\n            <div class=\"col s12 m3\">\n                <img src=\"assets/images/spark.png\" class=\"responsive-img\" />\n                <p>Apache Spark is a lightning-fast, distributed compute engine for processing large, streaming datasets.</p>\n            </div>\n            <div class=\"col s12 m3\">\n                <img src=\"assets/images/mysql.png\" class=\"responsive-img\" />\n                <p>MySQL is the world's most popular open source database. Whether you are a fast growing web property, technology ISV or large enterprise, MySQL can cost-effectively help you deliver high performance, scalable database applications.</p>\n            </div>\n            <div class=\"col s12 m3\">\n                <img src=\"assets/images/cassandra.png\" class=\"responsive-img\" />\n                <p>The Apache Cassandra database is the right choice when you need scalability and high availability without compromising performance.</p>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- /Experience -->\n<!-- Work -->\n<section materialize=\"scrollSpy\" id=\"work\">\n    <div class=\"container\">\n        <h2>Projects</h2>\n        <div class=\"row\">\n            <div class=\"col s12 m4\">\n                <div class=\"card\">\n                    <div class=\"card-image\">\n                        <img materialize=\"materialbox\" class=\"responsive-img\" data-caption=\"BK Internship\" src=\"assets/images/img_bkinternship.jpeg\">\n                    </div>\n                    <div class=\"card-content\">\n                        <p>Trang quản lý thực tập viện CNTT_TT ĐHBKHN</p>\n                    </div>\n                    <div class=\"card-action\">\n                        <a href=\"#\">BK Internship</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col s12 m4\">\n                <div class=\"card\">\n                    <div class=\"card-image\">\n                        <img materialize=\"materialbox\" class=\"responsive-img\" data-caption=\"Itbee\" src=\"assets/images/itbee.png\">\n                    </div>\n                    <div class=\"card-content\">\n                        <p>The social network in seeking talent, referring jobs for people, friend</p>\n                    </div>\n                    <div class=\"card-action\">\n                        <a href=\"http://itbee.vn\">Itbee</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col s12 m4\">\n                <div class=\"card\">\n                    <div class=\"card-image\">\n                        <img materialize=\"materialbox\" class=\"responsive-img\" data-caption=\"BK IoT\" src=\"assets/images/bkiot.png\">\n                    </div>\n                    <div class=\"card-content\">\n                        <p>Building platform OM2M in IoT system</p>\n                    </div>\n                    <div class=\"card-action\">\n                        <a href=\"#\">IoT research</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- /Work -->\n<!-- /content-->\n<!-- footer -->\n<footer materialize=\"scrollSpy\" id=\"contact\" class=\"page-footer deep-purple lighten-5\">\n    <div class=\"container\">\n        <!-- <app-contact></app-contact> -->\n        <!-- <ul materialize=\"collapsible\" class=\"collapsible\" data-collapsible=\"accordion\">\n            <li>\n                <div class=\"collapsible-header\"><i class=\"material-icons\">filter_drama</i>First</div>\n                <div class=\"collapsible-body\">\n                    <p>Lorem ipsum dolor sit amet.</p>\n                </div>\n            </li>\n            <li>\n                <div class=\"collapsible-header\"><i class=\"material-icons\">place</i>Second</div>\n                <div class=\"collapsible-body\">\n                    <p>Lorem ipsum dolor sit amet.</p>\n                </div>\n            </li>\n            <li>\n                <div class=\"collapsible-header\"><i class=\"material-icons\">whatshot</i>Third</div>\n                <div class=\"collapsible-body\">\n                    <p>Lorem ipsum dolor sit amet.</p>\n                </div>\n            </li>\n        </ul> -->\n        <div class=\"row\">\n            <div class=\"col l6 s12\">\n                <h5 class=\"black-text\"><strong>Contact me</strong></h5>\n                <!-- <p class=\"grey-text text-darken-4\">You can contact me via email or the phone</p> -->\n                <ul materialize=\"collapsible\" class=\"collapsible\" data-collapsible=\"accordion\">\n                    <li>\n                        <div class=\"collapsible-header blue-text text-darken-4\">\n                            Give me a message\n                        </div>\n                        <div class=\"collapsible-body\">\n                            <app-contact></app-contact>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col l4 offset-l2 s12\">\n                <h5 class=\"black-text\">Info about me</h5>\n                <ul>\n                    <li><a class=\"grey-text text-darken-3\"><strong>Location</strong> Hanoi, Vietnam</a></li>\n                    <li><a class=\"grey-text text-darken-3\"><strong>Website</strong> giatuyentiensinh.github.io</a></li>\n                    <li><a class=\"grey-text text-darken-3\"><strong>Phone</strong> (+84) 167 629 8972</a></li>\n                    <li><a class=\"grey-text text-darken-3\"><strong>Email</strong> giatuyentiensinh@gmail.com</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"footer-copyright\">\n        <div class=\"container black-text\">\n            Copyright © 2017 by Tuyenng\n            <a class=\"grey-text text-darken-4 right\">Tuyen's site</a>\n        </div>\n    </div>\n</footer>\n<!-- /footer -->\n"

/***/ },

/***/ 725:
/***/ function(module, exports) {

module.exports = "<div class=\"row blue-grey lighten-4\">\n  <div class=\"col s12 m6\">\n    <div class=\"card small cyan darken-4\">\n      <img src=\"assets/images/image-tuananh.jpg\" class=\"img-profile circle responsive-img right\" materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Công chúa sữa chua\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">\n\t\t\t\t\t<span class=\"hide-on-small-only\">{{ 'FRIEND.F1.FIRST_NAME' | translate }}</span>\n        <span>{{ 'FRIEND.F1.LAST_NAME' | translate }}</span>\n        </span>\n        <p class=\"cyan-text text-lighten-4\">{{ 'FRIEND.F1.DESCRIPTION' | translate }}</p>\n      </div>\n      <div class=\"card-action\">\n        <a class=\"point\" onclick=\"Materialize.toast('Chưa cập nhật', 4000)\">{{ 'FRIEND.DETAIL' | translate }}</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col s12 m6\">\n    <div class=\"card small green darken-4\">\n      <img src=\"assets/images/image-dinhphuc.jpg\" class=\"img-profile circle responsive-img right\" materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Hoàng tử thằn lằn\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">\n\t\t\t\t\t<span class=\"hide-on-small-only\">{{ 'FRIEND.F2.FIRST_NAME' | translate }}</span>\n        <span>{{ 'FRIEND.F2.LAST_NAME' | translate }}</span>\n        </span>\n        <p class=\"green-text text-lighten-4\">{{ 'FRIEND.F2.DESCRIPTION' | translate }}</p>\n      </div>\n      <div class=\"card-action\">\n        <a class=\"point\" onclick=\"Materialize.toast('Chưa cập nhật', 4000)\">DETAIL</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col s12 m6 offset-m3\">\n    <div class=\"card small indigo draken-4\">\n      <img src=\"assets/images/image-tuyen.jpg\" class=\"img-profile circle responsive-img right\" materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"It't me\" />\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">\n\t\t\t\t\t<span class=\"hide-on-small-only\">{{ 'FRIEND.F3.FIRST_NAME' | translate }}</span>\n        <span>{{ 'FRIEND.F3.LAST_NAME' | translate }}</span>\n        </span>\n        <p>{{ 'FRIEND.F3.DESCRIPTION' | translate }}</p>\n      </div>\n      <div class=\"card-action\">\n        <a class=\"point\" onclick=\"Materialize.toast('Chưa cập nhật', 4000)\">{{ 'FRIEND.DETAIL' | translate }}</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col s12 m6\">\n    <div class=\"card small pink darken-4\">\n      <img src=\"assets/images/image-kimanh.jpg\" class=\"img-profile circle responsive-img right\" materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Bựa nương\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">\n\t\t\t\t\t<span class=\"hide-on-small-only\">{{ 'FRIEND.F4.FIRST_NAME' | translate }}</span>\n        <span>{{ 'FRIEND.F4.LAST_NAME' | translate }}</span>\n        </span>\n        <p class=\"pink-text text-lighten-1\">{{ 'FRIEND.F4.DESCRIPTION' | translate }}</p>\n      </div>\n      <div class=\"card-action\">\n        <a class=\"point\" onclick=\"Materialize.toast('Chưa cập nhật', 4000)\">{{ 'FRIEND.DETAIL' | translate }}</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col s12 m6\">\n    <div class=\"card small blue darken-4\">\n      <img src=\"assets/images/image-anhtuan.jpg\" class=\"img-profile circle responsive-img right\" materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"NaN\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">\n\t\t\t\t\t<span class=\"hide-on-small-only\">{{ 'FRIEND.F5.FIRST_NAME' | translate }}</span>\n        <span>{{ 'FRIEND.F5.LAST_NAME' | translate }}</span>\n        </span>\n        <p class=\"blue-text text-lighten-4\">{{ 'FRIEND.F5.DESCRIPTION' | translate }}</p>\n      </div>\n      <div class=\"card-action\">\n        <a class=\"point\" onclick=\"Materialize.toast('Chưa cập nhật', 4000)\">{{ 'FRIEND.DETAIL' | translate }}</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 726:
/***/ function(module, exports) {

module.exports = "<div>\n    <!--\n  <div parallax-container>\n    <div materialize=\"parallax\">\n      <img class=\"responsive-img\" src=\"assets/images/WP_20150118_001.jpg\"/>\n    </div>\n  </div> -->\n    <div class=\"parallax-container\">\n        <div class=\"container center-align\">\n            <h1 class=\"hoverable waves-effect waves-red blue-text text-accent-4\">\n              Nguyễn Gia Tuyến\n            </h1>\n            <p>\n                <strong class=\"hoverable grey-text text-darken-3 lighten-3 waves-effect waves-green\">STATISTICS MEAN NEVER HAVING TO SAY YOU'RE CERTAIN</strong>\n            </p>\n        </div>\n        <div materialize=\"parallax\">\n            <img src=\"assets/images/Cycle.jpeg\" />\n        </div>\n    </div>\n    <div class=\"section white\">\n        <!-- Trang web ca nhan cua toi -->\n        <!-- <div class=\"row container\">\n        <div class=\"progress light-green\">\n          <div class=\"indeterminate red darken-4\"></div>\n        </div>\n      </div> -->\n    </div>\n</div>\n<section>\n    <div materialize=\"carousel\" [materializeParams]=\"[{full_width: true}]\" class=\"carousel carousel-slider center\" data-indicators=\"true\">\n        <div class=\"carousel-item\">\n            <div class=\"col l3 m4 s6\">\n                <h2 class=\"text-img flow-text\">Bình minh ở Đồ Sơn</h2>\n                <img class=\"image responsive-img\" src=\"assets/images/WP_20150621_07_55_12_Pro.jpg\" />\n            </div>\n        </div>\n        <div class=\"carousel-item\">\n            <h2 class=\"text-img flow-text white-text\">Liên hoan tân niên 2015</h2>\n            <img class=\"image responsive-img\" src=\"assets/images/WP_20160123_07_42_08_Pro.jpg\" />\n        </div>\n        <div class=\"carousel-item\">\n            <!-- <img src=\"assets/images/WP_20150118_07_27_34_Pro.jpg\"/> -->\n            <h2 class=\"text-img flow-text\">Itbee team</h2>\n            <img class=\"image responsive-img\" src=\"assets/images/IMG_0586.jpg\" />\n        </div>\n    </div>\n</section>\n<section class=\"m-t m-b\">\n    <div class=\"col s12 m12 l12\">\n        <h1 class=\"m-l blue-text text-darken-4 light waves-effect waves-yellow\" translate=\"HOME.FRIEND.TITLE\"></h1>\n        <section>\n            <div class=\"parallax-container\">\n                <!-- <div materialize=\"parallax\"><img class=\"image-test\" src=\"assets/images/WP_20150619_12_51_36_Pro.jpg\"></div> -->\n                <div materialize=\"parallax\"><img class=\"image-test\" src=\"assets/images/weavesilk2.png\"></div>\n            </div>\n        </section>\n        <h1 class=\"m-l blue-text text-darken-4 light right-align m-r\" onclick=\"Materialize.fadeInImage('.image-test');\" ng-click=\"showAnimation();\" translate=\"HOME.FRIEND.TITLE\"></h1>\n        <div class=\"m flow-text right-align\">\n        </div>\n        <!-- <div class=\"row\">\n      <img class=\"responsive-img pull-right\" align=\"right\" src=\"assets/images/GemmaChan.png\" />\n    </div> -->\n        <section>\n            <div class=\"parallax-container\">\n                <div materialize=\"parallax\">\n                    <img src=\"assets/images/WP_20150118_001.jpg\">\n                    <!-- <img class=\"image-test\" src=\"assets/images/WP_20150117_07_34_42_Pro.jpg\"> -->\n                </div>\n                <img class=\"responsive-img\" align=\"right\" src=\"assets/images/GemmaChan.png\" />\n            </div>\n        </section>\n    </div>\n</section>\n<!-- <div class=\"row m\">\n  <div class=\"right\">\n    <div class=\"chip\">\n      <img src=\"assets/images/image-anhtuan.jpg\" alt=\"Anh Tuấn\"> Anh Tuấn\n    </div>\n    <div class=\"chip\">\n      <img src=\"assets/images/image-dinhphuc.jpg\" alt=\"Đình Phúc\"> Đình Phúc\n    </div>\n    <div class=\"chip\">\n      <img src=\"assets/images/image-kimanh.jpg\" alt=\"Kim Anh\"> Kim Anh\n    </div>\n    <div class=\"chip\">\n      <img src=\"assets/images/image-tuananh.jpg\" alt=\"Tuấn Ánh\"> Tuấn Ánh\n    </div>\n    <div class=\"chip\">\n      <img src=\"assets/images/image-tuyen.jpg\" alt=\"Tuấn Ánh\"> Còn nữa, đang cập nhật ...\n    </div>\n  </div>\n</div> -->\n<div class=\"container m flow-text blue-text text-darken-4\">\n    <h1>Ảnh lúc sinh viên</h1>\n</div>\n<section class=\"m-t\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col s4 m4 l4\">\n                <img materialize=\"materialbox\" class=\"responsive-img hoverable\" data-caption=\"Phượt Mộc Châu\" src=\"assets/images/WP_20150117_07_34_42_Pro.jpg\">\n            </div>\n            <div class=\"col s4 m4 l4\">\n                <img materialize=\"materialbox\" class=\"responsive-img hoverable\" data-caption=\"Karaoke\" src=\"assets/images/WP_20150307_07_34_42_Pro.jpg\">\n            </div>\n            <div class=\"col s4 m4 l4\">\n                <img materialize=\"materialbox\" class=\"responsive-img hoverable\" data-caption=\"Thư viện Tạ Quang Bửu năm nhất\" src=\"assets/images/mehust.jpg\">\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <div class=\"row col s12 m12 l12\">\n            <div class=\"progress amber darken-4\">\n                <div class=\"indeterminate light-green\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col s4 m4 l4\">\n                <img materialize=\"materialbox\" class=\"responsive-img hoverable\" data-caption=\"Khởi nghiệp cùng Kawai\" src=\"assets/images/kawai.jpg\">\n            </div>\n            <div class=\"col s4 m4 l4\">\n                <img materialize=\"materialbox\" class=\"responsive-img hoverable\" data-caption=\"Đồ Sơn Hải Phòng\" src=\"assets/images/WP_20150621_07_55_14_Pro.jpg\">\n            </div>\n            <div class=\"col s4 m4 l4\">\n                <img materialize=\"materialbox\" class=\"responsive-img hoverable\" data-caption=\"Team bê tráp cho a Trung\" src=\"assets/images/WP_20151123_07_18_57_Pro.jpg\">\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <div class=\"row col s12 m12 l12\">\n            <div class=\"progress lime darken-1\">\n                <div class=\"indeterminate\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col s4 m4 l4\">\n                <img materialize=\"materialbox\" class=\"responsive-img hoverable\" data-caption=\"Phượt Mộc Châu\" src=\"assets/images/WP_20150118_07_40_34_Pro.jpg\">\n            </div>\n            <div class=\"col s4 m4 l4\">\n                <img materialize=\"materialbox\" class=\"responsive-img hoverable\" data-caption=\"Ăn bún cùng với Ánh muội\" src=\"assets/images/WP_20151123_07_19_14_Pro.jpg\">\n            </div>\n            <div class=\"col s4 m4 l4\">\n                <img materialize=\"materialbox\" class=\"responsive-img hoverable\" data-caption=\"Ăn bún cùng với Phúc muội\" src=\"assets/images/WP_20151123_07_19_20_Pro.jpg\">\n            </div>\n        </div>\n    </div>\n</section>\n<section class=\"container\">\n    <div class=\"blue-text text-darken-4\">\n        <h4>Give me a message</h4>\n    </div>\n    <app-contact></app-contact>\n</section>\n"

/***/ },

/***/ 727:
/***/ function(module, exports) {

module.exports = "<header class=\"navbar-fixed\">\n    <nav>\n        <div class=\"nav-wrapper light-blue darken-4\">\n            <a routerLink=\"/cv\" routerLinkActive=\"active\" class=\"brand-logo waves-effect waves-light m-l\"><span class=\"light\">ng</span> - <span class=\"flow-text\">Tuyến</span></a>\n            <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\" materialize=\"sideNav\" [materializeParams]=\"[{menuWidth: 300, edge: 'left', closeOnClick: true, draggable: true}]\">\n                <i class=\"material-icons\">menu</i>\n            </a>\n            <ul class=\"right hide-on-med-and-down\">\n                <li class=\"light-blue darken-4 waves-effect waves-light\" materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Trang chủ\">\n                    <a routerLink=\"/layout/home\" routerLinkActive=\"active\">\n                        <i class=\"material-icons\">home</i>\n                        <!-- <svg style=\"width:25px;height:25px\" viewBox=\"0 0 24 24\">\n                            <path fill=\"#000000\" d=\"M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z\" />\n                        </svg> -->\n                    </a>\n                </li>\n                <li class=\"light-blue darken-3 waves-effect waves-light\" materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Kỹ năng\">\n                    <a routerLink=\"/layout/skill\" routerLinkActive=\"active\">\n                        <i class=\"material-icons\">wifi</i>\n                        <!-- <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n                            <path fill=\"#000000\" d=\"M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z\" />\n                        </svg> -->\n                    </a>\n                </li>\n                <li class=\"light-blue darken-2 waves-effect waves-light\" materialize=\"tooltip\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Dự án đã tham gia\">\n                    <a routerLink=\"/layout/project\" routerLinkActive=\"active\">\n                        <i class=\"material-icons\">dialpad</i>\n                        <!-- <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n                            <path fill=\"#000000\" d=\"M12,19A2,2 0 0,0 10,21A2,2 0 0,0 12,23A2,2 0 0,0 14,21A2,2 0 0,0 12,19M6,1A2,2 0 0,0 4,3A2,2 0 0,0 6,5A2,2 0 0,0 8,3A2,2 0 0,0 6,1M6,7A2,2 0 0,0 4,9A2,2 0 0,0 6,11A2,2 0 0,0 8,9A2,2 0 0,0 6,7M6,13A2,2 0 0,0 4,15A2,2 0 0,0 6,17A2,2 0 0,0 8,15A2,2 0 0,0 6,13M18,5A2,2 0 0,0 20,3A2,2 0 0,0 18,1A2,2 0 0,0 16,3A2,2 0 0,0 18,5M12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13M18,13A2,2 0 0,0 16,15A2,2 0 0,0 18,17A2,2 0 0,0 20,15A2,2 0 0,0 18,13M18,7A2,2 0 0,0 16,9A2,2 0 0,0 18,11A2,2 0 0,0 20,9A2,2 0 0,0 18,7M12,7A2,2 0 0,0 10,9A2,2 0 0,0 12,11A2,2 0 0,0 14,9A2,2 0 0,0 12,7M12,1A2,2 0 0,0 10,3A2,2 0 0,0 12,5A2,2 0 0,0 14,3A2,2 0 0,0 12,1Z\" />\n                        </svg> -->\n                    </a>\n                </li>\n                <li class=\"light-blue darken-1 waves-effect waves-light\">\n                    <a routerLink=\"/layout/friend\" routerLinkActive=\"active\">\n                        <i class=\"material-icons\">people</i>\n                        <!-- <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n                            <path fill=\"#000000\" d=\"M4.5,11A1.5,1.5 0 0,0 6,9.5A1.5,1.5 0 0,0 4.5,8A1.5,1.5 0 0,0 3,9.5A1.5,1.5 0 0,0 4.5,11M22.17,9.17C22.17,5.3 19.04,2.17 15.17,2.17A7,7 0 0,0 8.17,9.17C8.17,12.64 10.69,15.5 14,16.06V20H6V17H7V13A1,1 0 0,0 6,12H3A1,1 0 0,0 2,13V17H3V22H19V20H16V16.12C19.47,15.71 22.17,12.76 22.17,9.17Z\" />\n                        </svg> -->\n                    </a>\n                </li>\n            </ul>\n            <ul class=\"side-nav\" id=\"mobile-demo\">\n                <li><a class=\"waves-effect waves-blue\" routerLink=\"/layout/home\" routerLinkActive=\"active\">Trang chủ</a></li>\n                <li><a class=\"waves-effect waves-blue\" routerLink=\"/layout/skill\" routerLinkActive=\"active\">Kỹ năng</a></li>\n                <li><a class=\"waves-effect waves-blue\" routerLink=\"/layout/project\" routerLinkActive=\"active\">Dự án đã tham gia</a></li>\n                <li><a class=\"waves-effect waves-blue\" routerLink=\"/layout/friend\" routerLinkActive=\"active\">Thông tin</a></li>\n            </ul>\n        </div>\n    </nav>\n</header>\n<router-outlet></router-outlet>\n<footer class=\"page-footer light-blue darken-4\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col l3 s12\">\n                <h5 class=\"white-text\">\n                    <!-- <span>Auth</span> -->\n                    <span>{{ 'FOOTER.CONTENT.AUTH' | translate }}</span>\n                    <i class=\"material-icons\">fingerprint</i>\n                </h5>\n                <p class=\"waves-effect waves-light grey-text text-lighten-4\">\n                    {{ 'FOOTER.CONTENT.NAME' | translate }}\n                </p>\n            </div>\n            <div class=\"col l7 offset-l2 s12\">\n                <h5 class=\"waves-effect waves-light white-text\"> \n                {{ 'FOOTER.LINK.TITLE' | translate }}\n                <i class=\"material-icons\">school</i>\n                </h5>\n                <ul>\n                    <li class=\"waves-effect waves-light\">\n                        <a class=\"while-text bold\">{{ 'FOOTER.LINK.L1' | translate }}</a>\n                    </li>\n                    <li class=\"waves-effect waves-light\">\n                        <a class=\"while-text bold\">{{ 'FOOTER.LINK.L2' | translate }}</a>\n                    </li>\n                    <li class=\"waves-effect waves-light\">\n                        <a class=\"while-text bold\">{{ 'FOOTER.LINK.L3' | translate }}</a>\n                    </li>\n                    <li class=\"waves-effect waves-light\">\n                        <a class=\"while-text bold\">{{ 'FOOTER.LINK.L4' | translate }}</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"footer-copyright\">\n        <div class=\"container\">\n            <span>{{ 'FOOTER.COPYRIGHT.TEXT' | translate }}</span>\n            <a class=\"grey-text text-lighten-4 right waves-effect waves-light\">\n            {{ 'FOOTER.COPYRIGHT.REF' | translate }}\n            </a>\n        </div>\n    </div>\n</footer>\n"

/***/ },

/***/ 728:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <h3 class=\"flow-text center-align\">Các project đã tham gia</h3>\n  <div class=\"row\">\n    <div class=\"col s12\">\n      <ul materialize=\"tabs\" class=\"tabs\">\n        <li class=\"tab col s4\"><a class=\"active\" href=\"#bkinternship\">Bk Internship</a></li>\n        <li class=\"tab col s4\"><a href=\"#itbee\">Itbee social</a></li>\n        <li class=\"tab col s4\"><a href=\"#iot\">IoT BK Platform</a></li>\n      </ul>\n    </div>\n    <div id=\"bkinternship\" class=\"col s12\">\n      <div class=\"container\">\n        <h4>Quản lý thực tập hè</h4>\n        <p>Thời gian: 7/2015 - 9/2015</p>\n        <p>Hướng dẫn: TS. Trần Việt Trung</p>\n        <p>Cộng tác: Bùi Tuấn Ánh</p>\n        <p>Giới thiệu: gợi ý ghép cặp sinh viên và công ty theo từ khóa kỹ năng</p>\n        <p>Xuất bản: <a href>ttdn.giasan.vn</a></p>\n      </div>\n      <img src=\"assets/images/img_bkinternship.jpeg\" class=\"responsive-img center-block\" />\n    </div>\n    <div id=\"itbee\" class=\"col s12\">\n      <div class=\"container\">\n        <h4>Mạng xã hội việc làm</h4>\n        <p>Thời gian: 12/2015 - 7/2016</p>\n        <p>Hướng dẫn: TS. Trần Việt Trung</p>\n        <p>Cộng tác: Bùi Tuấn Ánh, Trần Hữu Đạt, Đỗ Văn Diện</p>\n        <p>Giới thiệu: đưa ra recommend cho các bee với những jobs phù hợp nhất</p>\n        <p>Xuất bản: <a href=\"http://itbee.vn\">itbee.vn</a></p>\n      </div>\n      <img src=\"assets/images/itbee.png\" class=\"responsive-img center-block\" />\n    </div>\n    <div id=\"iot\" class=\"col s12\">\n      <div class=\"container\">\n        <h4>Thử nghiệm hệ thống OM2M</h4>\n        <p>Thời gian: 4/2016 - 6/2016</p>\n        <p>Hướng dẫn: TS. Ngô Quỳnh Thu, TS. Trần Hải Anh</p>\n        <p>Cộng tác: Nhóm sinh viên K56</p>\n        <p>Giới thiệu: thử nghiệm hệ thống om2m với các ứng dụng smart phone và các sensor thu thập dữ liệu</p>\n        <p>Xuất bản: <a href=\"http://anhtranhai.ddns.net:8080/tuyenng\">anhtranhai.ddns.net:8080/tuyenng</a></p>\n      </div>\n      <img src=\"assets/images/bkiot.png\" class=\"responsive-img center-block\" />\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 729:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"flow-text m-l\">\n    <h1 class=\"pink-text text-darken-4\" translate=\"SKILL\">SKILL</h1>\n  </div>\n</div>\n\n<div [ngGrid]=\"gridConfig\">\n\n  <div *ngFor=\"let box of boxes; let i = index\" [(ngGridItem)]=\"box.config\">\n    <div class=\"handle\">Widget {{box.id}}\n      <div class=\"box-header-btns pull-right\">\n        row: {{box.config.row}}\n        col: {{box.config.col}}\n        sizex: {{box.config.sizex}}\n        sizey: {{box.config.sizey}}\n      </div>\n      <img src=\"assets/images/playframework.png\" class=\"responsive-img\" />\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 778:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(411);


/***/ }

},[778]);
//# sourceMappingURL=main.bundle.map