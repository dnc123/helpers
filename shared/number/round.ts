export default function (targetNumber: number, decimalPlaces = 0): number {
    return +(Math.round(Number(targetNumber + `e+${decimalPlaces}`)) + `e-${decimalPlaces}`);
}
