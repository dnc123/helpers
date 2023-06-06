import capitalizeAll from './capitalizeAll';

export default function (text: string): string {
    const capitalizedText = capitalizeAll(text);
    const sanitizedText = capitalizedText.replace(/[^\w\s]/g, '').trim();
    const words = sanitizedText.split(/\s+/);
    const hashtags = words.map((word, index) => (index === 0 ? `#${word}` : word));

    return hashtags.join('');
}
