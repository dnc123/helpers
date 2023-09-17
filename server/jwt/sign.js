"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const SECONDS_IN_YEAR = 31536000;
function default_1(payload, secret, expiresInSeconds = SECONDS_IN_YEAR) {
    const header = { alg: 'HS256', typ: 'JWT' };
    const encodedHeader = base64UrlEncode(JSON.stringify(header));
    const expiration = Math.floor(Date.now() / 1000) + expiresInSeconds;
    const encodedPayloadWithExp = base64UrlEncode(JSON.stringify({ exp: expiration, payload }));
    const signature = generateHMAC(encodedHeader + '.' + encodedPayloadWithExp, secret);
    const token = encodedHeader + '.' + encodedPayloadWithExp + '.' + signature;
    return token;
}
exports.default = default_1;
function base64UrlEncode(str) {
    const base64 = Buffer.from(str).toString('base64');
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function generateHMAC(data, secret) {
    const hmac = crypto_1.default.createHmac('sha256', secret);
    hmac.update(data);
    return hmac.digest('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
