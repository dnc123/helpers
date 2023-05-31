import { ONE_METER_IN_DEGREES } from './constants';

export default function (latitude: number, metersToAdd: number): number {
    return latitude + (metersToAdd * ONE_METER_IN_DEGREES);
}
