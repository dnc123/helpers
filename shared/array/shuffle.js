"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(targetArray) {
    if (Array.isArray(targetArray) && targetArray.length <= 1) {
        return;
    }
    for (let i = targetArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [targetArray[i], targetArray[j]] = [targetArray[j], targetArray[i]];
    }
}
exports.default = default_1;
