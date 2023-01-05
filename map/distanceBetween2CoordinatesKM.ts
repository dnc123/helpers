import {EARTH_RADIUS_KM} from './constants';
import toRad from './toRad';
import round from '../number/round';

export default function (
	lat1: number,
	lng1: number,
	lat2: number,
	lng2: number,
	roundToDecimals?: number,
) {
	const dLat = toRad(lat2 - lat1);
	const dLon = toRad(lng2 - lng1);

	lat1 = toRad(lat1);
	lat2 = toRad(lat2);

	const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);

	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	const distanceKM = EARTH_RADIUS_KM * c;

	return typeof roundToDecimals === `number`
		? round(distanceKM, roundToDecimals)
		: distanceKM;
}
