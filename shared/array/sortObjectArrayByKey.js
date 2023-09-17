"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(array, key, descending = false) {
    const order = descending ? -1 : 1;
    return array.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1 * order;
        }
        if (a[key] > b[key]) {
            return 1 * order;
        }
        return 0;
    });
}
exports.default = default_1;
