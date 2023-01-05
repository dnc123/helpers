export default function (array: number[]): number {
	return array.reduce((a, b) => {
		return Math.max(a, b);
	});
}
