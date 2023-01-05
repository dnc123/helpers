export default function (
	source: string,
	newString: string,
	startIndex: number,
	endIndex: number,
) {
	return `${source.substring(0, startIndex)}${newString}${source.substring(endIndex)}`;
}
