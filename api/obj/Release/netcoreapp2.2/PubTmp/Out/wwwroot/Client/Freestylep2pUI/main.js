(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/usercard/usercard.component.css":
/*!************************************************************!*\
  !*** ./src/app/Components/usercard/usercard.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy91c2VyY2FyZC91c2VyY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsbUZBQW1GO0lBQ25GLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvdXNlcmNhcmQvdXNlcmNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/Components/usercard/usercard.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Components/usercard/usercard.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <mat-card class=\"example-card\">\n            <mat-card-header>\n              <div mat-card-avatar class=\"example-header-image\"></div>\n              <mat-card-title>Shiba Inu</mat-card-title>\n              <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n            <mat-card-content>\n              <p>\n                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                bred for hunting.\n              </p>\n            </mat-card-content>\n            <mat-card-actions>\n              <button mat-button>LIKE</button>\n              <button mat-button>SHARE</button>\n            </mat-card-actions>\n          </mat-card>\n    \n\n    "

/***/ }),

/***/ "./src/app/Components/usercard/usercard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/usercard/usercard.component.ts ***!
  \***********************************************************/
/*! exports provided: UsercardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsercardComponent", function() { return UsercardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsercardComponent = /** @class */ (function () {
    function UsercardComponent() {
    }
    UsercardComponent.prototype.ngOnInit = function () {
    };
    UsercardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usercard',
            template: __webpack_require__(/*! ./usercard.component.html */ "./src/app/Components/usercard/usercard.component.html"),
            styles: [__webpack_require__(/*! ./usercard.component.css */ "./src/app/Components/usercard/usercard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsercardComponent);
    return UsercardComponent;
}());



/***/ }),

/***/ "./src/app/Services/Models/userModel.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/Models/userModel.ts ***!
  \**********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/Services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
        this.freestylers = [
            { Name: "Daniel", EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password: "May", Points: 20 },
            { Name: "Jose", EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password: "May", Points: 20 },
            { Name: "Loida", EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password: "May", Points: 20 },
            { Name: "Monica", EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password: "May", Points: 20 },
            { Name: "Nira", EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password: "May", Points: 20 },
            { Name: "Laura", EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password: "May", Points: 20 },
            { Name: "Miguel", EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password: "May", Points: 20 },
            { Name: "James", EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password: "May", Points: 20 },
            { Name: "Alvin", EmailAddress: "DanielLaraEdinburgh@hotmail.com", Password: "May", Points: 20 },
        ];
        this.URL = 'https://batallademcs.azurewebsites.net/api';
    }
    DataService.prototype.createUser = function (user) {
        return this._http.post(this.URL + "/User/addUser", user);
    };
    DataService.prototype.logIn = function (user) {
        return this._http.post(this.URL + "/User/login/", user);
    };
    DataService.prototype.getUsers = function () {
        return this._http.get(this.URL + "/User/getUsers");
    };
    DataService.prototype.getUser = function (id) {
        return this._http.post(URL + "/User/getUser", id);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/Services/websocket.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/websocket.service.ts ***!
  \***********************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
        this.URL = "ws://localhost:3000";
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.URL);
    }
    WebsocketService.prototype.listen = function (eventName) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (subscriber) {
            _this.socket.on(eventName, function (data) {
                subscriber.next(data);
            });
        });
    };
    WebsocketService.prototype.emit = function (eventName, data) {
        this.socket.emit(eventName, data);
    };
    WebsocketService.prototype.setNickName = function (nickname) {
        this.socket.emit('nickname', nickname);
    };
    WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/app/Views/general/general.component.css":
/*!*****************************************************!*\
  !*** ./src/app/Views/general/general.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#online-users-container{\r\n    border:1px solid black;\r\n    padding:20px;\r\n    margin-top:150px;\r\n}\r\n\r\n#user-col{\r\n    margin:10px;\r\n}\r\n\r\n#user-icon{\r\n    transition: transform .5s;\r\n}\r\n\r\n#user-icon:hover{\r\n    transform: rotate(180deg);\r\n}\r\n\r\n#buttons-container{\r\n    margin-top:50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVmlld3MvZ2VuZXJhbC9nZW5lcmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUVJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUVJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9WaWV3cy9nZW5lcmFsL2dlbmVyYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvbmxpbmUtdXNlcnMtY29udGFpbmVye1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIG1hcmdpbi10b3A6MTUwcHg7XHJcbn1cclxuXHJcbiN1c2VyLWNvbHtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG59XHJcbiN1c2VyLWljb257XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC41cztcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXM7XHJcbn1cclxuI3VzZXItaWNvbjpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbiNidXR0b25zLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6NTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Views/general/general.component.html":
/*!******************************************************!*\
  !*** ./src/app/Views/general/general.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n<div class=\"container\" id=\"online-users-container\">\r\n  <div class=\"row\" id=\"online-user-row\">\r\n\r\n    <div class=\"col-lg-12\"  id=\"online-user-col\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-1 text-center\" *ngFor=\"let peer of this.peersArray\" id=\"user-col\">\r\n            <img src=\"../../../assets/Images/maleUser.png\" height=\"40px\" alt=\"Smiley face\" id=\"user-icon\">\r\n           <p>{{peer.nickname}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  \r\n</div>\r\n\r\n<div class=\"container\" id=\"buttons-container\">\r\n  <div class=\"row justify-content-center\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"nextPage()\">Start Battle</button>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/Views/general/general.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Views/general/general.component.ts ***!
  \****************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/websocket.service */ "./src/app/Services/websocket.service.ts");




