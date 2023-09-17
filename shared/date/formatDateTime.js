"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const formatDate_1 = __importDefault(require("./formatDate"));
const formatTime_1 = __importDefault(require("./formatTime"));
function default_1(dateObject, isYearIncluded = true, isMonthIncluded = true, isDayIncluded = true, isHoursIncluded = true, isMinutesIncluded = true, isSecondsIncluded = true, isMillisecondsIncluded = false) {
    const formattedDate = (0, formatDate_1.default)(dateObject, isYearIncluded, isMonthIncluded, isDayIncluded);
    const formattedTime = (0, formatTime_1.default)(dateObject, isHoursIncluded, isMinutesIncluded, isSecondsIncluded, isMillisecondsIncluded);
    return (0, date_fns_1.format)(dateObject, `${formattedDate} ${formattedTime}`);
}
exports.default = default_1;
