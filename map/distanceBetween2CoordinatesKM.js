"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var toRad_1 = __importDefault(require("./toRad"));
var round_1 = __importDefault(require("../number/round"));
function default_1(lat1, lng1, lat2, lng2, roundToDecimals) {
    var dLat = (0, toRad_1.default)(lat2 - lat1);
    var dLon = (0, toRad_1.default)(lng2 - lng1);
    lat1 = (0, toRad_1.default)(lat1);
    lat2 = (0, toRad_1.default)(lat2);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distanceKM = constants_1.EARTH_RADIUS_KM * c;
    return typeof roundToDecimals === "number"
        ? (0, round_1.default)(distanceKM, roundToDecimals)
        : distanceKM;
}
exports.default = default_1;
