"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(targetNumber, decimalPlaces) {
    if (decimalPlaces === void 0) { decimalPlaces = 0; }
    return +(Math.round(Number(targetNumber + "e+".concat(decimalPlaces))) + "e-".concat(decimalPlaces));
}
exports.default = default_1;
