import {parse as parseCookie} from 'cookie';

export default function (cookiesString?: string) {
	return typeof cookiesString === `string`
		? parseCookie(cookiesString)
		: {};
}
