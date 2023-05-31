import capitalizeAll from './capitalizeAll';

export default function (text: string): string {
    return `#` + capitalizeAll(text)
        .replace(/\s/g, ``);
}
