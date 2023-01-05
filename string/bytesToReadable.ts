export default function (bytes: number): string {
	const availableSizeTypes = [`B`, `KB`, `MB`, `GB`, `TB`];
	const targetSizeIndex = Math.floor(Math.log(bytes) / Math.log(1024));

	return targetSizeIndex === 0
		? `${bytes} ${availableSizeTypes[targetSizeIndex]}`
		: `${(bytes / Math.pow(1024, targetSizeIndex)).toFixed(2)} ${availableSizeTypes[targetSizeIndex]}`;
}
