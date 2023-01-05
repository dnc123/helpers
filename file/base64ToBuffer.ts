export default function (base64: string) {
	const byteString = new Buffer(base64, 'base64').toString('binary');
	const ab = new Buffer(byteString.length);
	const ia = new Uint8Array(ab);

	for (let i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}

	return ab;
}
