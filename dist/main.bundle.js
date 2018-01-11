webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_log_in_log_in_component__ = __webpack_require__("../../../../../src/app/auth/log-in/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pet_pet_schedule_pet_schedule_component__ = __webpack_require__("../../../../../src/app/pet/pet-schedule/pet-schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pet_pet_detail_pet_detail_component__ = __webpack_require__("../../../../../src/app/pet/pet-detail/pet-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pet_pet_list_pet_list_component__ = __webpack_require__("../../../../../src/app/pet/pet-list/pet-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__terms_terms_component__ = __webpack_require__("../../../../../src/app/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_logout_logout_component__ = __webpack_require__("../../../../../src/app/auth/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__history_history_component__ = __webpack_require__("../../../../../src/app/history/history.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__auth_log_in_log_in_component__["a" /* LogInComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__auth_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_4__faq_faq_component__["a" /* FaqComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'pets', component: __WEBPACK_IMPORTED_MODULE_8__pet_pet_list_pet_list_component__["a" /* PetListComponent */] },
    { path: 'pet-detail', component: __WEBPACK_IMPORTED_MODULE_7__pet_pet_detail_pet_detail_component__["a" /* PetDetailComponent */] },
    { path: 'schedule/:id', component: __WEBPACK_IMPORTED_MODULE_6__pet_pet_schedule_pet_schedule_component__["a" /* PetScheduleComponent */] },
    { path: 'terms', component: __WEBPACK_IMPORTED_MODULE_10__terms_terms_component__["a" /* TermsComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_11__auth_logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'history', component: __WEBPACK_IMPORTED_MODULE_12__history_history_component__["a" /* HistoryComponent */] }
    // {path: '*', redirectTo: ''},
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_log_in_log_in_component__ = __webpack_require__("../../../../../src/app/auth/log-in/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__faq_faq_component__ = __webpack_require__("../../../../../src/app/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pet_pet_component__ = __webpack_require__("../../../../../src/app/pet/pet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pet_pet_schedule_pet_schedule_component__ = __webpack_require__("../../../../../src/app/pet/pet-schedule/pet-schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pet_pet_detail_pet_detail_component__ = __webpack_require__("../../../../../src/app/pet/pet-detail/pet-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pet_pet_list_pet_list_component__ = __webpack_require__("../../../../../src/app/pet/pet-list/pet-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_sort_by_pipe__ = __webpack_require__("../../../../../src/app/pipes/sort-by.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__terms_terms_component__ = __webpack_require__("../../../../../src/app/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_pets_service__ = __webpack_require__("../../../../../src/app/services/pets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pet_pet_service__ = __webpack_require__("../../../../../src/app/pet/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__auth_logout_logout_component__ = __webpack_require__("../../../../../src/app/auth/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__history_history_component__ = __webpack_require__("../../../../../src/app/history/history.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__auth_auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_8__auth_log_in_log_in_component__["a" /* LogInComponent */],
            __WEBPACK_IMPORTED_MODULE_9__auth_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_10__faq_faq_component__["a" /* FaqComponent */],
            __WEBPACK_IMPORTED_MODULE_11__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pet_pet_component__["a" /* PetComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pet_pet_schedule_pet_schedule_component__["a" /* PetScheduleComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pet_pet_detail_pet_detail_component__["a" /* PetDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pet_pet_list_pet_list_component__["a" /* PetListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_sort_by_pipe__["a" /* SortByPipe */],
            __WEBPACK_IMPORTED_MODULE_18__terms_terms_component__["a" /* TermsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_23__auth_logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_24__history_history_component__["a" /* HistoryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_20__services_pets_service__["a" /* PetsService */], __WEBPACK_IMPORTED_MODULE_21__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_22__pet_pet_service__["a" /* PetService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  auth works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AuthComponent);

//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// TODO: Add tokens to this service.
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.apipath = '/api/user';
    }
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken
            })
        });
    };
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
    };
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.apipath + '/auth/register', user).map(function (res) { return res.json(); });
    };
    AuthService.prototype.saveHistory = function (history) {
        console.log("about to save history");
        return this.http.post('/api/history', history).map(function (res) { return res.json(); });
    };
    AuthService.prototype.login = function (user) {
        // console.log("in auth service");
        return this.http.post(this.apipath, user).map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.storeUserData = function (user) {
        localStorage.setItem("user", JSON.stringify(user));
        this.user = user;
    };
    AuthService.prototype.getProfile = function (id) {
        this.createAuthenticationHeaders();
        return this.http.get(this.apipath + '/profile', this.options).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.getCurrentUser = function () {
        // let user:any = localStorage.getItem("user");
        var user = JSON.parse(localStorage.getItem("user"));
        console.log(typeof (user));
        var result = {
            "username": "",
            "firstName": "",
            "lastName": "",
            "email": "",
            "_id": ""
        };
        if (user) {
            result = user;
        }
        return result;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/log-in/log-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\r\n  background-image: url(\"/assets/img/petwalk1.jpg\");\r\n  background-size: cover;\r\n  height: calc(100vh - 50px);\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#formholder {\r\n  background-color: rgba(102,102,102, 0.5);\r\n  position: fixed;\r\n  top: calc(50vh - 136px);\r\n}\r\n\r\nform {\r\n  margin: 20px;\r\n}\r\n\r\n.btn {\r\n  margin-top: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/log-in/log-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-sm-offset-4\" id=\"formholder\">\r\n      <form class=\"form-group\" [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\r\n        <h3 class=\"page-header\">Log in</h3>\r\n        <label for=\"email\">Email</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"email\" formControlName=\"email\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\">\r\n        <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Log In\">\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/log-in/log-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogInComponent = (function () {
    function LogInComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.createForm();
    }
    LogInComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
    };
    LogInComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['password'].disable();
    };
    LogInComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['password'].enable();
    };
    LogInComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableForm();
        // console.log("successfully clicked button");
        // console.log("email from form " + this.form.get('email').value);
        var user = {
            email: this.form.get('email').value,
            password: this.form.get('password').value
        };
        // console.log("user email is: " + user.email);
        this.authService.login(user).subscribe(function (data) {
            // console.log("auth service response " + data);
            if (data) {
                _this.authService.storeUserData(data);
                // console.log('data was found');
            }
            else {
                console.log('no data here');
            }
            _this.router.navigate(['/profile']);
        });
        console.log('b');
        this.processing = false;
        this.form.reset();
        this.enableForm();
    };
    LogInComponent.prototype.ngOnInit = function () {
    };
    return LogInComponent;
}());
LogInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-log-in',
        template: __webpack_require__("../../../../../src/app/auth/log-in/log-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/log-in/log-in.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LogInComponent);

var _a, _b, _c;
//# sourceMappingURL=log-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\r\n  background-image: url(\"/assets/img/petwalk1.jpg\");\r\n  background-size: cover;\r\n  height: calc(100vh - 50px);\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\np.centerbig  {\r\n  font-size: 3em;\r\n  text-align: center;\r\n  font-weight: bolder;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <p class=\"centerbig\">\r\n    <br>\r\n    Thank you for visiting<br>\r\n    Come back soon.\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(authService) {
        this.authService = authService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authService.logout();
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/auth/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LogoutComponent);

var _a;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\r\n  background-image: url(\"/assets/img/petwalk1.jpg\");\r\n  background-size: cover;\r\n  height: calc(100vh - 50px);\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.form-section {\r\n\tpadding: 60px;\r\n}\r\n\r\n.fix {\r\n\tpadding-left: 0px;\r\n\tpadding-right: 0px;\r\n}\r\n\r\n\r\n.username input {\r\n\twidth: 100%;\r\n\tpadding: 0 auto;\r\n}\r\n\r\n.email {\r\n\tpadding: 0 auto;\r\n}\r\n\r\n.email input {\r\n\twidth: 100%;\r\n}\r\n\r\n.password {\r\n\tpadding: 0 auto;\r\n}\r\n\r\n.password input {\r\n\twidth: 100%;\r\n}\r\n\r\n.phonenumber {\r\n\tpadding: 0 auto;\r\n}\r\n\r\n.phonenumber input {\r\n\twidth: 100%;\r\n}\r\n\r\n.name {\r\n\tpadding: 0 auto;\r\n}\r\n\r\n.namesave {\r\n\tpadding: 0 auto;\r\n\tmargin: 0 auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row form-section\">\r\n\t\t<div class=\"col-md-6 col-md-offset-3 fix\">\r\n\t\t\t<form class=\"form-group\" [formGroup]=\"form\" (submit)=\"onCreateSubmit()\">\r\n\t\t\t\t\t<div class=\"row email\">\r\n\t\t\t\t\t\t<label>Email</label>\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"email\" id=\"emailInput\" placeholder=\"Username\" name=\"email\" formControlName=\"email\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row username\">\r\n\t\t\t\t\t\t<label>Usernanme</label>\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"email\" id=\"emailInput\" placeholder=\"Username\" name=\"username\" formControlName=\"username\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row name\">\r\n\t\t\t\t\t\t<div class=\"col-xs-6 namesave\">\r\n\t\t\t\t\t\t\t<label> First Name </label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-6 namesave\">\r\n\t\t\t\t\t\t\t<label> Last Name </label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-6 namesave\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"firstName\" id=\"firstNameInput\" placeholder=\"First Name\" name=\"firstname\" formControlName=\"firstname\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-6 namesave\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"lastName\" id=\"lastNameInput\" placeholder=\"Last Name\" name=\"lastname\" formControlName=\"lastname\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row phonenumber\">\r\n\t\t\t\t\t\t<label>Phone Number</label>\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"phoneNumber\" id=\"phoneNumberInput\" placeholder=\"(123)4567890\" name=\"phonenumber\" formControlName=\"phonenumber\">\r\n\t\t\t\t\t\t<small id=\"emailHelp\" class=\"form-text text-muted\"> Optional </small>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row password\">\r\n\t\t\t\t\t\t<label>Password</label>\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" formControlName=\"password\">\r\n\t\t\t\t\t\t<small id=\"emailHelp\" class=\"form-text text-muted\"> Password must be (3-16) containing only letter, digits and underscores.</small>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row password\">\r\n\t\t\t\t\t\t<label>Re-type Password</label>\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" id=\"passwordMatch\" name=\"repassword\" formControlName=\"repassword\">\r\n\t\t\t\t\t\t<small id=\"emailHelp\" class=\"form-text text-muted\"> Password must match.</small>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-md-offset-9\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-light\" value=\"Create\">Create Account</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.createForm();
    }
    SignupComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            firstname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            phonenumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            repassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    };
    SignupComponent.prototype.onCreateSubmit = function () {
        var _this = this;
        console.log("Got here");
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            firstname: this.form.get('firstname').value,
            lastname: this.form.get('lastname').value,
            phonenumber: this.form.get('phonenumber').value,
            password: this.form.get('password').value,
            repassword: this.form.get('repassword').value
        };
        this.authService.registerUser(user).subscribe(function (data) {
            console.log(data);
            if (data == "0") {
                _this.router.navigate(['/']);
            }
            else if (data == "1") {
                ;
            }
            else if (data == "2") {
                ;
            }
            else if (data == "3") {
                ;
            }
            else if (data == "4") {
                ;
            }
            else if (data == "5") {
                ;
            }
            else {
                _this.router.navigate(['/']);
            }
        });
        console.log(user);
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/auth/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dog {\r\n   margin: 20px;\r\n}\r\n\r\nhr {\r\n  border-top: 5px solid #a0a09d;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"dog\">\r\n    <div class=\"row placeholders text-center\">\r\n      <div class=\"col-xs-2\">&nbsp;</div>\r\n      <div class=\"col-xs-8\">\r\n        <img class=\"img-responsive center-block\" width=\"100\" src=\"../../assets/img/QuestioningDog.jpg\">\r\n      </div>\r\n      <div class=\"col-xs-2\">&nbsp;</div>\r\n      <br>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row placeholders text-center \">\r\n    <div class=\"col-xs-2\">&nbsp;</div>\r\n    <div class=\"col-xs-4\">Questions</div>\r\n    <div class=\"col-xs-4\">Answers</div>\r\n    <div class=\"col-xs-2\">&nbsp;</div>\r\n    <br>\r\n    <hr>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row placeholders text-center\" *ngFor=\"let f of faqItems\">\r\n    <div class=\"col-xs-2\">&nbsp;</div>\r\n    <div class=\"col-xs-4\">{{f.question}}</div>\r\n    <div class=\"col-xs-4\">{{f.answer}}</div>\r\n    <div class=\"col-xs-2\">&nbsp;</div>\r\n    <br>\r\n    <hr>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__faqRecord_model__ = __webpack_require__("../../../../../src/app/faq/faqRecord.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqComponent = (function () {
    function FaqComponent() {
        this.title = 'FAQ';
        this.faqItems = Array();
    }
    FaqComponent.prototype.ngOnInit = function () {
        this.initQA();
    };
    FaqComponent.prototype.initQA = function () {
        this.faqItems.push(new __WEBPACK_IMPORTED_MODULE_1__faqRecord_model__["a" /* faqRecord */](1, 'How does the service work?', 'You first find a pet, and then reserve the pet for an activity.'));
        this.faqItems.push(new __WEBPACK_IMPORTED_MODULE_1__faqRecord_model__["a" /* faqRecord */](2, 'How much does this service cost?', '$0.00'));
    };
    return FaqComponent;
}());
FaqComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-faq',
        template: __webpack_require__("../../../../../src/app/faq/faq.component.html"),
        styles: [__webpack_require__("../../../../../src/app/faq/faq.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FaqComponent);

//# sourceMappingURL=faq.component.js.map

/***/ }),

/***/ "../../../../../src/app/faq/faqRecord.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return faqRecord; });
/**
 * Created by jim on 10/3/17.
 */
var faqRecord = (function () {
    function faqRecord(num, q, a) {
        this.num = num;
        this.question = q;
        this.answer = a;
    }
    return faqRecord;
}());

//# sourceMappingURL=faqRecord.model.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n  font-size: x-small;\r\n  font-style: italic;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p align=\"center\">\r\n  <br>\r\n  <a href=\"/terms\">Terms of Service</a>\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/history/history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-1\"></div>\r\n  <div class=\"col-xs-10\">\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <th>Pet</th>\r\n        <th>Date</th>\r\n        <th>Activity</th>\r\n        <th>Rate</th>\r\n      </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n\r\n      <tr scope=\"row\" *ngFor=\"let h of history\">\r\n        <td>{{h.petname}}</td>\r\n        <td>{{h.date}}</td>\r\n        <td>{{h.activity}}</td>\r\n        <td>{{h.rating}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <div class=\"col-xs-1\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryComponent = (function () {
    function HistoryComponent(authService, http) {
        this.authService = authService;
        this.http = http;
        this.username = '';
        this.userid = '';
        this.history = []; // [IHistory];
        this.apiPath = '/api';
        //
    }
    HistoryComponent.prototype.ngOnInit = function () {
        if (this.userloggedin()) {
            this.loadHistoryForUser();
        }
    };
    HistoryComponent.prototype.loadHistoryForUser = function () {
        var _this = this;
        this.apiPath = '/api/history/';
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
                'Content-Type': 'application/json',
            })
        });
        var api = this.apiPath + this.userid;
        return this.http.get(api, this.options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.dir(data);
            _this.history = data;
        });
    };
    // Determine if a user is logged in.
    // Return true if logged in.
    HistoryComponent.prototype.userloggedin = function () {
        var result = false;
        this.username = '';
        this.userid = '';
        var currUser = this.authService.getCurrentUser();
        var user = currUser.username;
        var id = currUser.id;
        if (user.length > 0) {
            this.username = user;
            this.userid = id;
            result = true;
        }
        return result;
    };
    return HistoryComponent;
}());
HistoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-history',
        template: __webpack_require__("../../../../../src/app/history/history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/history/history.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object])
], HistoryComponent);

