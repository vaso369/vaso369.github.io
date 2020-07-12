(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-course-module"],{

/***/ "./src/app/course/course-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/course/course-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CourseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseRoutingModule", function() { return CourseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course.component */ "./src/app/course/course.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{ path: '', component: _course_component__WEBPACK_IMPORTED_MODULE_2__["CourseComponent"] }];
var CourseRoutingModule = /** @class */ (function () {
    function CourseRoutingModule() {
    }
    CourseRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], CourseRoutingModule);
    return CourseRoutingModule;
}());



/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/course/course.component.html":
/*!**********************************************!*\
  !*** ./src/app/course/course.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"course\">\n  <div id=\"videos__main\">\n    <iframe\n      width=\"920\"\n      height=\"650\"\n      [src]=\"'https://www.youtube.com/embed/' + videoPath | safe\"\n    >\n    </iframe>\n    <a\n      class=\"btn btn-primary\"\n      (click)=\"handleDispatch()\"\n      href=\"#\"\n      routerLink=\"/add-course\"\n      >Add video</a\n    >\n  </div>\n  <div id=\"videos\">\n    <div\n      *ngFor=\"let course of courses\"\n      #DivRef\n      (click)=\"handleClick($event)\"\n      class=\"elem\"\n    >\n      <iframe\n        class=\"side_video\"\n        #IframeRef\n        (click)=\"handleClick($event)\"\n        width=\"400\"\n        height=\"315\"\n        [src]=\"'https://www.youtube.com/embed/' + course.path | safe\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n        allowfullscreen\n      ></iframe>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase.service */ "./src/app/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseComponent = /** @class */ (function () {
    function CourseComponent(firebaseService, route) {
        this.firebaseService = firebaseService;
        this.route = route;
        this.courses = [];
        this.asd = [];
        this.videoPath = '';
    }
    CourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.fetchVideos(+this.route.snapshot.params.id);
        this.route.params.subscribe(function (params) {
            _this.courses = _this.firebaseService.getVideos();
        });
        this.initSrc();
    };
    CourseComponent.prototype.initSrc = function () {
        var _this = this;
        setTimeout(function () {
            var asd123 = _this.firebaseService.getOneVideo();
            _this.videoPath = asd123.path;
        }, 2000);
    };
    CourseComponent.prototype.handleClick = function (event) {
        var newArr = event.target.querySelector('iframe').src.split('/');
        this.videoPath = newArr[4];
    };
    CourseComponent.prototype.handleDispatch = function () {
        this.firebaseService.setCurrentCourse(+this.route.snapshot.params.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('DivRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CourseComponent.prototype, "DivRef", void 0);
    CourseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")],
        }),
        __metadata("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CourseComponent);
    return CourseComponent;
}());



/***/ }),

/***/ "./src/app/course/course.module.ts":
/*!*****************************************!*\
  !*** ./src/app/course/course.module.ts ***!
  \*****************************************/
/*! exports provided: CourseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModule", function() { return CourseModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _course_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-routing.module */ "./src/app/course/course-routing.module.ts");
/* harmony import */ var _course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course.component */ "./src/app/course/course.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CourseModule = /** @class */ (function () {
    function CourseModule() {
    }
    CourseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_course_component__WEBPACK_IMPORTED_MODULE_4__["CourseComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _course_routing_module__WEBPACK_IMPORTED_MODULE_3__["CourseRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
        })
    ], CourseModule);
    return CourseModule;
}());



/***/ })

}]);
//# sourceMappingURL=course-course-module.js.map