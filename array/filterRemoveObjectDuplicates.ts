export default function (items: any[], targetKey: string): any[] {
	return items.filter((itemA, index) => {
		return items
			.map((itemB) => itemB[targetKey])
			.indexOf(itemA[targetKey]) === index;
	});
}
