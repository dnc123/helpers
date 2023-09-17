"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
function default_1(dateObject, isHoursIncluded = true, isMinutesIncluded = true, isSecondsIncluded = true, isMillisecondsIncluded = false) {
    const timeArr = [];
    if (isHoursIncluded) {
        timeArr.push(`HH`);
    }
    if (isMinutesIncluded) {
        timeArr.push(`mm`);
    }
    if (isSecondsIncluded) {
        timeArr.push(`ss`);
    }
    const timeString = (0, date_fns_1.format)(dateObject, timeArr.join(`:`));
    return `${timeString}${isMillisecondsIncluded ? `.SSS` : ``}`;
}
exports.default = default_1;
