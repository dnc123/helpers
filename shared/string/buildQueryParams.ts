//todo reuse AnyObject in helpers library
type AnyObject = Record<string, unknown>

export default function (keyValQueryParams: AnyObject = {}): string {
    return Object.entries(keyValQueryParams)
        .filter(([_, value]) => value != null && value !== undefined)
        .map(([key, value]) => {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(String(value));
            return `${encodedKey}=${encodedValue}`;
        })
        .join('&');
}
