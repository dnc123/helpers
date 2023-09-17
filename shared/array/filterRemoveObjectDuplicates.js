"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(items, targetKey) {
    return items.filter((itemA, index) => {
        return items
            .map((itemB) => itemB[targetKey])
            .indexOf(itemA[targetKey]) === index;
    });
}
exports.default = default_1;
