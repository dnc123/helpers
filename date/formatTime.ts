import {format as dateFNSFormat} from 'date-fns';

export default function (
	dateObject: Date,
	isHoursIncluded = true,
	isMinutesIncluded = true,
	isSecondsIncluded = true,
	isMillisecondsIncluded = false,
) {
	const timeArr = [];

	if (isHoursIncluded) {
		timeArr.push(`HH`);
	}

	if (isMinutesIncluded) {
		timeArr.push(`mm`);
	}

	if (isSecondsIncluded) {
		timeArr.push(`ss`);
	}

	const timeString = dateFNSFormat(dateObject, timeArr.join(`:`));

	return `${timeString}${isMillisecondsIncluded ? `.SSS` : ``}`;
}
