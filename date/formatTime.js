"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
function default_1(dateObject, isHoursIncluded, isMinutesIncluded, isSecondsIncluded, isMillisecondsIncluded) {
    if (isHoursIncluded === void 0) { isHoursIncluded = true; }
    if (isMinutesIncluded === void 0) { isMinutesIncluded = true; }
    if (isSecondsIncluded === void 0) { isSecondsIncluded = true; }
    if (isMillisecondsIncluded === void 0) { isMillisecondsIncluded = false; }
    var timeArr = [];
    if (isHoursIncluded) {
        timeArr.push("HH");
    }
    if (isMinutesIncluded) {
        timeArr.push("mm");
    }
    if (isSecondsIncluded) {
        timeArr.push("ss");
    }
    var timeString = (0, date_fns_1.format)(dateObject, timeArr.join(":"));
    return "".concat(timeString).concat(isMillisecondsIncluded ? ".SSS" : "");
}
exports.default = default_1;
