"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
function default_1(dates) {
    if (dates === void 0) { dates = []; }
    if (!Array.isArray(dates)) {
        dates = [dates];
    }
    var latestDate = dates[0];
    dates.forEach(function (date) {
        if ((0, date_fns_1.isAfter)(date, latestDate)) {
            latestDate = date;
        }
    });
    return latestDate;
}
exports.default = default_1;
