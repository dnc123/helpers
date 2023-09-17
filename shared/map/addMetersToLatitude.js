"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function default_1(latitude, metersToAdd) {
    return latitude + (metersToAdd * constants_1.ONE_METER_IN_DEGREES);
}
exports.default = default_1;
