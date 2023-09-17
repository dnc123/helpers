"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(bytes) {
    const availableSizeTypes = [`B`, `KB`, `MB`, `GB`, `TB`];
    const targetSizeIndex = Math.floor(Math.log(bytes) / Math.log(1024));
    return targetSizeIndex === 0
        ? `${bytes} ${availableSizeTypes[targetSizeIndex]}`
        : `${(bytes / Math.pow(1024, targetSizeIndex)).toFixed(2)} ${availableSizeTypes[targetSizeIndex]}`;
}
exports.default = default_1;
