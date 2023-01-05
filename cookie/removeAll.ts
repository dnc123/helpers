import getAll from './getAll';
import remove from './remove';

export default function () {
	Object.keys(getAll()).forEach((cookieName) => {
		remove(cookieName);
	});
}
