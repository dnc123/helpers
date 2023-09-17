"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(keyValQueryParams = {}) {
    return Object.entries(keyValQueryParams)
        .filter(([_, value]) => value != null && value !== undefined)
        .map(([key, value]) => {
        const encodedKey = encodeURIComponent(key);
        const encodedValue = encodeURIComponent(String(value));
        return `${encodedKey}=${encodedValue}`;
    })
        .join('&');
}
exports.default = default_1;