var _a, _b;
//# sourceMappingURL=history.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\r\n  background-image: url(\"/assets/img/petwalk1.jpg\");\r\n  background-size: cover;\r\n  height: calc(100vh - 50px);\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n  margin-bottom: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"/\">{{ title }}</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li *ngFor=\"let m of items\">\r\n          <a href=\"{{ m.path }}\">{{ m.name }}</a>\r\n        </li>\r\n      </ul>\r\n    </div><!--/.nav-collapse -->\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(authService) {
        this.authService = authService;
        this.title = 'Pet-Date';
        this.items = Array();
        this.loggedin = null;
    }
    MenuComponent.prototype.ngOnInit = function () {
        console.log("a");
        this.loggedin = this.authService.getCurrentUser();
        console.log(this.loggedin);
        console.log("b");
        this.items.push({ name: 'home', path: '/' });
        this.items.push({ name: 'pets', path: '/pets' });
        this.items.push({ name: 'faq', path: '/faq' });
        console.log("c");
        console.log(this.loggedin.username == "");
        if (this.loggedin.username == "") {
            this.items.push({ name: 'login', path: '/login' });
            this.items.push({ name: 'signup', path: '/register' });
        }
        else {
            this.items.push({ name: 'profile', path: '/profile' });
            this.items.push({ name: 'logout', path: '/logout' });
        }
        ;
        console.log(this.loggedin);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/pet/pet-detail/pet-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 40px;\r\n}\r\n.photo {\r\n  padding: 20px;\r\n}\r\n\r\nbutton {\r\n  background-color: aqua;\r\n  padding: 10px;\r\n  margin: 20px;\r\n  font-size: 18px;\r\n}\r\n\r\np {\r\n  margin-top: 20px;\r\n  font-size: 18px;\r\n  font-family: sans-serif;\r\n  font-weight: 20;\r\n  padding-left: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pet/pet-detail/pet-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Pet Detail</h1>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <hr>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"pet-1\">\r\n      <div class=\"col-sm-6 img-responsive\">\r\n        <div class=\"photo\">\r\n          <img  src=\"{{pet.photo}}\" width=\"200\" >\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <p>Name: {{pet.name}}</p>\r\n        <p>Status: {{pet.state}}</p>\r\n        <p>Rating: {{pet.rating}}</p>\r\n        <p>Energy: {{pet.energy}}</p>\r\n        <a class=\"btn btn-primary\" href=\"/schedule/{{pet.id}}\">Schedule a Walk</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <hr>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 img-responsive\">\r\n      <div class=\"photo\">\r\n        <img src=\"http://via.placeholder.com/200x200\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <p>Walked by: fae</p>\r\n      <p>Date:  2/2/16</p>\r\n      <p>Activity: Run</p>\r\n      <p>Rating: 5</p>\r\n      <p>fae's Notes: We had a great time. Pet was friendly and somewhat energetic.</p>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pet/pet-detail/pet-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pets_service__ = __webpack_require__("../../../../../src/app/services/pets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pet_service__ = __webpack_require__("../../../../../src/app/pet/pet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PetDetailComponent = (function () {
    function PetDetailComponent(petsService, petService, authService) {
        this.petsService = petsService;
        this.petService = petService;
        this.authService = authService;
        this.loggedin = false;
        this.pet_id = "";
        this.pet = null;
    }
    PetDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedin = this.authService.getCurrentUser();
        // get selected pet_id from local storage, and then load from db.
        this.pet_id = localStorage.getItem('pet_id');
        console.log('X' + this.pet_id);
        this.petService.getOnePet(this.pet_id)
            .subscribe(function (data) {
            console.log('petService.getOnePet return');
            _this.pet = data;
        });
    };
    return PetDetailComponent;
}());
PetDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pet-detail',
        template: __webpack_require__("../../../../../src/app/pet/pet-detail/pet-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pet/pet-detail/pet-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_pets_service__["a" /* PetsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pets_service__["a" /* PetsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pet_service__["a" /* PetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], PetDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=pet-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/pet/pet-list/pet-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 40px;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/*.table>tbody>tr>td {\r\n  font-size: 1.25em;\r\n  /width: 100px;/\r\n  vertical-align: middle;\r\n  text-align: center;\r\n}*/\r\n\r\nth, td {\r\n  font-size: 15px;\r\n  text-align: center;\r\n}\r\n\r\n.image {\r\n  width: 200px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pet/pet-list/pet-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  {{loggedin.username}}\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-10 col-xs-offset-1\">\r\n      <h1 class=\"page-header\">Available Pets</h1>\r\n      <div class=\"col-xs-12\" *ngIf=\"!allPets\">No pets currently available.</div>\r\n      <div class=\"col-sm-12\" *ngIf=\"allPets\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-body\">\r\n            <div class=\"col-sm-4\">\r\n              <label for=\"sort-field\">Sort By</label>\r\n              <select\r\n                class=\"form-control\"\r\n                name=\"sort-field\"\r\n                id=\"sort-field\"\r\n                [(ngModel)]=\"sortField\">\r\n                <option\r\n                  *ngFor=\"let field of sortFields\"\r\n                  [value]=\"field\">\r\n                    {{ field }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <label for=\"sort-direction\">Sort Direction</label>\r\n              <div>\r\n                <button\r\n                  class=\"btn btn-primary\"\r\n                  [ngClass]=\"{'btn-success': sortDirection == 'asc'}\"\r\n                  (click)=\"sortDirection = 'asc'\">\r\n                  Asc\r\n                </button>\r\n                <button\r\n                  class=\"btn btn-primary\"\r\n                  [ngClass]=\"{'btn-success': sortDirection == 'desc'}\"\r\n                  (click)=\"sortDirection = 'desc'\">\r\n                  Desc\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n<!-- List all pets if there are pets -->\r\n      <table class=\"table\" *ngIf=\"allPets\">\r\n        <thead>\r\n          <th></th>\r\n          <th>Name</th>\r\n          <th>ID</th>\r\n          <th>Type</th>\r\n          <th>Size</th>\r\n          <th>Energy Level</th>\r\n          <th>Age</th>\r\n          <th>Rating</th>\r\n          <th>View Pet</th>\r\n          <th>Schedule</th>\r\n        </thead>\r\n        <tr *ngFor=\"let pet of allPets | sortBy: [sortField, sortDirection]\">\r\n          <td class=\"image\"><img src=\"{{pet.photo}}\"></td>\r\n          <td><b>{{pet.name}}</b></td>\r\n          <td>{{pet.id}}</td>\r\n          <td>{{pet.type}}</td>\r\n          <td>{{pet.size}}</td>\r\n          <td>{{pet.energy}}</td>\r\n          <td>{{pet.age}}</td>\r\n          <td>{{pet.rating}}</td>\r\n          <!--<td><a href=\"http://localhost:5000/pet-detail\">View Pet</a></td>-->\r\n          <td><button (click)=\"onClickViewPet(pet._id)\">View Pet</button>\r\n          <td><a href=\"/schedule/{{pet._id}}\" *ngIf=\"loggedin.username\">Schedule</a></td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pet/pet-list/pet-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pets_service__ = __webpack_require__("../../../../../src/app/services/pets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pet_service__ = __webpack_require__("../../../../../src/app/pet/pet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PetListComponent = (function () {
    function PetListComponent(petsService, petService, authService, router) {
        this.petsService = petsService;
        this.petService = petService;
        this.authService = authService;
        this.router = router;
        this.sortFields = ["type", "size", "energy", "age", "rating"];
        this.loggedin = false;
    }
    PetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedin = this.authService.getCurrentUser();
        this.petService.getPets()
            .subscribe(function (allPets) {
            _this.allPets = allPets;
        });
        // console.log(this.allPets[0])
    };
    PetListComponent.prototype.onClickViewPet = function (pet_id) {
        // Save id to local storage, and then call pet detail.
        localStorage.setItem('pet_id', pet_id);
        this.router.navigate(['/pet-detail']);
        console.log(pet_id);
    };
    return PetListComponent;
}());
PetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pet-list',
        template: __webpack_require__("../../../../../src/app/pet/pet-list/pet-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pet/pet-list/pet-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_pets_service__["a" /* PetsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pets_service__["a" /* PetsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pet_service__["a" /* PetService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PetListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=pet-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/pet/pet-schedule/pet-schedule.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n  width: 200px;\r\n  height: 200px;\r\n  border: 1px solid black;\r\n  padding: 5px;\r\n}\r\n\r\n.petname {\r\n  font-weight: bold;\r\n  color: blue;\r\n}\r\n\r\n.panel {\r\n  margin-top: 50px;\r\n  font-size: 1.5em;\r\n  padding: 10px;\r\n}\r\n\r\n.green {\r\n  color: green;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pet/pet-schedule/pet-schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <h1 class=\"page-header\">Schedule a Pet Date</h1>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <h3>You have selected <span class=\"petname\">{{pet.name}}</span></h3><br>\r\n      <img src=\"{{pet.photo}}\">\r\n    </div>\r\n    <form class=\"col-md-4 col-md-offset-1 form-group\" #scheduleForm=\"ngForm\" (submit)=\"onLoginSubmit(date, activity)\">\r\n      <label for=\"date\">Choose a date:</label><br>\r\n      <input type=\"date\" name=\"date\" class=\"form-control\" [(ngModel)]=\"date\">\r\n      <!-- <label for=\"time\">Choose a time:</label><br>\r\n      <input type=\"time\" name=\"time\" class=\"form-control\" [(ngModel)]=\"time\"> -->\r\n      <label for=\"activity\">Choose an activity:</label><br>\r\n      <select name=\"activity\" class=\"form-control\" [(ngModel)]=\"activity\">\r\n        <option value=\"Grooming\" >Grooming</option>\r\n        <option value=\"Pet\">Pet</option>\r\n        <option value=\"Play\">Play</option>\r\n        <option value=\"Reading\">Reading</option>\r\n        <option value=\"Walk\" *ngIf=\"pet.type == 'Dog'\">Walk</option>\r\n      </select><br>\r\n      <input type=\"submit\" class=\"btn btn-primary pull-right\">\r\n    </form>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"panel panel-default\">\r\n        <p>You have selected {{pet.name}} with an activity of <span class=\"green\">{{activity}}</span> on <span class=\"green\">{{date | date:fullDate}}</span>.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pet/pet-schedule/pet-schedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetScheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pet_service__ = __webpack_require__("../../../../../src/app/pet/pet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PetScheduleComponent = (function () {
    function PetScheduleComponent(petService, authService, route, router) {
        this.petService = petService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.pet_id = "";
    }
    PetScheduleComponent.prototype.onLoginSubmit = function (date, activity) {
        console.log("submitting form");
        var history = {
            pet_id: this.pet.id,
            user_id: this.loggedin.id,
            petname: this.pet.name,
            date: date,
            activity: activity,
            rating: ""
        };
        console.log(history);
        this.authService.saveHistory(history)
            .subscribe(function (data) {
            console.log(data);
        });
        this.router.navigate(['/profile']);
    };
    PetScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedin = this.authService.getCurrentUser();
        this.pet_id = this.route.snapshot.params['id'];
        this.petService.getOnePet(this.pet_id)
            .subscribe(function (data) {
            _this.pet = data;
        });
    };
    return PetScheduleComponent;
}());
PetScheduleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pet-schedule',
        template: __webpack_require__("../../../../../src/app/pet/pet-schedule/pet-schedule.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pet/pet-schedule/pet-schedule.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__pet_service__["a" /* PetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__pet_service__["a" /* PetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PetScheduleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=pet-schedule.component.js.map

/***/ }),