// import { Peer } from 'simple-peer';
var GeneralComponent = /** @class */ (function () {
    function GeneralComponent(_webSocketService, router) {
        this._webSocketService = _webSocketService;
        this.router = router;
        this.socket = this._webSocketService.socket;
    }
    GeneralComponent.prototype.ngOnInit = function () {
        // this.getPeersOnline();
        console.log(this.socket);
        this.setNickNameOnLogin();
        this.peersArray = this.getPeersOnline();
    };
    GeneralComponent.prototype.nextPage = function () {
        this.router.navigate(['privado']);
    };
    GeneralComponent.prototype.getPeersOnline = function () {
        var _this = this;
        var arrayOfPeers;
        this._webSocketService.listen('getAllPeers').subscribe(function (data) {
            console.log(data);
            _this.peersArray = data;
            arrayOfPeers = data;
        });
        return arrayOfPeers;
    };
    GeneralComponent.prototype.setNickNameOnLogin = function () {
        var userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
        var nickname = userDetails.name;
        console.log(userDetails);
        this.socket.emit('setnickname', nickname);
    };
    GeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-general',
            template: __webpack_require__(/*! ./general.component.html */ "./src/app/Views/general/general.component.html"),
            styles: [__webpack_require__(/*! ./general.component.css */ "./src/app/Views/general/general.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GeneralComponent);
    return GeneralComponent;
}());



/***/ }),

