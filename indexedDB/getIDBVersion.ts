import getCookie from '../cookie/get';
import setCookie from '../cookie/set';
import {IDBUpdateHandler, IDBSeedHandler} from './getDatabase';

const cookieKeyActiveIDBVersion = 'activeIDBVersion';

export default function (IDBUpdateHandler?: IDBUpdateHandler, IDBSeedHandler?: IDBSeedHandler) {
	let IDBVersion = Number(getCookie(cookieKeyActiveIDBVersion));

	if (isNaN(IDBVersion)) {
		IDBVersion = 1;
		setCookie(cookieKeyActiveIDBVersion, String(IDBVersion));
	} else {
		if (IDBUpdateHandler || IDBSeedHandler) {
			IDBVersion += 1;
			setCookie(cookieKeyActiveIDBVersion, String(IDBVersion));
		}
	}

	return IDBVersion;
}
