webpackJsonp([1,5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_studentdata_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentlistComponent = (function () {
    function StudentlistComponent(studentdataService) {
        this.studentdataService = studentdataService;
        this.students = new Array();
        this.isDesc = false;
        this.column = 'name';
    }
    StudentlistComponent.prototype.ngOnInit = function () {
        this.students = this.studentdataService.getStudents();
    };
    StudentlistComponent.prototype.deleteReord = function (index) {
        this.studentdataService.deleteStudentData(index);
    };
    StudentlistComponent.prototype.sort = function (property) {
        console.log(property);
        this.isDesc = !this.isDesc;
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ;
    return StudentlistComponent;
}());
StudentlistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-studentlist',
        template: __webpack_require__(184),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_studentdata_service__["a" /* StudentdataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_studentdata_service__["a" /* StudentdataService */]) === "function" && _a || Object])
], StudentlistComponent);

var _a;
//# sourceMappingURL=studentlist.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DragComponent = (function () {
    function DragComponent() {
    }
    DragComponent.prototype.ngOnInit = function () {
    };
    DragComponent.prototype.ngAfterViewInit = function () {
        $(".jqueryUi").css({
            "background": "#cccccc",
            "min-height": "90vh",
            "padding": "15px"
        });
    };
    return DragComponent;
}());
DragComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-drag',
        template: __webpack_require__(185),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [])
], DragComponent);

//# sourceMappingURL=drag.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterBottomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterBottomComponent = (function () {
    function FooterBottomComponent() {
    }
    FooterBottomComponent.prototype.ngOnInit = function () {
    };
    return FooterBottomComponent;
}());
FooterBottomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer-bottom',
        template: __webpack_require__(186),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [])
], FooterBottomComponent);

//# sourceMappingURL=footer-bottom.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_studentdata_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = (function () {
    function FormComponent(studentdataService) {
        this.studentdataService = studentdataService;
        this.student = {
            name: 'kishor solanke',
            height: '126',
            weight: '55'
        };
    }
    FormComponent.prototype.ngOnInit = function () {
        //console.log(this.studentdataService);    
    };
    FormComponent.prototype.postForm = function (studentform) {
        this.studentdataService.addStudentData(this.student);
        //alert("ssss"+ studentform.name);
    };
    return FormComponent;
}());
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-form',
        template: __webpack_require__(187),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_studentdata_service__["a" /* StudentdataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_studentdata_service__["a" /* StudentdataService */]) === "function" && _a || Object])
], FormComponent);

var _a;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadertopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeadertopComponent = (function () {
    function HeadertopComponent(router) {
        var _this = this;
        this.router = router;
        router.events.subscribe(function (url) {
            _this.currentRoute = url.url;
        });
    }
    HeadertopComponent.prototype.ngOnInit = function () {
    };
    return HeadertopComponent;
}());
HeadertopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-headertop',
        template: __webpack_require__(188),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HeadertopComponent);

var _a;
//# sourceMappingURL=headertop.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(router, route) {
        this.router = router;
        this.route = route;
        this.dropeDownList = [{
                id: "1",
                val: "Item 1"
            },
            {
                id: "2",
                val: "Item 2"
            }
        ];
        this.navigateFormPage = function () {
            this.router.navigateByUrl('/form');
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.selectListVal = _this.dropeDownList[0].val;
            console.log(_this.selectListVal);
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(189),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subtab1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Subtab1Component = (function () {
    function Subtab1Component() {
    }
    Subtab1Component.prototype.ngOnInit = function () {
    };
    return Subtab1Component;
}());
Subtab1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-subtab1',
        template: __webpack_require__(190),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [])
], Subtab1Component);

//# sourceMappingURL=subtab1.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subtab2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Subtab2Component = (function () {
    function Subtab2Component() {
    }
    Subtab2Component.prototype.ngOnInit = function () {
    };
    return Subtab2Component;
}());
Subtab2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-subtab2',
        template: __webpack_require__(191),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [])
], Subtab2Component);

//# sourceMappingURL=subtab2.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subtab3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Subtab3Component = (function () {
    function Subtab3Component() {
    }
    Subtab3Component.prototype.ngOnInit = function () {
    };
    return Subtab3Component;
}());
Subtab3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-subtab3',
        template: __webpack_require__(192),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [])
], Subtab3Component);

//# sourceMappingURL=subtab3.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponentComponent = (function () {
    function PageNotFoundComponentComponent() {
    }
    PageNotFoundComponentComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponentComponent;
}());
PageNotFoundComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-not-found-component-',
        template: __webpack_require__(193),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponentComponent);

//# sourceMappingURL=page-not-found-component.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortinglistPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortinglistPipe = (function () {
    function SortinglistPipe() {
    }
    SortinglistPipe.prototype.transform = function (records, args) {
        return records.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.direction;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.direction;
            }
            else {
                return 0;
            }
        });
    };
    ;
    return SortinglistPipe;
}());
SortinglistPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({
        name: 'sortinglist'
    })
], SortinglistPipe);