/***/ "./src/app/Views/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/Views/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin:0;\r\n    \r\n}\r\n#container{\r\nheight:100vh;\r\n}\r\n#row{\r\n    height:100%;\r\n    \r\n}\r\n#col{\r\n    box-shadow: 6px 6px 52px 10px rgba(3,11,56,1);\r\n    border-radius: 5px 5px 5px;\r\n\r\n    height:800px;\r\n    background-color:white;\r\n    opacity: 0.9;\r\n    filter: alpha(opacity=60);\r\n}\r\n#row-login{\r\n    height:100%;\r\n}\r\n#col-login-left{\r\n    border-right:1px solid black;\r\n    height:100%;\r\n    background-color:black;\r\n    background-image:\r\n    radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),\r\n    radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),\r\n    radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),\r\n    radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);\r\n    background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;\r\n    background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;\r\n   \r\n\r\n}\r\n#row-logo{\r\nheight:100%;\r\n}\r\n#col-logo{\r\n    height:50%;\r\n   text-align: center;\r\n    \r\n\r\n}\r\n#logo{\r\n    display:inline-block;\r\n    height:80%;\r\n    width:50%;\r\n    background-image:url('mic.png');\r\n  background-size: contain;\r\nbackground-repeat: no-repeat;\r\n\r\nposition: absolute;\r\n    top: 70%;\r\n     left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n#col-text-logo{\r\n    height:250px;\r\n    justify-content: end;\r\n}\r\n.balloon{\r\n    border-radius: 5px;\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    padding: 10px;\r\n    /* width: 420px; */\r\n    font-family: 'Indie Flower', cursive;\r\n    font-size: 2em\r\n    }\r\n.balloon:before {\r\n    content:\"\";\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-bottom: 20px solid whitesmoke;\r\n    border-right: 18px solid transparent;\r\n    border-left: 18px solid transparent;\r\n    margin: -30px 0 0 200px;\r\n    }\r\n#col-login-right{\r\n    height:100%;\r\n\r\n}\r\n#row-login-text{\r\n    height:50px;\r\n}\r\n#row-login-form{\r\n/* height:100%; */\r\n}\r\n.example-full-width{\r\n    margin:20px;\r\n    width:50%;\r\n}\r\n\r\n\r\n\r\n  \r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7O0FBRVo7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUVBO0lBQ0ksV0FBVzs7QUFFZjtBQUVBO0lBSUksNkNBQTZDO0lBQzdDLDBCQUEwQjs7SUFFMUIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCOzs7O3FGQUlpRjtJQUNqRixtRUFBbUU7SUFDbkUsNERBQTREOzs7QUFHaEU7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUVBO0lBQ0ksVUFBVTtHQUNYLGtCQUFrQjs7O0FBR3JCO0FBSUE7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLFNBQVM7SUFDVCwrQkFBK0M7RUFJakQsd0JBQXdCO0FBQzFCLDRCQUE0Qjs7QUFFNUIsa0JBQWtCO0lBQ2QsUUFBUTtLQUNQLFNBQVM7SUFDViwrQkFBK0I7QUFDbkM7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDO0lBQ0E7QUFFQTtJQUNBLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyx1QkFBdUI7SUFDdkI7QUFJSjtJQUNJLFdBQVc7O0FBRWY7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvVmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIFxyXG59XHJcbiNjb250YWluZXJ7XHJcbmhlaWdodDoxMDB2aDtcclxufVxyXG5cclxuI3Jvd3tcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgXHJcbn1cclxuXHJcbiNjb2x7XHJcbiBcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNnB4IDZweCA1MnB4IDEwcHggcmdiYSgzLDExLDU2LDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiA2cHggNnB4IDUycHggMTBweCByZ2JhKDMsMTEsNTYsMSk7XHJcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDUycHggMTBweCByZ2JhKDMsMTEsNTYsMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweDtcclxuXHJcbiAgICBoZWlnaHQ6ODAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTYwKTtcclxufVxyXG5cclxuI3Jvdy1sb2dpbntcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG4jY29sLWxvZ2luLWxlZnR7XHJcbiAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgIHJhZGlhbC1ncmFkaWVudCh3aGl0ZSwgcmdiYSgyNTUsMjU1LDI1NSwuMikgMnB4LCB0cmFuc3BhcmVudCA0MHB4KSxcclxuICAgIHJhZGlhbC1ncmFkaWVudCh3aGl0ZSwgcmdiYSgyNTUsMjU1LDI1NSwuMTUpIDFweCwgdHJhbnNwYXJlbnQgMzBweCksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQod2hpdGUsIHJnYmEoMjU1LDI1NSwyNTUsLjEpIDJweCwgdHJhbnNwYXJlbnQgNDBweCksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwuNCksIHJnYmEoMjU1LDI1NSwyNTUsLjEpIDJweCwgdHJhbnNwYXJlbnQgMzBweCk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDU1MHB4IDU1MHB4LCAzNTBweCAzNTBweCwgMjUwcHggMjUwcHgsIDE1MHB4IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCA0MHB4IDYwcHgsIDEzMHB4IDI3MHB4LCA3MHB4IDEwMHB4O1xyXG4gICBcclxuXHJcbn1cclxuI3Jvdy1sb2dve1xyXG5oZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuI2NvbC1sb2dve1xyXG4gICAgaGVpZ2h0OjUwJTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiNsb2dve1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6ODAlO1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIuLi8uLi8uLi9hc3NldHMvbWljLnBuZ1wiKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDcwJTtcclxuICAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG59XHJcblxyXG4jY29sLXRleHQtbG9nb3tcclxuICAgIGhlaWdodDoyNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcblxyXG4uYmFsbG9vbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLyogd2lkdGg6IDQyMHB4OyAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAyZW1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJhbGxvb246YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IC0zMHB4IDAgMCAyMDBweDtcclxuICAgIH1cclxuICBcclxuXHJcblxyXG4jY29sLWxvZ2luLXJpZ2h0e1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcblxyXG59XHJcblxyXG4jcm93LWxvZ2luLXRleHR7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxufVxyXG5cclxuI3Jvdy1sb2dpbi1mb3Jte1xyXG4vKiBoZWlnaHQ6MTAwJTsgKi9cclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aHtcclxuICAgIG1hcmdpbjoyMHB4O1xyXG4gICAgd2lkdGg6NTAlO1xyXG59XHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Views/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/Views/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"container\">\r\n\r\n  <div class=\"row justify-content-center  align-items-center\" id=\"row\">\r\n    <div id=\"col\" class=\"col-lg-10 col-md-12 col-sm-12\">\r\n      <div class=\"row\" id=\"row-login\">\r\n        <div class=\"col-lg-6 col-md-12 col-sm-12\" id=\"col-login-left\">\r\n          <div class=\"row justify-content-center align-items-center\" id=\"row-logo\">\r\n            <div class=\"col-lg-12 text-center align-items-bottom\" id=\"col-logo\">\r\n              <div id=\"logo\"></div>\r\n            </div>\r\n            <div class=\"col-lg-8\" id=\"col-text-logo\">\r\n                <div class=\"balloon\" style=\"font-family:Cambria;\">\r\n                    Asi que sabes improvisar, no?... Demuestralo!\r\n                    </div>\r\n                   \r\n            </div>\r\n            \r\n          </div>\r\n       \r\n        </div>\r\n        <div class=\"col-lg-6 col-md-12 col-sm-12\" id=\"col-login-right\">\r\n          <div class=\"row justify-content-center\">\r\n              <img src=\"../../../assets/logologin3.png\" height=200  style=\"margin-top:50px;margin-bottom:40px;\" alt=\"\">\r\n\r\n          </div>\r\n\r\n          <!-- <div class=\"row justify-content-center align-items-center\" id=\"row-login-text\" style=\"margin-bottom:30px;\">\r\n\r\n            <div class=\"col-lg-12 text-center\">\r\n\r\n              <h3 style=\"font-family:Cambria;font-weight:100;\">Login</h3>\r\n\r\n            </div>\r\n          </div> -->\r\n          <div class=\"row justify-content-center\" id=\"row-login-form\">\r\n\r\n            <div class=\"col-lg-7 text-center\">\r\n              <form class=\"example-form\">\r\n                <div class=\"row justify-content-center\">\r\n                    <mat-form-field class=\"example-full-width\" style=\" margin-bottom: -10px\">\r\n                        <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\r\n                        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                          Please enter a valid email address\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                          Email is <strong>required</strong>\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                </div>\r\n               \r\n                <div class=\"row justify-content-center\">\r\n                    <mat-form-field class=\"example-full-width\" style=\" margin-bottom: -10px\">\r\n                        <input matInput type=\"password\" placeholder=\"Password\" [formControl]=\"passwordFormControl\">\r\n                        <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\r\n                          Password is <strong>required</strong>\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n      \r\n                </div>\r\n                \r\n                <br />\r\n                <br />\r\n\r\n                <button mat-raised-button color=\"primary\" (click)=\"login()\">Login</button>\r\n                <br />\r\n                <br />\r\n                <a href=\"#\" class=\"btn btn-link\">forgot Password?</a>\r\n                <button (click)=\"nextPage()\" class=\"btn btn-link\">Signup</button>\r\n                <br />\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/Views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/Views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Services_Models_userModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Models/userModel */ "./src/app/Services/Models/userModel.ts");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, _dataService) {
        this.router = router;
        this._dataService = _dataService;
        this.userDetails = {};
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.nextPage = function () {
        this.router.navigate(['signup']);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var user = new src_app_Services_Models_userModel__WEBPACK_IMPORTED_MODULE_4__["User"]();
        user.EmailAddress = this.emailFormControl.value;
        user.Password = this.passwordFormControl.value;
        console.log(user);
        this._dataService.logIn(user).subscribe(function (x) {
            if (x === null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'The username or password you entered is incorrect. maybe both!',
                });
                console.log(x);
                _this.resetLoginForm();
            }
            else {
                _this.userDetails = x;
                sessionStorage.setItem("userDetails", JSON.stringify(x));
                _this.router.navigate(['general']);
            }
            console.log(x);
        });
    };
    LoginComponent.prototype.resetLoginForm = function () {
        this.emailFormControl.clearValidators();
        this.passwordFormControl.clearValidators();
        this.emailFormControl.reset();
        this.passwordFormControl.reset();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Views/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Views/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Views/privado/privado.component.css":
/*!*****************************************************!*\
  !*** ./src/app/Views/privado/privado.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nhtml { \r\n\r\n    background: url('micscover2.jpg') no-repeat center center fixed;\r\n    background-size: cover;\r\n  }\r\n\r\n#container{\r\n    height:100vh;\r\n    background: url('micscover2.jpg') no-repeat center center fixed;\r\n    background-size: cover;\r\n}\r\n\r\n#row{\r\n    width:100%;\r\n    height:100%;\r\n}\r\n\r\n#col{\r\n/* height:850px; */\r\n/* background-color:white; */\r\n/* opacity: 0.1; */\r\n/* filter: alpha(opacity=70); */\r\nborder-radius:5%;\r\n\r\n\r\n}\r\n\r\n#webCamRow{\r\n    height:100%;\r\n    margin-right:-30px;\r\n\r\n\r\n}\r\n\r\n#webCamCol1{\r\nheight:50%;\r\n/* border-radius:25%; */\r\n}\r\n\r\n#webCamCol2{\r\n    height:50%;\r\n    /* border-radius:25%; */\r\n\r\n\r\n}\r\n\r\n#menuWrapperCol{\r\n    bottom:0;\r\n    position:fixed;\r\n    margin-bottom:30px;\r\n}\r\n\r\n#menuCol{\r\n    margin-right:-30px;\r\n    background-color: rgba(29, 4, 29, 0.7);\r\n\r\n    /* background-color:lightgrey; */\r\n    height:100px;\r\n    width:400px;\r\n    border-radius: 5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVmlld3MvcHJpdmFkby9wcml2YWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLCtEQUErRTtJQUkvRSxzQkFBc0I7RUFDeEI7O0FBRUY7SUFDSSxZQUFZO0lBQ1osK0RBQStFO0lBSS9FLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsNEJBQTRCO0FBQzVCLGtCQUFrQjtBQUNsQiwrQkFBK0I7QUFDL0IsZ0JBQWdCOzs7QUFHaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCOzs7QUFHdEI7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsdUJBQXVCO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1Qjs7O0FBRzNCOztBQUdBO0lBQ0ksUUFBUTtJQUNSLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0NBQXNDOztJQUV0QyxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9WaWV3cy9wcml2YWRvL3ByaXZhZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5odG1sIHsgXHJcblxyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21pY3Njb3ZlcjIuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiNjb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbWljc2NvdmVyMi5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbiNyb3d7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbiNjb2x7XHJcbi8qIGhlaWdodDo4NTBweDsgKi9cclxuLyogYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTsgKi9cclxuLyogb3BhY2l0eTogMC4xOyAqL1xyXG4vKiBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApOyAqL1xyXG5ib3JkZXItcmFkaXVzOjUlO1xyXG5cclxuXHJcbn1cclxuXHJcbiN3ZWJDYW1Sb3d7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIG1hcmdpbi1yaWdodDotMzBweDtcclxuXHJcblxyXG59XHJcblxyXG4jd2ViQ2FtQ29sMXtcclxuaGVpZ2h0OjUwJTtcclxuLyogYm9yZGVyLXJhZGl1czoyNSU7ICovXHJcbn1cclxuXHJcbiN3ZWJDYW1Db2wye1xyXG4gICAgaGVpZ2h0OjUwJTtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6MjUlOyAqL1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4jbWVudVdyYXBwZXJDb2x7XHJcbiAgICBib3R0b206MDtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG59XHJcbiNtZW51Q29se1xyXG4gICAgbWFyZ2luLXJpZ2h0Oi0zMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOSwgNCwgMjksIDAuNyk7XHJcblxyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZXk7ICovXHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICB3aWR0aDo0MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/Views/privado/privado.component.html":
