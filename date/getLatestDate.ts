import {isAfter} from 'date-fns';

export default function (dates: Date[] | Date = []) {
	if (!Array.isArray(dates)) {
		dates = [dates];
	}

	let latestDate = dates[0];

	dates.forEach((date) => {
		if (isAfter(date, latestDate)) {
			latestDate = date;
		}
	});

	return latestDate;
}
