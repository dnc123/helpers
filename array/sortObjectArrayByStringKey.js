"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(array, key) {
    return array.sort(function (a, b) {
        return a[key].localeCompare(b[key]);
    });
}
exports.default = default_1;
