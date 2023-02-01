import AnyObject from "~types/AnyObject";

const timers: AnyObject = {};

export default function (
	uniqueKey: string,
	timeThresholdMS: number,
	callback: () => void,
) {
	if (timers[uniqueKey]) {
		clearTimeout(timers[uniqueKey]);
	}

	timers[uniqueKey] = setTimeout(callback, timeThresholdMS);
}
