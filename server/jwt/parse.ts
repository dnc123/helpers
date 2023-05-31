import crypto from 'crypto';

export default function(token: string, secret: string): Record<string, any> {
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

    const payload = JSON.parse(decodedPayload) as Record<string, any>;

    // Check if token has expired
    const expiration = payload.exp;
    const currentTime = Math.floor(Date.now() / 1000);
    if (expiration && currentTime > expiration) {
        throw new Error('Token has expired');
    }

    return payload;
}

function base64UrlDecode(str: string): string {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    while (str.length % 4) {
        str += '=';
    }
    return Buffer.from(str, 'base64').toString('utf-8');
}

function generateHMAC(data: string, secret: string): string {
    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(data);
    return hmac.digest('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}