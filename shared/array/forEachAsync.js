"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}
exports.default = default_1;
