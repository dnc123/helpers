"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(value) {
    try {
        JSON.parse(value);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.default = default_1;
