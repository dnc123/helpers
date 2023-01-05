export default function (stylesCSS: string) {
	const style = document.createElement('style');

	style.textContent = stylesCSS;
	document.head.append(style);
}
