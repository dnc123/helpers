"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(items, targetKey) {
    return items.filter(function (itemA, index) {
        return items
            .map(function (itemB) { return itemB[targetKey]; })
            .indexOf(itemA[targetKey]) === index;
    });
}
exports.default = default_1;
