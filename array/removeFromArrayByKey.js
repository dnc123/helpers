"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(targetArr, key, isEqualTo) {
    targetArr.splice(targetArr.findIndex(function (item) { return item[key] === isEqualTo; }), 1);
}
exports.default = default_1;
