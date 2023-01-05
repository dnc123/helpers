import capitalizeFirstLetter from './capitalizeFirstLetter';

export default function (sentence: string): string {
	return sentence
		.split(` `)
		.map(capitalizeFirstLetter)
		.join(` `);
}
