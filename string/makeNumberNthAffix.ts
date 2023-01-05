export default function (number: number): string {
	const getCorrectAffix = (affix: string) => {
		return number.toString().substr(-2, 1) === `1` && number > 10
			? `th`
			: affix;
	};

	switch (number.toString().substr(-1)) {
		case `1`:
			return getCorrectAffix(`st`);

		case `2`:
			return getCorrectAffix(`nd`);

		case `3`:
			return getCorrectAffix(`rd`);

		default:
			return `th`;
	}
}
