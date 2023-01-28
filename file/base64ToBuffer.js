"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(base64) {
    var byteString = new Buffer(base64, 'base64').toString('binary');
    var ab = new Buffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return ab;
}
exports.default = default_1;
