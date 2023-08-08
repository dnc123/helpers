import crypto from 'crypto';

const SECONDS_IN_YEAR = 31536000;

export default function(payload: string, secret: string, expiresInSeconds = SECONDS_IN_YEAR): string {
    const header = { alg: 'HS256', typ: 'JWT' };
    const encodedHeader = base64UrlEncode(JSON.stringify(header));
    const expiration = Math.floor(Date.now() / 1000) + expiresInSeconds;
    const encodedPayloadWithExp = base64UrlEncode(JSON.stringify({ exp: expiration, payload }));
    const signature = generateHMAC(encodedHeader + '.' + encodedPayloadWithExp, secret);
    const token = encodedHeader + '.' + encodedPayloadWithExp + '.' + signature;

    return token;
}

function base64UrlEncode(str: string): string {
    const base64 = Buffer.from(str).toString('base64');
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function generateHMAC(data: string, secret: string): string {
    const hmac = crypto.createHmac('sha256', secret);

    hmac.update(data);

    return hmac.digest('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}