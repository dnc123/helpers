"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
function default_1(dates = []) {
    if (!Array.isArray(dates)) {
        dates = [dates];
    }
    let earliestDate = dates[0];
    dates.forEach((date) => {
        if ((0, date_fns_1.isAfter)(earliestDate, date)) {
            earliestDate = date;
        }
    });
    return earliestDate;
}
exports.default = default_1;
