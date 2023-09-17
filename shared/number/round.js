"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(targetNumber, decimalPlaces = 0) {
    return +(Math.round(Number(targetNumber + `e+${decimalPlaces}`)) + `e-${decimalPlaces}`);
}
exports.default = default_1;
