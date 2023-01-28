"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(targetArray) {
    var _a;
    if (Array.isArray(targetArray) && targetArray.length <= 1) {
        return;
    }
    for (var i = targetArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [targetArray[j], targetArray[i]], targetArray[i] = _a[0], targetArray[j] = _a[1];
    }
}
exports.default = default_1;
