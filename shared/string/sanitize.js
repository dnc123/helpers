"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(value) {
    return value.toString()
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#39;')
        .replace(/"/g, '&#34;');
}
exports.default = default_1;
