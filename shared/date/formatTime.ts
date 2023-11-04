function padZero(num: number) {
    return num.toString().padStart(2, '0');
}

export default function formatTime(
    dateObject: Date,
    isHoursIncluded = true,
    isMinutesIncluded = true,
    isSecondsIncluded = true,
    isMillisecondsIncluded = false,
) {
    const hours = isHoursIncluded ? padZero(dateObject.getHours()) : '';
    const minutes = isMinutesIncluded ? padZero(dateObject.getMinutes()) : '';
    const seconds = isSecondsIncluded ? padZero(dateObject.getSeconds()) : '';
    const milliseconds = isMillisecondsIncluded ? `.${dateObject.getMilliseconds().toString().padStart(3, '0')}` : '';

    return `${hours}:${minutes}:${seconds}${milliseconds}`;
}