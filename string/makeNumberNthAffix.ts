export default function (number: number): string {
    switch (number.toString().substr(-1)) {
        case `1`:
            return getCorrectAffix(`st`, number);

        case `2`:
            return getCorrectAffix(`nd`, number);

        case `3`:
            return getCorrectAffix(`rd`, number);

        default:
            return `th`;
    }
}

function getCorrectAffix(affix: string, number: number): string {
    return number.toString().substr(-2, 1) === `1` && number > 10
        ? `th`
        : affix;
}
