export default function (
    date: Date | string,
    isYearIncluded = true,
    isMonthIncluded = true,
    isDayIncluded = true,
) {
    if (typeof date === 'string') {
        date = new Date(date);
    }

    const year = isYearIncluded ? date.getFullYear() : '';
    const month = isMonthIncluded ? String(date.getMonth() + 1).padStart(2, '0') : '';
    const day = isDayIncluded ? String(date.getDate()).padStart(2, '0') : '';

    const dateArr = [];

    if (year) {
        dateArr.push(year);
    }

    if (month) {
        dateArr.push(month);
    }

    if (day) {
        dateArr.push(day);
    }

    return dateArr.join('-');
}