/***/ "../../../../../src/app/pet/pet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pet/pet.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  pet works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/pet/pet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PetComponent = (function () {
    function PetComponent() {
    }
    PetComponent.prototype.ngOnInit = function () {
    };
    return PetComponent;
}());
PetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pet',
        template: __webpack_require__("../../../../../src/app/pet/pet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pet/pet.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PetComponent);

//# sourceMappingURL=pet.component.js.map

/***/ }),

/***/ "../../../../../src/app/pet/pet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PetService = (function () {
    function PetService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.apipath = '/api/pet';
    }
    PetService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken();
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken
            })
        });
    };
    PetService.prototype.getPets = function () {
        //this.createAuthenticationHeaders();
        return this.http.get(this.apipath + 's', this.options).map(function (res) { return res.json(); });
    };
    PetService.prototype.getOnePet = function (id) {
        //this.createAuthenticationHeaders();
        var api = this.apipath + '/' + id;
        console.log('service.getOnePet: ' + api);
        return this.http.get(api, this.options).map(function (res) { return res.json(); });
    };
    PetService.prototype.postComment = function (id, comment) {
        //this.createAuthenticationHeaders();
        var petData = { id: id, review: comment };
        return this.http.post(this.apipath + 'pets/comment', petData, this.options).map(function (res) { return res.json(); });
    };
    PetService.prototype.schedulePet = function (id, dateSched) {
        //this.createAuthenticationHeaders();
        var petData = { id: id, dateSched: dateSched };
        return this.http.post(this.apipath + 'pets/schedule', petData, this.options).map(function (res) { return res.json(); });
    };
    return PetService;
}());
PetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object])
], PetService);

