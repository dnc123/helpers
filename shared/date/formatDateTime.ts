import formatDate from './formatDate';
import formatTime from './formatTime';

export default function formatDateTime(
    dateObject: Date,
    isYearIncluded = true,
    isMonthIncluded = true,
    isDayIncluded = true,
    isHoursIncluded = true,
    isMinutesIncluded = true,
    isSecondsIncluded = true,
    isMillisecondsIncluded = false,
) {
    const formattedDate = formatDate(
        dateObject,
        isYearIncluded,
        isMonthIncluded,
        isDayIncluded,
    );

    const formattedTimeString = formatTime(
        dateObject,
        isHoursIncluded,
        isMinutesIncluded,
        isSecondsIncluded,
        isMillisecondsIncluded,
    );

    return `${formattedDate} ${formattedTimeString}`;
}