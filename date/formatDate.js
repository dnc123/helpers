"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
function default_1(dateObject, isYearIncluded, isMonthIncluded, isDayIncluded) {
    if (isYearIncluded === void 0) { isYearIncluded = true; }
    if (isMonthIncluded === void 0) { isMonthIncluded = true; }
    if (isDayIncluded === void 0) { isDayIncluded = true; }
    if (typeof dateObject === "string") {
        dateObject = new Date(dateObject);
    }
    var dateArr = [];
    if (isYearIncluded) {
        dateArr.push("yyyy");
    }
    if (isMonthIncluded) {
        dateArr.push("MM");
    }
    if (isDayIncluded) {
        dateArr.push("dd");
    }
    return (0, date_fns_1.format)(dateObject, dateArr.join("-"));
}
exports.default = default_1;
