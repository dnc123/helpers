export default function (dateObject: any) {
	return dateObject && typeof dateObject.getMonth === `function`;
}
