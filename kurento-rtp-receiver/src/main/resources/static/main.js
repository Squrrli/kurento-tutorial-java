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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n<div>\n    <app-map></app-map>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Map';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _web_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web-socket.service */ "./src/app/web-socket.service.ts");
/* harmony import */ var _stream_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stream.service */ "./src/app/stream.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [
                _web_socket_service__WEBPACK_IMPORTED_MODULE_5__["WebSocketService"],
                _stream_service__WEBPACK_IMPORTED_MODULE_6__["StreamService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\r\n    height: 75vh;\r\n    border: 1px solid seagreen;\r\n    margin: 5px;\r\n}"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\r\n<div id=\"info\">\r\n    <input #lat id=\"lat\" type=\"text\" placeholder=\"lat (Decimal)\"><input #lng id=\"lng\" type=\"text\" placeholder=\"lng (Decimal)\">\r\n    <br>\r\n    <input #alt id=\"alt\" type=\"number\" placeholder=\"alt (m)\" required>\r\n    <input #brng id=\"bearing\" type=\"number\" placeholder=\"bearing (deg)\">\r\n    <br>\r\n    <button class=\"btn\" type=\"submit\" (click)=\"generateVideoLayer(lat.value, lng.value, alt.value, brng.value)\">Sumbit</button>\r\n</div>\r\n<!-- hidden video element: source of video for distortableVideoOverlay plugin -->\r\n<div style=\"display: none;\" id=\"drone footage source\">\r\n    <video src=\"../../assets/video/breaking-waves.mp4\" autoplay loop alt=\"breaking waves\"></video>\r\n</div>"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_distortable_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-distortable-video */ "./node_modules/leaflet-distortable-video/dist/index.js");
/* harmony import */ var _stream_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stream.service */ "./src/app/stream.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../../node_modules/@types/node/index.d.ts"/>





