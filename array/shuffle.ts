export default function (targetArray: any[]): void {
	if (Array.isArray(targetArray) && targetArray.length <= 1) {
		return;
	}

	for (let i = targetArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		[targetArray[i], targetArray[j]] = [targetArray[j], targetArray[i]];
	}
}
