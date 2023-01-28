"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var formatDate_1 = __importDefault(require("./formatDate"));
var formatTime_1 = __importDefault(require("./formatTime"));
function default_1(dateObject, isYearIncluded, isMonthIncluded, isDayIncluded, isHoursIncluded, isMinutesIncluded, isSecondsIncluded, isMillisecondsIncluded) {
    if (isYearIncluded === void 0) { isYearIncluded = true; }
    if (isMonthIncluded === void 0) { isMonthIncluded = true; }
    if (isDayIncluded === void 0) { isDayIncluded = true; }
    if (isHoursIncluded === void 0) { isHoursIncluded = true; }
    if (isMinutesIncluded === void 0) { isMinutesIncluded = true; }
    if (isSecondsIncluded === void 0) { isSecondsIncluded = true; }
    if (isMillisecondsIncluded === void 0) { isMillisecondsIncluded = false; }
    var formattedDate = (0, formatDate_1.default)(dateObject, isYearIncluded, isMonthIncluded, isDayIncluded);
    var formattedTime = (0, formatTime_1.default)(dateObject, isHoursIncluded, isMinutesIncluded, isSecondsIncluded, isMillisecondsIncluded);
    return (0, date_fns_1.format)(dateObject, "".concat(formattedDate, " ").concat(formattedTime));
}
exports.default = default_1;
