"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
function default_1(value, salt) {
    return (0, crypto_1.createHmac)(`sha256`, salt)
        .update(value)
        .digest(`hex`);
}
exports.default = default_1;
