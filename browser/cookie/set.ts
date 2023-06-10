export default function(name: string, value: string, expirationDays = 365): void {
	const expirationDate = new Date();
	const cookieValue = encodeURIComponent(value);
	let cookieStr = `${name}=${cookieValue};`;

	expirationDate.setDate(expirationDate.getDate() + expirationDays);
	cookieStr += `expires=${expirationDate.toUTCString()};`;
	cookieStr += 'path=/';
	document.cookie = cookieStr;
}