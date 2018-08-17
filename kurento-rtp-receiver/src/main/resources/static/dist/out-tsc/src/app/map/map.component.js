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
///<reference path="../../../node_modules/@types/node/index.d.ts"/>
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var L = require("leaflet");
require("leaflet-distortable-video");
var stream_service_1 = require("../stream.service");
var message_1 = require("../message");
var MapComponent = /** @class */ (function () {
    // inject WebSocketService to be able to access messages from Kurento Media Sever
    function MapComponent(stream) {
        this.stream = stream;
        this.defaultZoom = 12;
        this.defaultCoords = L.latLng(51.5777, -9.0080);
        this.mapOptions = {
            minZoom: 1,
            maxZoom: 20,
            id: 'mapbox.satellite',
            accessToken: environment_1.environment.MAPBOX_API_KEY
        };
        // coords of video corners
        // to be determined by drone coord and alt - getCorner(droneCenter: L.Latlng): L.latlng[]
        this.corners = {
            topLeft: L.latLng([1, 5]),
            topRight: L.latLng([1, 6]),
            bottomRight: L.latLng([0, 6]),
            bottomLeft: L.latLng([0, 5])
        };
        this.FOV = 94; // fov of zenmuse x3 according to DJI website
    }
    MapComponent.prototype.ngOnInit = function () {
        // subscribe to socket message observable
        this.stream.messages.subscribe(function (msg) {
            console.log(msg);
        });
        // Send message to KMS to begin stream
        this.stream.sendMessage(new message_1.Message('start', null));
        this.map = L.map('map').setView(this.defaultCoords, this.defaultZoom);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', this.mapOptions).addTo(this.map);
    };
    MapComponent.prototype.generateVideoLayer = function (lat1, lng1, alt, hding) {
        // this.stream.sendMessage('[New Coordinates::] Lat:' + lat1 + ',Lng:' + lng1 + ',Alt:' + alt + ',Heading:' + hding );
        this.getCorners(lat1, lng1, alt, hding);
        // const waves = L.distortableVideoOverlay('../../assets/video/breaking-waves.mp4', this.corners, {opacity: 0.6}).addTo(this.map);
        var waves = L.distortableVideoOverlay(document.querySelector('video'), this.corners, { opacity: 0.6 }).addTo(this.map);
    };
    /* ----------------------------------
     * calculate coords of corners given drone center c, and altitude alt
     * BEFORE rotation => up on screen = north
     ----------------------------------- */
    MapComponent.prototype.getCorners = function (lat1, lng1, alt, hding) {
        this.droneCenter = new L.LatLng(Number(lat1), Number(lng1));
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
            coords.push(new L.LatLng(lat2, lng2));
            theta += (Math.PI); // add 180deg to theta to get opposite corner
        }
        // test polygon
        L.polygon([[coords[1].lat, coords[0].lng],
            [coords[1].lat, coords[1].lng],
            [coords[0].lat, coords[1].lng],
            [coords[0].lat, coords[0].lng]], { color: 'red', opacity: 0.05 }).addTo(this.map);
        var coordsToRot = [
            new L.LatLng(coords[1].lat, coords[0].lng),
            new L.LatLng(coords[1].lat, coords[1].lng),
            new L.LatLng(coords[0].lat, coords[1].lng),
            new L.LatLng(coords[0].lat, coords[0].lng)
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
        core_1.Component({
            selector: 'app-map',
            templateUrl: './map.component.html',
            styleUrls: ['./map.component.css']
        }),
        __metadata("design:paramtypes", [stream_service_1.StreamService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map