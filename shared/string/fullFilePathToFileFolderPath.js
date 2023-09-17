"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(filePath) {
    return filePath
        .split('/')
        .slice(0, -1)
        .join('/');
}
exports.default = default_1;
