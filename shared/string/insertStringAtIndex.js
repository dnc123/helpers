"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(inputString, stringToInsert, targetIndex) {
    return inputString.substring(0, targetIndex)
        + stringToInsert
        + inputString.substring(targetIndex, inputString.length);
}
exports.default = default_1;
