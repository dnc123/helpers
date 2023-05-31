export default function (camelCase: string): string {
    return camelCase.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}