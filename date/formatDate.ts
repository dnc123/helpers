import {format as dateFNSFormat} from 'date-fns';

export default function (
	dateObject: Date | string,
	isYearIncluded = true,
	isMonthIncluded = true,
	isDayIncluded = true,
) {
	if (typeof dateObject === `string`) {
		dateObject = new Date(dateObject);
	}

	const dateArr = [];

	if (isYearIncluded) {
		dateArr.push(`yyyy`);
	}

	if (isMonthIncluded) {
		dateArr.push(`MM`);
	}

	if (isDayIncluded) {
		dateArr.push(`dd`);
	}

	return dateFNSFormat(dateObject, dateArr.join(`-`));
}
