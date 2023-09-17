"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(array, key) {
    return array.reduce((accumulator, item) => {
        const value = item[key];
        accumulator[value] = accumulator[value] || [];
        accumulator[value].push(item);
        return accumulator;
    }, {});
}
exports.default = default_1;
