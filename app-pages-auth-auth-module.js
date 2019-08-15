(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-auth-auth-module"],{

/***/ "./src/app/pages/auth/auth-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth-routing.module.ts ***!
  \***************************************************/
/*! exports provided: routes, NgxAuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAuthRoutingModule", function() { return NgxAuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/auth/login/login.component.ts");



 // <---

var routes = [
    {
        path: "",
        component: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthComponent"],
        children: [
            {
                path: "login",
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["NgxLoginComponent"] // <---
            }
        ]
    }
];
var NgxAuthRoutingModule = /** @class */ (function () {
    function NgxAuthRoutingModule() {
    }
    NgxAuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NgxAuthRoutingModule);
    return NgxAuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: NgxAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxAuthModule", function() { return NgxAuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/pages/auth/auth-routing.module.ts");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/auth/login/login.component.ts");








 // <---
var NgxAuthModule = /** @class */ (function () {
    function NgxAuthModule() {
    }
    NgxAuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbAlertModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbInputModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbButtonModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbCheckboxModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["NgxAuthRoutingModule"],
                _nebular_auth__WEBPACK_IMPORTED_MODULE_6__["NbAuthModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_8__["NgxLoginComponent"]]
        })
    ], NgxAuthModule);
    return NgxAuthModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"title\" class=\"title\">Login</h1>\r\n<p class=\"sub-title\">Log in to the admin dashboard.</p>\r\n\r\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\r\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\r\n  <ul class=\"alert-message-list\">\r\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\r\n  </ul>\r\n</nb-alert>\r\n\r\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\r\n  <p class=\"alert-title\"><b>Hooray!</b></p>\r\n  <ul class=\"alert-message-list\">\r\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\r\n  </ul>\r\n</nb-alert>\r\n\r\n<form (ngSubmit)=\"login()\" #form=\"ngForm\" aria-labelledby=\"title\">\r\n\r\n  <div class=\"form-control-group\">\r\n    <label class=\"label\" for=\"input-email\">Email address:</label>\r\n    <input nbInput fullWidth [(ngModel)]=\"user.email\" #email=\"ngModel\" name=\"email\" id=\"input-email\" pattern=\".+@.+\\..+\"\r\n      placeholder=\"Email address\" autofocus [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : ''\"\r\n      [required]=\"getConfigValue('forms.validation.email.required')\"\r\n      [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\r\n    <ng-container *ngIf=\"email.invalid && email.touched\">\r\n      <p class=\"error-message\" *ngIf=\"email.errors?.required\">\r\n        Email is required!\r\n      </p>\r\n      <p class=\"error-message\" *ngIf=\"email.errors?.pattern\">\r\n        Email should be the real one!\r\n      </p>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"form-control-group\">\r\n    <label class=\"label\" for=\"input-password\">Password:</label>\r\n    <input nbInput fullWidth [(ngModel)]=\"user.password\" #password=\"ngModel\" name=\"password\" type=\"password\"\r\n      id=\"input-password\" placeholder=\"Password\"\r\n      [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : ''\"\r\n      [required]=\"getConfigValue('forms.validation.password.required')\"\r\n      [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\r\n      [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\r\n      [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\r\n    <ng-container *ngIf=\"password.invalid && password.touched \">\r\n      <p class=\"error-message\" *ngIf=\"password.errors?.required\">\r\n        Password is required!\r\n      </p>\r\n      <p class=\"error-message\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\">\r\n        Password should contains\r\n        from {{ getConfigValue('forms.validation.password.minLength') }}\r\n        to {{ getConfigValue('forms.validation.password.maxLength') }}\r\n        characters\r\n      </p>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"form-control-group accept-group\">\r\n    <nb-checkbox name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\" *ngIf=\"rememberMe\">Remember me</nb-checkbox>\r\n  </div>\r\n\r\n  <button nbButton fullWidth status=\"success\" [disabled]=\"submitted || !form.valid\" [class.btn-pulse]=\"submitted\">\r\n    Log In\r\n  </button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: NgxLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoginComponent", function() { return NgxLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");



var NgxLoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NgxLoginComponent, _super);
    function NgxLoginComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgxLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "ngx-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/auth/login/login.component.html")
        })
    ], NgxLoginComponent);
    return NgxLoginComponent;
}(_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbLoginComponent"]));



/***/ })

}]);
//# sourceMappingURL=app-pages-auth-auth-module.js.map