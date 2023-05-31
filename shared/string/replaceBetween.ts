export default function (
    source: string,
    newString: string,
    startIndex: number,
    endIndex: number,
): string {
    return `${source.substring(0, startIndex)}${newString}${source.substring(endIndex)}`;
}
