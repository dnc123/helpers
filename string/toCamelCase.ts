export default function (value: string) {
	return value.replace(
			/[^a-zA-Z0-9]+(.)/g,
			(_, chr) => chr.toUpperCase(),
		);
}
