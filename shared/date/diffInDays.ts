export default function(date1: Date, date2: Date): number {
	const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
	const diffMilliseconds = Math.abs(date1.getTime() - date2.getTime());

	return Math.floor(diffMilliseconds / oneDay);
}
