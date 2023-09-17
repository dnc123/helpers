"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(base64) {
    const byteString = new Buffer(base64, 'base64').toString('binary');
    const ab = new Buffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return ab;
}
exports.default = default_1;
