"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(value) {
    return value.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}
exports.default = default_1;