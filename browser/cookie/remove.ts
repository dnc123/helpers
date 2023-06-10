export default function (name: string): void {
	const expirationDate = new Date('Thu, 01 Jan 1970 00:00:00 UTC');
	const cookieStr = `${name}=;expires=${expirationDate.toUTCString()};path=/`;

	document.cookie = cookieStr;
}