export default function (array: any[], targetKey: string): {} {
	return array.reduce((accumulator, item) => {
		accumulator[item[targetKey]] = accumulator[item[targetKey]] || [];
		accumulator[item[targetKey]].push(item);

		return accumulator;
	}, {});
}