/*!******************************************************!*\
  !*** ./src/app/Views/privado/privado.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"container\">\r\n\r\n  <div class=\"row justify-content-center align-items-center\" id=\"row\">\r\n\r\n    <div class=\"col-lg-12\" id=\"col\">\r\n      <div class=\"row align-items-center justify-content-around\" id=\"webCamRow\">\r\n        \r\n        <div>\r\n        <div id=\"peerWrapper\" class=\"text-center\">\r\n          </div>\r\n          <div class=\"col-lg-2 text-center\" id=\"webCamCol1\"></div>\r\n        </div>\r\n       \r\n          <div *ngIf=\"this.isConnected\" id=\"menuWrapper\" class=\"text-center\">\r\n            \r\n            <div class=\"col-lg-2 text-center\" id=\"menuCol\">\r\n\r\n            </div>\r\n            </div>\r\n          \r\n\r\n        <div>\r\n        <div id=\"myWrapper\"  class=\"text-center\">\r\n          </div>\r\n          <div class=\"col-lg-2 text-center\" id=\"webCamCol2\"></div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-lg-12\" id=\"menuWrapperCol\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-2 text-center\" id=\"menuCol\">\r\n          <div *ngIf=\"!this.isConnected\">\r\n            <button mat-fab color=\"warn\" (click)=\"readyToBattle()\" >Fight!</button>\r\n  \r\n          </div>\r\n          <p style=\"color:white;\" id=\"changeText\"></p>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/Views/privado/privado.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Views/privado/privado.component.ts ***!
  \****************************************************/
