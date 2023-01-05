import capitalizeFirstLetterOfAllWordsInString from './capitalizeFirstLetterOfAllWordsInString';

export default function (text: string): string {
	return `#` + capitalizeFirstLetterOfAllWordsInString(text)
		.replace(/\s/g, ``);
}
