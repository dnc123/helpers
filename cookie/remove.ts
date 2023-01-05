import {remove as removeCookie} from 'js-cookie';

export default function (key: string) {
	removeCookie(key);
}
