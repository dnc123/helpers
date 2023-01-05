export default function (keyValQueryParams: any = {}): string {
	return Object.keys(keyValQueryParams)
		.filter((key) => {
			return keyValQueryParams[key] !== null
				&& typeof keyValQueryParams[key] !== `undefined`;
		})
		.map((key) => {
			return `${key}=${keyValQueryParams[key]}`;
		})
		.join(`&`);
}
