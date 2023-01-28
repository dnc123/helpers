"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
function default_1(targetDate) {
    return (0, date_fns_1.subMinutes)(targetDate, targetDate.getTimezoneOffset());
}
exports.default = default_1;
