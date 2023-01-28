"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recentUniquelyGeneratedStrings = [];
function default_1(hashStrength) {
    if (hashStrength === void 0) { hashStrength = 12; }
    var uniqueString;
    do {
        var possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var randomString = "";
        for (var i = 0; i < hashStrength; i++) {
            randomString += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        }
        uniqueString = "".concat(randomString).concat(+new Date());
    } while (recentUniquelyGeneratedStrings.includes(uniqueString));
    recentUniquelyGeneratedStrings.push(uniqueString);
    setTimeout(function () {
        recentUniquelyGeneratedStrings.unshift();
    }, 0);
    return uniqueString;
}
exports.default = default_1;
