const RANDOM_DATE = '2015-05-22';
import {dateRegex} from '../regex/constants';

export default function (checkingValue: any) {
	return checkingValue.length === RANDOM_DATE.length && dateRegex.test(checkingValue);
}
