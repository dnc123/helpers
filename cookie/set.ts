import ENVBoth from '../../ENV';
import {set as setCookie} from 'js-cookie';

type SetCookieOptions = {
	expires: number;
	domain?: string;
}

const DAYS_IN_YEAR = 365;

export default function (key: string, value: string, expiresInDays = DAYS_IN_YEAR, isSharedAcrossSubdomains = false) {
	const options: SetCookieOptions = {
		expires: expiresInDays,
	};

	if (isSharedAcrossSubdomains) {
		options.domain = ENVBoth.clientProxyDomain;
	}

	setCookie(key, value, options);
}
