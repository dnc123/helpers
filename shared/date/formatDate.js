"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
function default_1(dateObject, isYearIncluded = true, isMonthIncluded = true, isDayIncluded = true) {
    if (typeof dateObject === `string`) {
        dateObject = new Date(dateObject);
    }
    const dateArr = [];
    if (isYearIncluded) {
        dateArr.push(`yyyy`);
    }
    if (isMonthIncluded) {
        dateArr.push(`MM`);
    }
    if (isDayIncluded) {
        dateArr.push(`dd`);
    }
    return (0, date_fns_1.format)(dateObject, dateArr.join(`-`));
}
exports.default = default_1;
