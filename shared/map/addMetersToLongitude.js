"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function default_1(latitude, longitude, metersToAdd) {
    return longitude + (metersToAdd * constants_1.ONE_METER_IN_DEGREES) / Math.cos(latitude * (Math.PI / 180));
}
exports.default = default_1;
