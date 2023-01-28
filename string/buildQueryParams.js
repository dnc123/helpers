"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(keyValQueryParams) {
    if (keyValQueryParams === void 0) { keyValQueryParams = {}; }
    return Object.keys(keyValQueryParams)
        .filter(function (key) {
        return keyValQueryParams[key] !== null
            && typeof keyValQueryParams[key] !== "undefined";
    })
        .map(function (key) {
        return "".concat(key, "=").concat(keyValQueryParams[key]);
    })
        .join("&");
}
exports.default = default_1;
