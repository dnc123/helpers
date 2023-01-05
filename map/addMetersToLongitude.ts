import {ONE_METER_IN_DEGREES} from './constants';

export default function (latitude: number, longitude: number, metersToAdd: number) {
	return longitude + (metersToAdd * ONE_METER_IN_DEGREES) / Math.cos(latitude * (Math.PI / 180));
}
