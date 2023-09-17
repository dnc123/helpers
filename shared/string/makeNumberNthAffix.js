"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(number) {
    switch (number.toString().substr(-1)) {
        case `1`:
            return getCorrectAffix(`st`, number);
        case `2`:
            return getCorrectAffix(`nd`, number);
        case `3`:
            return getCorrectAffix(`rd`, number);
        default:
            return `th`;
    }
}
exports.default = default_1;
function getCorrectAffix(affix, number) {
    return number.toString().substr(-2, 1) === `1` && number > 10
        ? `th`
        : affix;
}
