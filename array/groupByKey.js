"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(array, targetKey) {
    return array.reduce(function (accumulator, item) {
        accumulator[item[targetKey]] = accumulator[item[targetKey]] || [];
        accumulator[item[targetKey]].push(item);
        return accumulator;
    }, {});
}
exports.default = default_1;
