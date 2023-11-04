export default function (dates: Date[] | Date = []): Date | undefined {
    if (!Array.isArray(dates)) {
        dates = [dates];
    }

    if (dates.length === 0) {
        return undefined;
    }

    let earliestDate: Date | undefined = dates[0];

    for (let i = 1; i < dates.length; i++) {
        const date = dates[i];

        if (date instanceof Date && !isNaN(date.getTime())) {
            if (earliestDate === undefined || date < earliestDate) {
                earliestDate = date;
            }
        }
    }

    return earliestDate;
}