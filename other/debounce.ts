type ObjectWithRandomProps = {
	[key: string]: any;
}

const timers: ObjectWithRandomProps = {};

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
