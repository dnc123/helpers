export default function diffInMinutes(
    date1: Date | string,
    date2: Date | string,
): number {
    if (typeof date1 === 'string') {
        date1 = new Date(date1);
    }

    if (typeof date2 === 'string') {
        date2 = new Date(date2);
    }

    const timeDifference = date2.getTime() - date1.getTime();
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));

    return Math.abs(minutesDifference);
}