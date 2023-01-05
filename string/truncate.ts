export default function (text: string, stopIndex: number): string {
	return `${text.slice(0, stopIndex)}${stopIndex < text.length ? `...` : ``}`;
}
