"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(bytes) {
    var availableSizeTypes = ["B", "KB", "MB", "GB", "TB"];
    var targetSizeIndex = Math.floor(Math.log(bytes) / Math.log(1024));
    return targetSizeIndex === 0
        ? "".concat(bytes, " ").concat(availableSizeTypes[targetSizeIndex])
        : "".concat((bytes / Math.pow(1024, targetSizeIndex)).toFixed(2), " ").concat(availableSizeTypes[targetSizeIndex]);
}
exports.default = default_1;
