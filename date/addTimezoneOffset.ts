import {subMinutes} from 'date-fns';

export default function (targetDate: Date) {
	return subMinutes(targetDate, targetDate.getTimezoneOffset());
}
