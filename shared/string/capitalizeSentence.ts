export default function (text: string): string {
    if (!text) {
        return text;
    }

    const sentences: string[] = text.trim().split(/([.!?])(?!\s|$)/); // Split text into sentences

    for (let i = 0; i < sentences.length; i += 2) {
        const sentence = sentences[i].trim();

        if (sentence.length > 0) {
            const firstLetter = sentence.charAt(0).toUpperCase();
            const restOfSentence = sentence.slice(1);

            sentences[i] = firstLetter + restOfSentence;
        }
    }

    return sentences.join('');
}
