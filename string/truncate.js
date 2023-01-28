"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(text, stopIndex) {
    return "".concat(text.slice(0, stopIndex)).concat(stopIndex < text.length ? "..." : "");
}
exports.default = default_1;
