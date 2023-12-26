export default function (text: string): string {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);

        if (/^[a-zA-Z]$/.test(char)) {
            result += char.toUpperCase();

            break;
        } else {
            result += char;
        }
    }

    return result + text.slice(result.length);
}