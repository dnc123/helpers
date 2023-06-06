export default function (text: string): number {
    const trimmedText = text.trim();
    const words = trimmedText.split(/\s+/);

    return words.length;
}
