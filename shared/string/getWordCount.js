"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(text) {
    const trimmedText = text.trim();
    const words = trimmedText.split(/\s+/);
    return words.length;
}
exports.default = default_1;
