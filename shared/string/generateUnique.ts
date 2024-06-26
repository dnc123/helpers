const recentUniquelyGeneratedStrings: string[] = [];

export default function (hashStrength = 12): string {
    let uniqueString;

    do {
        const possibleCharacters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
        let randomString = '';

        for (let i = 0; i < hashStrength; i++) {
            randomString += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        }

        uniqueString = randomString;
    } while (recentUniquelyGeneratedStrings.includes(uniqueString));

    recentUniquelyGeneratedStrings.push(uniqueString);
    setTimeout(recentUniquelyGeneratedStrings.unshift, 0);

    return uniqueString;
}
