"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(number) {
    var getCorrectAffix = function (affix) {
        return number.toString().substr(-2, 1) === "1" && number > 10
            ? "th"
            : affix;
    };
    switch (number.toString().substr(-1)) {
        case "1":
            return getCorrectAffix("st");
        case "2":
            return getCorrectAffix("nd");
        case "3":
            return getCorrectAffix("rd");
        default:
            return "th";
    }
}
exports.default = default_1;
