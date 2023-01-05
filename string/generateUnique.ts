const recentUniquelyGeneratedStrings: string[] = [];

export default function (hashStrength = 12): string {
	let uniqueString;

	do {
		const possibleCharacters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
		let randomString = ``;

		for (let i = 0; i < hashStrength; i++) {
			randomString += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
		}

		uniqueString = `${randomString}${+new Date()}`;
	} while (recentUniquelyGeneratedStrings.includes(uniqueString));

	recentUniquelyGeneratedStrings.push(uniqueString);

	setTimeout(() => {
		recentUniquelyGeneratedStrings.unshift();
	}, 0);

	return uniqueString;
}