var MapComponent = /** @class */ (function () {
    // inject WebSocketService to be able to access messages from Kurento Media Sever
    function MapComponent(stream) {
        this.stream = stream;
        this.defaultZoom = 12;
        this.defaultCoords = leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"](51.5777, -9.0080);
        this.mapOptions = {
            minZoom: 1,
            maxZoom: 20,
            id: 'mapbox.satellite',
            accessToken: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].MAPBOX_API_KEY
        };
        // coords of video corners
        // to be determined by drone coord and alt - getCorner(droneCenter: L.Latlng): L.latlng[]
        this.corners = {
            topLeft: leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"]([1, 5]),
            topRight: leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"]([1, 6]),
            bottomRight: leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"]([0, 6]),
            bottomLeft: leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"]([0, 5])
        };
        this.FOV = 94; // fov of zenmuse x3 according to DJI website
    }
    MapComponent.prototype.ngOnInit = function () {
        // subscribe to socket message observable
        this.stream.messages.subscribe(function (msg) {
            console.log(msg);
        });
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"]('map').setView(this.defaultCoords, this.defaultZoom);
        leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', this.mapOptions).addTo(this.map);
    };
    MapComponent.prototype.generateVideoLayer = function (lat1, lng1, alt, hding) {
        this.getCorners(lat1, lng1, alt, hding);
        // const waves = L.distortableVideoOverlay('../../assets/video/breaking-waves.mp4', this.corners, {opacity: 0.6}).addTo(this.map);
        var waves = leaflet__WEBPACK_IMPORTED_MODULE_2__["distortableVideoOverlay"](document.querySelector('video'), this.corners, { opacity: 0.6 }).addTo(this.map);
    };
    /* ----------------------------------
     * calculate coords of corners given drone center c, and altitude alt
     * BEFORE rotation => up on screen = north
     ----------------------------------- */
    MapComponent.prototype.getCorners = function (lat1, lng1, alt, hding) {
        this.droneCenter = new leaflet__WEBPACK_IMPORTED_MODULE_2__["LatLng"](Number(lat1), Number(lng1));
        this.map.panTo(this.droneCenter);
        console.log(this.droneCenter.toString());
        var coords = []; // coords of opposite corners (topRight, bottomLeft)
        var R = this.radiusAtLat(Number(lat1));
        var d = this.distanceFromC(Number(alt));
        // get arctangent of FOV-> constant as FOV has aspect ratio 4:3
        var theta = (Math.atan(4 / 3));
        for (var i = 0; i < 2; i++) {
            // caluclate new Lat
            var temp1 = Math.sin(Number(lat1) * (Math.PI / 180)) * Math.cos(d / R);
            var temp2 = Math.cos(Number(lat1) * (Math.PI / 180)) * Math.sin(d / R) * Math.cos(theta);
            var lat2 = (Math.asin(temp1 + temp2) * (180 / Math.PI));
            // calculate new Lng
            var lng2 = Number(lng1) + (Math.atan2(Math.sin(theta) * Math.sin(d / R) * Math.cos((Number(lat1)) * (Math.PI / 180)), Math.cos(d / R) - Math.sin(Number(lat1) * (Math.PI / 180)) * Math.sin(lat2 * (Math.PI / 180))) * (180 / Math.PI));
            console.log(lat2 + ': lat2,  ' + lng2 + ' :lng2');
            coords.push(new leaflet__WEBPACK_IMPORTED_MODULE_2__["LatLng"](lat2, lng2));
            theta += (Math.PI); // add 180deg to theta to get opposite corner
        }
        // test polygon
        leaflet__WEBPACK_IMPORTED_MODULE_2__["polygon"]([[coords[1].lat, coords[0].lng],
            [coords[1].lat, coords[1].lng],
            [coords[0].lat, coords[1].lng],
            [coords[0].lat, coords[0].lng]], { color: 'red', opacity: 0.05 }).addTo(this.map);
        var coordsToRot = [
            new leaflet__WEBPACK_IMPORTED_MODULE_2__["LatLng"](coords[1].lat, coords[0].lng),
            new leaflet__WEBPACK_IMPORTED_MODULE_2__["LatLng"](coords[1].lat, coords[1].lng),
            new leaflet__WEBPACK_IMPORTED_MODULE_2__["LatLng"](coords[0].lat, coords[1].lng),
            new leaflet__WEBPACK_IMPORTED_MODULE_2__["LatLng"](coords[0].lat, coords[0].lng)
        ];
        // apply rotation to bounds
        this.rotateCoordAroundCenter(coordsToRot, Number(hding));
    };
    MapComponent.prototype.rotateCoordAroundCenter = function (coords, rot) {
        for (var i = 0; i < coords.length; i++) {
            // translate coordinates to (0,0) to rotate
            var tX = coords[i].lat - this.droneCenter.lat;
            var tY = coords[i].lng - this.droneCenter.lng;
            // apply rotation to each coord
            coords[i].lat = (tX * Math.cos(rot * Math.PI / 180) - tY * Math.sin(rot * Math.PI / 180));
            coords[i].lng = (tX * Math.sin(rot * Math.PI / 180) + tY * Math.cos(rot * Math.PI / 180));
            coords[i].lat += this.droneCenter.lat;
            coords[i].lng += this.droneCenter.lng;
        }
        this.corners.topLeft = coords[0];
        this.corners.topRight = coords[1];
        this.corners.bottomRight = coords[2];
        this.corners.bottomLeft = coords[3];
    };
    MapComponent.prototype.radiusAtLat = function (lat) {
        var rEq = 6378137; // radius of earth at equator (m)
        var rPl = 6356752; // radius of earth at poles (m)
        var top = this.sqr(this.sqr(rEq) * Math.cos(lat * Math.PI / 180)) + this.sqr(this.sqr(rPl) * Math.sin(lat * Math.PI / 180));
        var bot = this.sqr(rEq * Math.cos(lat * Math.PI / 180)) + this.sqr(rPl * Math.sin(lat * Math.PI / 180));
        return (Math.sqrt(top / bot));
    };
    // calculate distance of corners from center given an altitude alt
    MapComponent.prototype.distanceFromC = function (alt) {
        return alt * (Math.tan((this.FOV / 2) * Math.PI / 180));
    };
    MapComponent.prototype.sqr = function (x) {
        return x * x;
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_stream_service__WEBPACK_IMPORTED_MODULE_4__["StreamService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/stream.service.ts":
/*!***********************************!*\
  !*** ./src/app/stream.service.ts ***!
  \***********************************/
/*! exports provided: StreamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamService", function() { return StreamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-socket.service */ "./src/app/web-socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StreamService = /** @class */ (function () {
    function StreamService(wsService) {
        this.wsService = wsService;
        this.messages = wsService
            .connect()
            .map(function (response) {
            return response;
        });
    }
    StreamService.prototype.sendMessage = function (msg) {
        this.messages.next(msg);
    };
    StreamService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]])
    ], StreamService);
    return StreamService;
}());



/***/ }),

/***/ "./src/app/web-socket.service.ts":
/*!***************************************!*\
  !*** ./src/app/web-socket.service.ts ***!
  \***************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "../node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "../node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.connect = function () {
        var _this = this;
        // test Websocket for Java Rtp Receiver tutorial
        var ws = new WebSocket('wss://' + location.host + '/player');
        console.log('connect to ws at ' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ws_url);
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ws_url);
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (obs) {
            _this.socket.on('message', function (data) {
                console.log('Message received');
                obs.next(data);
            });
            return function () {
                _this.socket.disoconnect();
            };
        });
        var observer = {
            next: function (data) {
                _this.socket.emit('message', JSON.stringify(data));
            },
        };
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Subject"].create(observer, observable);
    };
    WebSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WebSocketService);
    return WebSocketService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    MAPBOX_API_KEY: 'pk.eyJ1Ijoic3F1cnJsaSIsImEiOiJjamhxY2lkeTcxOG9jMzdudTZkYm9jbmlkIn0.zvZPOE4XHex2E18F0FSdSg',
    ws_url: 'ws://localhost:8080'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\adamom\mapStream\src\main.ts */"./src/main.ts");


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