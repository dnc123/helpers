import capitalize from './capitalize';

export default function (sentence: string): string {
    return sentence
        .split(' ')
        .map(capitalize)
        .join(' ');
}
