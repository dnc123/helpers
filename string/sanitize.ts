export default function (value: string | null): string | null {
	if (value === null) {
		return value;
	}

	return value.toString()
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/'/g, '&#39;')
		.replace(/"/g, '&#34;');
}
