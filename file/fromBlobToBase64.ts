export default function (blob: Blob) {
	return new Promise((resolve) => {
		const reader = new FileReader();

		reader.addEventListener('loadend', () => {
			resolve(reader.result);
		});

		reader.readAsDataURL(blob);
	});
}