/*! exports provided: PrivadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivadoComponent", function() { return PrivadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/websocket.service */ "./src/app/Services/websocket.service.ts");




var PrivadoComponent = /** @class */ (function () {
    function PrivadoComponent(router, _webSocketService) {
        this.router = router;
        this._webSocketService = _webSocketService;
        this.client = {};
        this.pairedPeerWaiting = false;
        this.peerObject = {};
        this.userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
        this.isConnected = false;
        this.socket = this._webSocketService.socket;
    }
    PrivadoComponent.prototype.ngOnInit = function () {
        this.waitForInstructions();
        this.setNickNameOnLogin();
        // this.readyToBattle();
    };
    PrivadoComponent.prototype.setNickNameOnLogin = function () {
        var userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
        var nickname = userDetails.name;
        console.log(userDetails);
        this.socket.emit('setnickname', nickname);
    };
    PrivadoComponent.prototype.nextPage = function () {
        this.router.navigate(['']);
    };
    PrivadoComponent.prototype.putWordsInPage = function (words) {
        var text = words;
        var counter = 0;
        var elem = document.getElementById("changeText");
        var inst = setInterval(change, 10000);
        function change() {
            elem.innerHTML = text[counter];
            counter++;
            if (counter >= text.length) {
                counter = 0;
                clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
            }
        }
    };
    PrivadoComponent.prototype.waitForInstructions = function () {
        var _this = this;
        this.socket.on('onOffer', function (senderId, words) {
            _this.words = words;
            _this.putWordsInPage(words.peer1);
            console.log(words, "words");
            _this.isConnected = true;
            console.log('funciona on offer', senderId);
            _this.onOffer(_this.socket, _this.userDetails);
        });
        this.socket.on('onSendOffer', function (recieverId, words) {
            _this.words = words;
            _this.putWordsInPage(words.peer2);
            _this.isConnected = true;
            console.log(words, "words");
            console.log('funciona sendOffer', recieverId);
            _this.sendOffer(_this.socket, recieverId, _this.userDetails);
        });
    };
    PrivadoComponent.prototype.onOffer = function (socket, userDetails) {
        var peerConnection = new RTCPeerConnection();
        var video = document.createElement('video');
        var div = document.getElementById('webCamCol1');
        video.height = 400;
        video.width = 400;
        video.style.objectFit = "cover";
        div.appendChild(video);
        //////////////////////////////////////////////////
        var videoOtherPeer = document.createElement('video');
        videoOtherPeer.height = 400;
        videoOtherPeer.width = 400;
        videoOtherPeer.style.objectFit = "cover";
        var videoOtherPeerDiv = document.getElementById('webCamCol2');
        videoOtherPeerDiv.appendChild(videoOtherPeer);
        var constraints = { audio: false, video: { width: 1280, height: 1720 } };
        navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
            video.srcObject = stream;
            video.play();
        }).catch(function (error) { return console.error(error); });
        ///////////////////////////////////////////////////    var constraints = { audio: false, video: { width: 1280, height: 720 } };
        socket.on('offer', function (id, description, peerUserDetails) {
            var _this = this;
            peerConnection.setRemoteDescription(description)
                .then(function () { return peerConnection.createAnswer(); })
                .then(function (sdp) { return peerConnection.setLocalDescription(sdp); })
                .then(function () {
                socket.emit('answer', id, peerConnection.localDescription, userDetails);
            });
            var stream = video.srcObject;
            stream.getTracks().forEach(function (track) {
                _this.sender = peerConnection.addTrack(track, stream);
            });
            peerConnection.ontrack = function (event) {
                videoOtherPeer.srcObject = event.streams[0];
                videoOtherPeer.play();
            };
            peerConnection.onicecandidate = function (event) {
                if (event.candidate) {
                    socket.emit('candidate', id, event.candidate);
                }
            };
            var otherPeerWrapperDiv = document.getElementById('peerWrapper');
            var otherPeerH3 = document.createElement('h3');
            otherPeerH3.textContent = peerUserDetails.name;
            otherPeerH3.style.color = 'white';
            otherPeerWrapperDiv.appendChild(otherPeerH3);
            var myWrapperDiv = document.getElementById('myWrapper');
            var myH3 = document.createElement('h3');
            myH3.textContent = userDetails.name;
            myH3.style.color = 'white';
            myWrapperDiv.appendChild(myH3);
            this.peerObject = peerUserDetails;
            console.log(peerUserDetails);
        });
        socket.on('candidate', function (id, candidate) {
            peerConnection.addIceCandidate(new RTCIceCandidate(candidate))
                .catch(function (e) { return console.error(e); });
        });
        socket.on('broadcaster', function () {
            socket.emit('watcher');
        });
        socket.on('bye', function () {
            peerConnection.removeTrack(this.sender);
            peerConnection.close();
            peerConnection = new RTCPeerConnection();
            // peerConnection = undefined;
            video.hidden = true;
            videoOtherPeer.hidden = true;
            var stream = video.srcObject;
            stream.getTracks().forEach(function (track) {
                track.stop();
            });
            var otherPeerStream = videoOtherPeer.srcObject;
            otherPeerStream.getTracks().forEach(function (track) {
                track.stop();
            });
            socket.emit('imfree', socket.id);
            window.location.reload();
        });
    };
    PrivadoComponent.prototype.sendOffer = function (socket, recieverId, userDetails) {
        var peerConnections = {};
        var peerConnection;
        var video = document.createElement('video');
        var div = document.getElementById('webCamCol1');
        video.height = 400;
        video.width = 400;
        video.style.objectFit = "cover";
        div.appendChild(video);
        ///////////////////////////////////////
        var videoOtherPeer = document.createElement('video');
        videoOtherPeer.height = 400;
        videoOtherPeer.width = 400;
        videoOtherPeer.style.objectFit = "cover";
        var videoOtherPeerDiv = document.getElementById('webCamCol2');
        videoOtherPeerDiv.appendChild(videoOtherPeer);
        if (Object.keys(peerConnections).length < 2) {
            var constraints = { audio: false, video: { width: 1280, height: 720 } };
            navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
                video.srcObject = stream;
                video.play();
                socket.emit('broadcaster');
            }).catch(function (error) { return console.error(error); });
            socket.on('answer', function (id, description, peerUserDetails) {
                peerConnections[id].setRemoteDescription(description);
                this.peerObject = peerUserDetails;
                var otherPeerWrapperDiv = document.getElementById('peerWrapper');
                var otherPeerH3 = document.createElement('h3');
                otherPeerH3.textContent = peerUserDetails.name;
                otherPeerH3.style.color = 'white';
                otherPeerWrapperDiv.appendChild(otherPeerH3);
                var myWrapperDiv = document.getElementById('myWrapper');
                var myH3 = document.createElement('h3');
                myH3.textContent = userDetails.name;
                myH3.style.color = 'white';
                myWrapperDiv.appendChild(myH3);
                console.log(peerUserDetails);
            });
            socket.on('watcher', function () {
                var _this = this;
                peerConnection = new RTCPeerConnection();
                peerConnections[recieverId] = peerConnection;
                var stream = video.srcObject;
                stream.getTracks().forEach(function (track) {
                    _this.sender = peerConnection.addTrack(track, stream);
                });
                peerConnection.createOffer().then(function (sdp) { return peerConnection.setLocalDescription(sdp); }).then(function () {
                    console.log(userDetails);
                    socket.emit('offer', recieverId, peerConnection.localDescription, userDetails);
                });
                peerConnection.onicecandidate = function (event) {
                    if (event.candidate) {
                        socket.emit('candidate', recieverId, event.candidate);
                    }
                };
                peerConnection.ontrack = function (event) {
                    videoOtherPeer.srcObject = event.streams[0];
                    videoOtherPeer.play();
                };
            });
            socket.on('candidate', function (id, candidate) {
                peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
            });
            socket.on('bye', function (id) {
                peerConnection.removeTrack(this.sender);
                peerConnection.close();
                peerConnection = new RTCPeerConnection();
                peerConnections = {};
                delete peerConnections[id];
                video.hidden = true;
                videoOtherPeer.hidden = true;
                var stream = video.srcObject;
                stream.getTracks().forEach(function (track) {
                    track.stop();
                });
                var otherPeerStream = videoOtherPeer.srcObject;
                otherPeerStream.getTracks().forEach(function (track) {
                    track.stop();
                });
                socket.emit('imfree', socket.id);
                window.location.reload();
            });
        }
    };
    PrivadoComponent.prototype.readyToBattle = function () {
        this.socket.emit('readyToBattle', this._webSocketService.socket.id);
    };
    PrivadoComponent.prototype.createNamesInPage = function (userDetails, peerUserDetails) {
        var otherPeerWrapperDiv = document.getElementById('peerWrapper');
        var otherPeerH3 = document.createElement('h3');
        otherPeerH3.textContent = peerUserDetails.name;
        otherPeerH3.style.color = 'white';
        otherPeerWrapperDiv.appendChild(otherPeerH3);
        var myWrapperDiv = document.getElementById('myWrapper');
        var myH3 = document.createElement('h3');
        myH3.textContent = userDetails.name;
        myH3.style.color = 'white';
        myWrapperDiv.appendChild(myH3);
        this.peerObject = peerUserDetails;
    };
    PrivadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privado',
            template: __webpack_require__(/*! ./privado.component.html */ "./src/app/Views/privado/privado.component.html"),
            styles: [__webpack_require__(/*! ./privado.component.css */ "./src/app/Views/privado/privado.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"]])
    ], PrivadoComponent);
    return PrivadoComponent;
}());



