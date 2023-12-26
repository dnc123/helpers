export default function capitalizeSentences(text: string): string {
    let capitalizeNext = true;

    return Array
        .from(text)
        .map((char) => {
            if (capitalizeNext && char.trim().length > 0) {
                capitalizeNext = false;

                return char.toUpperCase();
            } else {
                if (char.match(/[.!?]/)) {
                    capitalizeNext = true;
                }

                return char;
            }
        })
        .join('');
}