import {isAfter} from 'date-fns';

export default function (dates: Date[] | Date = []) {
	if (!Array.isArray(dates)) {
		dates = [dates];
	}

	let earliestDate = dates[0];

	dates.forEach((date) => {
		if (isAfter(earliestDate, date)) {
			earliestDate = date;
		}
	});

	return earliestDate;
}