/***/ }),

/***/ "./src/app/Views/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/Views/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin:0;\r\n    \r\n}\r\n#container{\r\n    height:100vh;\r\n}\r\n#row{\r\n    height:100%;\r\n    \r\n}\r\n#col{\r\n    box-shadow: 6px 6px 52px 10px rgba(3,11,56,1);\r\n    border-radius: 5px 5px 5px;\r\n\r\n    height:800px;\r\n    background-color:white;\r\n    opacity: 0.9;\r\n    filter: alpha(opacity=60);\r\n}\r\n#row-login{\r\n    height:100%;\r\n}\r\n#col-login-left{\r\n    border-right:1px solid black;\r\n    height:100%;\r\n    background-color:black;\r\n    background-image:\r\n    radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),\r\n    radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),\r\n    radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),\r\n    radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);\r\n    background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;\r\n    background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;\r\n   \r\n\r\n}\r\n#row-logo{\r\n    height:100%;\r\n}\r\n#col-logo{\r\n    height:50%;\r\n    text-align: center;\r\n    \r\n\r\n}\r\n#logo{\r\n    display:inline-block;\r\n    height:80%;\r\n    width:50%;\r\n    background-image:url('mic.png');\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    position: absolute;\r\n    top: 70%;\r\n     left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n#col-text-logo{\r\n    height:250px;\r\n    justify-content: end;\r\n}\r\n.balloon{\r\n    border-radius: 5px;\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    padding: 10px;\r\n    /* width: 420px; */\r\n    font-family: 'Indie Flower', cursive;\r\n    font-size: 2em\r\n    }\r\n.balloon:before {\r\n    content:\"\";\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-bottom: 20px solid whitesmoke;\r\n    border-right: 18px solid transparent;\r\n    border-left: 18px solid transparent;\r\n    margin: -30px 0 0 200px;\r\n    }\r\n#col-login-right{\r\n    height:100%;\r\n\r\n}\r\n#row-login-text{\r\n  \r\n}\r\n#row-login-form{\r\n\r\n}\r\n.example-full-width{\r\n    margin:20px;\r\n    width:50%;\r\n}\r\n\r\n\r\n\r\n  \r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVmlld3Mvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksUUFBUTs7QUFFWjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksV0FBVzs7QUFFZjtBQUVBO0lBSUksNkNBQTZDO0lBQzdDLDBCQUEwQjs7SUFFMUIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCOzs7O3FGQUlpRjtJQUNqRixtRUFBbUU7SUFDbkUsNERBQTREOzs7QUFHaEU7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjs7O0FBR3RCO0FBSUE7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLFNBQVM7SUFDVCwrQkFBK0M7SUFJL0Msd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsUUFBUTtLQUNQLFNBQVM7SUFDViwrQkFBK0I7QUFDbkM7QUFFQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDO0lBQ0E7QUFFQTtJQUNBLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyx1QkFBdUI7SUFDdkI7QUFJSjtJQUNJLFdBQVc7O0FBRWY7QUFFQTs7QUFFQTtBQUVBOztBQUVBO0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvVmlld3Mvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgXHJcbn1cclxuI2NvbnRhaW5lcntcclxuICAgIGhlaWdodDoxMDB2aDtcclxufVxyXG5cclxuI3Jvd3tcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgXHJcbn1cclxuXHJcbiNjb2x7XHJcbiBcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNnB4IDZweCA1MnB4IDEwcHggcmdiYSgzLDExLDU2LDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiA2cHggNnB4IDUycHggMTBweCByZ2JhKDMsMTEsNTYsMSk7XHJcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDUycHggMTBweCByZ2JhKDMsMTEsNTYsMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweDtcclxuXHJcbiAgICBoZWlnaHQ6ODAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTYwKTtcclxufVxyXG5cclxuI3Jvdy1sb2dpbntcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG4jY29sLWxvZ2luLWxlZnR7XHJcbiAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgIHJhZGlhbC1ncmFkaWVudCh3aGl0ZSwgcmdiYSgyNTUsMjU1LDI1NSwuMikgMnB4LCB0cmFuc3BhcmVudCA0MHB4KSxcclxuICAgIHJhZGlhbC1ncmFkaWVudCh3aGl0ZSwgcmdiYSgyNTUsMjU1LDI1NSwuMTUpIDFweCwgdHJhbnNwYXJlbnQgMzBweCksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQod2hpdGUsIHJnYmEoMjU1LDI1NSwyNTUsLjEpIDJweCwgdHJhbnNwYXJlbnQgNDBweCksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwuNCksIHJnYmEoMjU1LDI1NSwyNTUsLjEpIDJweCwgdHJhbnNwYXJlbnQgMzBweCk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDU1MHB4IDU1MHB4LCAzNTBweCAzNTBweCwgMjUwcHggMjUwcHgsIDE1MHB4IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCA0MHB4IDYwcHgsIDEzMHB4IDI3MHB4LCA3MHB4IDEwMHB4O1xyXG4gICBcclxuXHJcbn1cclxuI3Jvdy1sb2dve1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbiNjb2wtbG9nb3tcclxuICAgIGhlaWdodDo1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG5cclxuI2xvZ297XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDo4MCU7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi4uLy4uLy4uL2Fzc2V0cy9taWMucG5nXCIpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDcwJTtcclxuICAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG59XHJcblxyXG4jY29sLXRleHQtbG9nb3tcclxuICAgIGhlaWdodDoyNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcblxyXG4uYmFsbG9vbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLyogd2lkdGg6IDQyMHB4OyAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAyZW1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJhbGxvb246YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDE4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IC0zMHB4IDAgMCAyMDBweDtcclxuICAgIH1cclxuICBcclxuXHJcblxyXG4jY29sLWxvZ2luLXJpZ2h0e1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcblxyXG59XHJcblxyXG4jcm93LWxvZ2luLXRleHR7XHJcbiAgXHJcbn1cclxuXHJcbiNyb3ctbG9naW4tZm9ybXtcclxuXHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGh7XHJcbiAgICBtYXJnaW46MjBweDtcclxuICAgIHdpZHRoOjUwJTtcclxufVxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Views/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/Views/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"container\">\r\n\r\n  <div class=\"row justify-content-center  align-items-center\" id=\"row\">\r\n    <div id=\"col\" class=\"col-lg-10 col-md-12 col-sm-12\">\r\n      <div class=\"row\" id=\"row-login\">\r\n        <div class=\"col-lg-6 col-md-12 col-sm-12\" id=\"col-login-left\">\r\n          <div class=\"row justify-content-center align-items-center\" id=\"row-logo\">\r\n            <div class=\"col-lg-12 text-center align-items-bottom\" id=\"col-logo\">\r\n              <div id=\"logo\"></div>\r\n            </div>\r\n            <div class=\"col-lg-8\" id=\"col-text-logo\">\r\n                <div class=\"balloon\">\r\n                    Asi que sabes improvisar, no?... Demuestralo!\r\n                    </div>\r\n                   \r\n            </div>\r\n            \r\n          </div>\r\n       \r\n        </div>\r\n        <div class=\"col-lg-6 col-md-12 col-sm-12\" id=\"col-login-right\">\r\n          <div class=\"row justify-content-center\">\r\n            <img src=\"../../../assets/logsignup3.png\" height=200  style=\"margin-top:50px;margin-bottom:40px;\" alt=\"\">\r\n\r\n        </div>\r\n\r\n        <!-- <div class=\"row justify-content-center align-items-center\" id=\"row-login-text\" style=\"margin-bottom:30px;\">\r\n\r\n          <div class=\"col-lg-12 text-center\">\r\n\r\n            <h3 style=\"font-family:Cambria;font-weight:100;\">Signup</h3>\r\n\r\n          </div>\r\n        </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n          \r\n          <div class=\"row justify-content-center\" id=\"row-login-form\">\r\n            <div class=\"col-lg-7 text-center\">\r\n              <form class=\"example-form\" (ngSubmit)=\"signUp()\">\r\n                  <div class=\"row justify-content-center\">\r\n                      <mat-form-field class=\"example-full-width\" style=\" margin-bottom: -10px\">\r\n                          <input matInput placeholder=\"Name\" [formControl]=\"nameFormControl\">\r\n                          <mat-error *ngIf=\"nameFormControl.hasError('required')\">\r\n                            Name is <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                  </div>\r\n               \r\n                <div class=\"row justify-content-center\">\r\n                    <mat-form-field class=\"example-full-width\" style=\" margin-bottom: -10px\">\r\n                        <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\r\n                        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n                          Please enter a valid email address\r\n                        </mat-error>\r\n                        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n                          Email is <strong>required</strong>\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                </div>\r\n               \r\n                <div class=\"row justify-content-center\">\r\n                  <mat-form-field class=\"example-full-width\" style=\" margin-bottom: -10px\">\r\n                    <input matInput type=\"password\" placeholder=\"Password\" [formControl]=\"passwordFormControl\">\r\n                    <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\r\n                      Password is <strong>required</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n      \r\n                </div>\r\n                \r\n                <br />\r\n                <br />\r\n\r\n                <button mat-raised-button color=\"primary\" type=\"submit\">SignUp</button>\r\n                <br />\r\n                <br />\r\n                <a href=\"#\" class=\"btn btn-link\" (click)='goToLogin()'>already have an account?</a>\r\n                <button (click)=\"nextPage()\" class=\"btn btn-link\">forgot password?</button>\r\n                <br />\r\n              </form>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<button (click)=\"nextPage()\">Go to home</button>"

