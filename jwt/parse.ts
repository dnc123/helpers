import atobNode from 'atob';

export default function (token: string) {
	const base64URL = token.split(`.`)[1];
	const base64 = base64URL.replace(/-/g, `+`).replace(/_/g, `/`);
	const result = typeof atob === `undefined` ? atobNode(base64) : atob(base64);

	const JSONPayload = decodeURIComponent(result.split(``).map((c) => {
		return `%` + (`00` + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(``));

	return JSON.parse(JSONPayload);
}