//# sourceMappingURL=sortinglist.pipe.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Student; });
var Student = (function () {
    function Student(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    return Student;
}());

//# sourceMappingURL=Student.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".pt-3 {\r\n    padding-top: 1rem!important;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".pointer {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "footer {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 60px;\r\n    background-color: #f8f8f8;\r\n    border-top: 1px solid #e7e7e7;\r\n    padding: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "input.ng-invalid {\r\n    border-left: 5px solid #ffFF00;\r\n}\r\n\r\ninput.ng-valid {\r\n    border-left: 5px solid #00FF00;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".navbar .active {\r\n    background: #000000 !important;\r\n    color: #ffffff !important;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".sidebar {\r\n    position: fixed;\r\n    top: 51px;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n    padding: 20px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border-right: 1px solid #eee;\r\n}\r\n\r\n.bg-faded {\r\n    background-color: #f7f7f7;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<p>\r\n    about works!\r\n</p>\r\n\r\n<app-studentlist></app-studentlist>"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<app-headertop></app-headertop>\r\n\r\n<div class=\"container-fluid\">\r\n    <main>\r\n\r\n        <router-outlet></router-outlet>\r\n\r\n        <!--<app-form></app-form> -->\r\n    </main>\r\n</div>\r\n\r\n<app-footer-bottom></app-footer-bottom>"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n    <thead>\n        <tr>\n            <th>ID</th>\n            <th class=\"pointer\" (click)=\"sort('name')\">\n                Name\n                <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'name', \n                        'fa-sort-asc': (column == 'name' && !isDesc), \n                        'fa-sort-desc': (column == 'name' && isDesc) }\" aria-hidden=\"true\"> </i>\n\n            </th>\n            <th class=\"pointer\" (click)=\"sort('height')\">Height\n                <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'height', \n                        'fa-sort-asc': (column == 'height' && !isDesc), \n                        'fa-sort-desc': (column == 'height' && isDesc) }\" aria-hidden=\"true\"> </i>\n            </th>\n            <th class=\"pointer\" (click)=\"sort('weight')\">\n                Weight\n                <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'weight', \n                        'fa-sort-asc': (column == 'weight' && !isDesc), \n                        'fa-sort-desc': (column == 'weight' && isDesc) }\" aria-hidden=\"true\"> </i>\n            </th>\n            <th></th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let student of students | sortinglist: {property: column, direction: direction}; let i = index\">\n            <!-- | sortinglist: {property: column, direction: direction} -->\n            <td>{{i}}</td>\n            <th scope=\"row \">{{student.name}}</th>\n            <td>{{student.height}}</td>\n            <td>{{student.weight}}</td>\n            <td class=\"block \"><i class=\"fa fa-pencil fa-lg \"></i> </td>\n            <td class=\"block\" (click)=\"deleteReord(i)\"><i class=\"fa fa-trash fa-lg \"></i> </td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<div class=\"jqueryUi\">\r\n    <h2>jQuery and jQuey-ui Example</h2>\r\n\r\n</div>"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container text-center\">\r\n        <p class=\"text-muted\">Angular Demo Page </p>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<form novalidate #studentform=\"ngForm\" (ngSubmit)=\"postForm(studentform.value)\">\r\n    <div class=\"form-group\">\r\n        <label for=\"formGroupExampleInput\">Enter Name</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"student.name\" required>\r\n        <p *ngIf=\"name.invalid && name.dirty\"> user name is manidatory</p>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"formGroupExampleInput2\">Enter Height</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"height\" minlength=\"2\" maxlength=\"3\" #height=\"ngModel\" [(ngModel)]=\"student.height\" required>\r\n\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"formGroupExampleInput3\">Enter Weight</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"Weight\" #weight=\"ngModel\" [(ngModel)]=\"student.weight\">\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n</form>"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\r\n\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\" href=\"#\">Angular demo Page</a>\r\n\r\n\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"['home']\" routerLinkActive=\"active\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"['about']\" routerLinkActive=\"active\">About</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"['form']\" routerLinkActive=\"active\">Form</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"['jqueryui']\" routerLinkActive=\"active\">Jquery Ui</a>\r\n            </li>\r\n        </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\" *ngIf=\"currentRoute == '/about'\">\r\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\r\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form>\r\n    </div>\r\n\r\n</nav>"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n    <nav class=\"col-sm-3 col-md-2 bg-faded sidebar\">\n        <ul class=\"nav nav-pills flex-column\">\n            <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['subtab1']\" routerLinkActive=\"active\">Tab 1</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['subtab2']\" routerLinkActive=\"active\">Tab 2</a></li>\n            <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['subtab3']\" routerLinkActive=\"active\">Tab 3</a></li>\n\n        </ul>\n    </nav>\n\n    <div class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3\">\n\n\n\n        <div class=\"jumbotron\">\n            <h1>Welcome to my angular two demo project</h1>\n            <p>This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some responsive-range viewport sizes to see it in action.</p>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"navigateFormPage();\"><i class=\"fa fa-plus\"></i> Navigate to Form Page</button>\n\n\n            <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-danger ropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\">{{selectListVal}}</button>\n                <button type=\"button\" class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                    <span class=\"sr-only\">Toggle Dropdown</span>\n                </button>\n                <div class=\"dropdown-menu\">\n                    <a *ngFor=\"let list of dropeDownList\" class=\"dropdown-item\" href=\"#\" (click)=\"selectListVal = list.val\">{{list.val}}</a>\n                    <!--<div class=\"dropdown-divider\"></div>-->\n\n                </div>\n            </div>\n\n        </div>\n\n\n\n        <!-- sub tab containt loading div --->\n\n        <div class=\"tab-content\">\n            <div class=\"tab-pane active\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n        <!-- --->\n\n    </div>\n\n</div>"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  subtab1 works!\r\n</h2>"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  subtab2 works!\r\n</h2>"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  subtab3 works!\r\n</h2>"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found-component- works!\r\n</p>\r\n"

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Student__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentdataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentdataService = (function () {
    function StudentdataService() {
        this.studentList = new Array();
        var p1 = new __WEBPACK_IMPORTED_MODULE_1__Student__["a" /* Student */]("Pavan Solanke", "177", "70");
        var p2 = new __WEBPACK_IMPORTED_MODULE_1__Student__["a" /* Student */]("ram kolhe", "512", "100");
        this.studentList.push(p1);
        this.studentList.push(p2);
    }
    StudentdataService.prototype.addStudentData = function (obj) {
        this.studentList.push(obj);
    };
    StudentdataService.prototype.deleteStudentData = function (item) {
        var index = item;
        //console.log("index == " + index);
        if (index === -1) {
            return;
        }
        this.studentList.splice(index, 1);
    };
    StudentdataService.prototype.getStudents = function () {
        return this.studentList;
    };
    return StudentdataService;
}());
StudentdataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StudentdataService);

