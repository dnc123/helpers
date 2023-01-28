"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timers = {};
function default_1(uniqueKey, timeThresholdMS, callback) {
    if (timers[uniqueKey]) {
        clearTimeout(timers[uniqueKey]);
    }
    timers[uniqueKey] = setTimeout(callback, timeThresholdMS);
}
exports.default = default_1;