var _a, _b;
//# sourceMappingURL=pet.service.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/sort-by.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortByPipe = (function () {
    function SortByPipe() {
    }
    SortByPipe.prototype.transform = function (array, args) {
        if (array) {
            var sortField_1 = args[0];
            var sortDirection = args[1];
            var modifier_1 = 1;
            if (sortDirection === 'desc') {
                modifier_1 = -1;
            }
            array.sort(function (a, b) {
                if (a[sortField_1] < b[sortField_1]) {
                    return -1 * modifier_1;
                }
                else if (a[sortField_1] > b[sortField_1]) {
                    return 1 * modifier_1;
                }
                else {
                    return 0;
                }
            });
            return array;
        }
    };
    return SortByPipe;
}());
SortByPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'sortBy'
    })
], SortByPipe);

//# sourceMappingURL=sort-by.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/pets.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetsService = (function () {
    function PetsService(http) {
        this.http = http;
        this.apipath = '/api/pets';
        console.log('petsService');
    }
    PetsService.prototype.getPets = function () {
        return this.http.get(this.apipath)
            .map(function (res) { return res.json(); });
    };
    return PetsService;
}());
PetsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PetsService);

var _a;
//# sourceMappingURL=pets.service.js.map

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.indented {\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n  margin-top: 5%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"indented\">\r\n\r\n<h1>Terms of Service (\"Terms\")</h1>\r\n\r\n\r\n<p>Last updated: October 13, 2017</p>\r\n\r\n\r\n<p>Please read these Terms of Service (\"Terms\", \"Terms of Service\") carefully before using the pet-date.com website (the \"Service\") operated by pet date (\"us\", \"we\", or \"our\").</p>\r\n\r\n<p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>\r\n\r\n<p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. <a href=\"https://termsfeed.com/terms-service/\">Terms of Service created by TermsFeed</a> for pet date.</p>\r\n\r\n\r\n<h2>Accounts</h2>\r\n\r\n<p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>\r\n\r\n<p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>\r\n\r\n<p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>\r\n\r\n\r\n<h2>Links To Other Web Sites</h2>\r\n\r\n<p>Our Service may contain links to third-party web sites or services that are not owned or controlled by pet date.</p>\r\n\r\n<p>pet date has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that pet date shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>\r\n\r\n<p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>\r\n\r\n\r\n<h2>Termination</h2>\r\n\r\n<p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>\r\n\r\n<p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>\r\n\r\n<p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>\r\n\r\n<p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>\r\n\r\n<p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>\r\n\r\n\r\n<h2>Governing Law</h2>\r\n\r\n<p>These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.</p>\r\n\r\n<p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>\r\n\r\n\r\n<h2>Changes</h2>\r\n\r\n<p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>\r\n\r\n<p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>\r\n\r\n\r\n<h2>Contact Us</h2>\r\n\r\n<p>If you have any questions about these Terms, please contact us.</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    return TermsComponent;
}());
TermsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-terms',
        template: __webpack_require__("../../../../../src/app/terms/terms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/terms/terms.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TermsComponent);

//# sourceMappingURL=terms.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 40px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<!--Row with username & email on Left, and Picture on right.-->\r\n<div class=\"row\">\r\n  <div class=\"col-xs-1\"></div>\r\n  <div class=\"col-xs-6\">\r\n    <br>\r\n    <!--Title Here-->\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <h1>User Profile</h1>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <!--Username-->\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-4\">Username</div>\r\n      <div class=\"col-xs-8\">\r\n        <input type=\"text\" placeholder=\"User Name\" value=\"{{username}}\" >\r\n      </div>\r\n    </div>\r\n    <!--Email-->\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-4\">Email</div>\r\n      <div class=\"col-xs-8\">\r\n        <input type=\"text\" placeholder=\"Email Address\" value=\"{{email}}\" >\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-4\" align=\"center\">\r\n    <!--<img src=\"http://via.placeholder.com/200x200\">-->\r\n    <!--The following url will provide a random image.-->\r\n    <img src=\"http://loremflickr.com/200/200/person?random=1\">\r\n  </div>\r\n</div>\r\n<br>\r\n\r\n<!--History goes here-->\r\n<app-history></app-history>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = (function () {
    function UserProfileComponent(authService) {
        this.authService = authService;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.userloggedin();
    };
    // Determine if a user is logged in.
    // Return true if logged in.
    UserProfileComponent.prototype.userloggedin = function () {
        var result = false;
        this.username = '';
        this.userid = '';
        this.email = '';
        var currUser = this.authService.getCurrentUser();
        var user = currUser.username;
        var id = currUser.id;
        var email = currUser.email;
        if (user.length > 0) {
            this.username = user;
            this.userid = id;
            this.email = email;
            result = true;
        }
        return result;
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserProfileComponent);

var _a;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map