/***/ }),

/***/ "./src/app/Views/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/Views/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Services_Models_userModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/Models/userModel */ "./src/app/Services/Models/userModel.ts");
/* harmony import */ var src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/data.service */ "./src/app/Services/data.service.ts");






var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, _dataService) {
        this.router = router;
        this._dataService = _dataService;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.resetLoginForm();
    };
    SignupComponent.prototype.nextPage = function () {
        this.router.navigate(['general']);
    };
    SignupComponent.prototype.goToLogin = function () {
        this.router.navigate(['']);
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        var newUser = new src_app_Services_Models_userModel__WEBPACK_IMPORTED_MODULE_4__["User"]();
        newUser.Name = this.nameFormControl.value;
        newUser.EmailAddress = this.emailFormControl.value;
        newUser.Password = this.passwordFormControl.value;
        this._dataService.createUser(newUser).subscribe(function (x) {
            if (x) {
                _this.userDetails = x;
                sessionStorage.setItem("userDetails", JSON.stringify(x));
                _this.router.navigate(['general']);
            }
        });
    };
    SignupComponent.prototype.resetLoginForm = function () {
        this.emailFormControl.clearValidators();
        this.passwordFormControl.clearValidators();
        this.emailFormControl.reset();
        this.passwordFormControl.reset();
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/Views/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/Views/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_Services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Views_general_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Views/general/general.component */ "./src/app/Views/general/general.component.ts");
/* harmony import */ var _Views_privado_privado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Views/privado/privado.component */ "./src/app/Views/privado/privado.component.ts");
/* harmony import */ var _Views_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Views/login/login.component */ "./src/app/Views/login/login.component.ts");
/* harmony import */ var _Views_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Views/signup/signup.component */ "./src/app/Views/signup/signup.component.ts");







