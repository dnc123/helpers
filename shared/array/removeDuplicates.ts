export default function (inputArray: string[]) {
	return Array.from(new Set(inputArray))
		.filter((item) => {
			// todo this filter is temporary, remove after fixing project build
			// when this was created the problem was that there are scripts in stricts
			// that reads all endpoints(and similar) from folders and they would make duplicates
			// such as myEndpoint.ts and myEndpoint.js which further rabbithole creates
			// duplication errors
			return !item.endsWith('.js');
		});
}
