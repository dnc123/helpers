"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timers = {};
function setTimer(uniqueKey, timeThresholdMS, callback) {
    if (timers[uniqueKey]) {
        clearTimeout(timers[uniqueKey]);
    }
    timers[uniqueKey] = setTimeout(callback, timeThresholdMS);
}
exports.default = setTimer;
