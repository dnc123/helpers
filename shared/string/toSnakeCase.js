"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(input) {
    const alphanumeric = input.replace(/[^a-zA-Z0-9]/g, ' ');
    const words = alphanumeric.split(/\s+/);
    const sanitizedWords = words.filter((word) => {
        return word.length > 0;
    });
    return sanitizedWords
        .join('_')
        .toLowerCase();
}
exports.default = default_1;
