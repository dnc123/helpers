"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(camelCase) {
    return camelCase.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}
exports.default = default_1;