var routes = [
    { path: '', component: _Views_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'signup', component: _Views_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'general', component: _Views_general_general_component__WEBPACK_IMPORTED_MODULE_3__["GeneralComponent"] },
    { path: 'privado', component: _Views_privado_privado_component__WEBPACK_IMPORTED_MODULE_4__["PrivadoComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Freestylep2pUI';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Views_privado_privado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Views/privado/privado.component */ "./src/app/Views/privado/privado.component.ts");
/* harmony import */ var _Views_general_general_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Views/general/general.component */ "./src/app/Views/general/general.component.ts");
/* harmony import */ var _Components_usercard_usercard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/usercard/usercard.component */ "./src/app/Components/usercard/usercard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _Views_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Views/login/login.component */ "./src/app/Views/login/login.component.ts");
/* harmony import */ var _Views_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Views/signup/signup.component */ "./src/app/Views/signup/signup.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









//Material 












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _Views_privado_privado_component__WEBPACK_IMPORTED_MODULE_5__["PrivadoComponent"],
                _Views_general_general_component__WEBPACK_IMPORTED_MODULE_6__["GeneralComponent"],
                _Components_usercard_usercard_component__WEBPACK_IMPORTED_MODULE_7__["UsercardComponent"],
                _Views_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _Views_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                //Material
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"]
            ],
            entryComponents: [_Views_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\SoftwareDevelopment\P2P\CoachingProjectWithAlvin\FreestyleP2P - Copy\Freestylep2pUI\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map