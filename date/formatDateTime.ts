import {format as dateFNSFormat} from 'date-fns';
import formatDate from './formatDate';
import formatTime from './formatTime';

export default function (
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

	const formattedTime = formatTime(
		dateObject,
		isHoursIncluded,
		isMinutesIncluded,
		isSecondsIncluded,
		isMillisecondsIncluded,
	);

	return dateFNSFormat(
		dateObject,
		`${formattedDate} ${formattedTime}`,
	);
}
