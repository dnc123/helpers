"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recentUniquelyGeneratedStrings = [];
function default_1(hashStrength = 12) {
    let uniqueString;
    do {
        const possibleCharacters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
        let randomString = '';
        for (let i = 0; i < hashStrength; i++) {
            randomString += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        }
        uniqueString = randomString;
    } while (recentUniquelyGeneratedStrings.includes(uniqueString));
    recentUniquelyGeneratedStrings.push(uniqueString);
    setTimeout(recentUniquelyGeneratedStrings.unshift, 0);
    return uniqueString;
}
exports.default = default_1;
