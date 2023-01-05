export default function (array: any[], key: string): any[] {
	return array.sort((a, b) => {
		return a[key].localeCompare(b[key]);
	});
}
