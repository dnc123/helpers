"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(text, stopIndex) {
    return `${text.slice(0, stopIndex)}${stopIndex < text.length ? `...` : ``}`;
}
exports.default = default_1;
