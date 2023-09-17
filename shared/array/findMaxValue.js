"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(array) {
    return array.reduce((a, b) => {
        return Math.max(a, b);
    });
}
exports.default = default_1;