//# sourceMappingURL=studentdata.service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 85;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(112);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(182),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(183),
        styles: [__webpack_require__(168)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__headertop_headertop_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_bottom_footer_bottom_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__form_form_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_subtab_subtab1_subtab1_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_subtab_subtab2_subtab2_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_subtab_subtab3_subtab3_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page_not_found_component_page_not_found_component_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_studentdata_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__commancomponent_studentlist_studentlist_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipe_sortinglist_pipe__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__drag_drag_component__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
        children: [
            { path: '', redirectTo: 'subtab1', pathMatch: 'full' },
            { path: 'subtab1', component: __WEBPACK_IMPORTED_MODULE_11__home_subtab_subtab1_subtab1_component__["a" /* Subtab1Component */] },
            { path: 'subtab2', component: __WEBPACK_IMPORTED_MODULE_12__home_subtab_subtab2_subtab2_component__["a" /* Subtab2Component */] },
            { path: 'subtab3', component: __WEBPACK_IMPORTED_MODULE_13__home_subtab_subtab3_subtab3_component__["a" /* Subtab3Component */] }
        ]
    },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */] },
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_9__form_form_component__["a" /* FormComponent */] },
    { path: 'jqueryui', component: __WEBPACK_IMPORTED_MODULE_19__drag_drag_component__["a" /* DragComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_15__page_not_found_component_page_not_found_component_component__["a" /* PageNotFoundComponentComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pipe_sortinglist_pipe__["a" /* SortinglistPipe */],
            __WEBPACK_IMPORTED_MODULE_6__headertop_headertop_component__["a" /* HeadertopComponent */],
            __WEBPACK_IMPORTED_MODULE_7__footer_bottom_footer_bottom_component__["a" /* FooterBottomComponent */],
            __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__page_not_found_component_page_not_found_component_component__["a" /* PageNotFoundComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_subtab_subtab1_subtab1_component__["a" /* Subtab1Component */],
            __WEBPACK_IMPORTED_MODULE_12__home_subtab_subtab2_subtab2_component__["a" /* Subtab2Component */],
            __WEBPACK_IMPORTED_MODULE_13__home_subtab_subtab3_subtab3_component__["a" /* Subtab3Component */],
            __WEBPACK_IMPORTED_MODULE_17__commancomponent_studentlist_studentlist_component__["a" /* StudentlistComponent */],
            __WEBPACK_IMPORTED_MODULE_19__drag_drag_component__["a" /* DragComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes) // <-- installs Router routes, components and services-->
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_14__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_14__angular_common__["b" /* HashLocationStrategy */] }, __WEBPACK_IMPORTED_MODULE_16__services_studentdata_service__["a" /* StudentdataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.bundle.js.map