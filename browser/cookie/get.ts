export default function(name: string): string | undefined {
	const cookieStr = document.cookie;
	const cookies = cookieStr.split(';');

	for (const cookie of cookies) {
		const [cookieName, cookieValue] = cookie.split('=');
		const trimmedCookieName = cookieName.trim();

		if (trimmedCookieName === name) {
			return decodeURIComponent(cookieValue);
		}
	}

	return undefined;
}