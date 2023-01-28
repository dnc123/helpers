type AnyObject = {
	[key: string]: any;
}

export default function (object: AnyObject) {
	return JSON.parse(JSON.stringify(object));
}
