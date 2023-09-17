"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
function default_1(token, secret) {
    const parts = token.split('.');
    if (parts.length !== 3) {
        throw new Error('Invalid token');
    }
    const [encodedHeader, encodedPayload, signature] = parts;
    const decodedPayload = base64UrlDecode(encodedPayload);
    const expectedSignature = generateHMAC(encodedHeader + '.' + encodedPayload, secret);
    if (signature !== expectedSignature) {
        throw new Error('Invalid token');
    }
    const payload = JSON.parse(decodedPayload);
    const expiration = payload.exp;
    const currentTime = Math.floor(Date.now() / 1000);
    if (expiration && currentTime > expiration) {
        throw new Error('Token has expired');
    }
    return payload;
}
exports.default = default_1;
function base64UrlDecode(str) {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    while (str.length % 4) {
        str += '=';
    }
    return Buffer.from(str, 'base64').toString('utf-8');
}
function generateHMAC(data, secret) {
    const hmac = crypto_1.default.createHmac('sha256', secret);
    hmac.update(data);
    return hmac
        .digest('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}
