"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ONE_METER_IN_DEGREES = exports.EARTH_RADIUS_KM = void 0;
exports.EARTH_RADIUS_KM = 6378.137;
exports.ONE_METER_IN_DEGREES = (1 / ((2 * Math.PI / 360) * exports.EARTH_RADIUS_KM)) / 1000;
