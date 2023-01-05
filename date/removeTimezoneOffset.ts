import {addMinutes} from 'date-fns';

export default function (targetDate: Date) {
	return addMinutes(targetDate, targetDate.getTimezoneOffset());
}
