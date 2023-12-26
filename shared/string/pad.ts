export default function (
    inputString: string,
    targetLength: number,
    isPadDirectionLeft = false
): string {
    if (inputString.length >= targetLength) {
        return inputString;
    }

    const spacesToAdd = targetLength - inputString.length;
    const padding = ' '.repeat(spacesToAdd);

    return isPadDirectionLeft
        ? `${padding}${inputString}`
        : `${inputString}${padding}`;
}