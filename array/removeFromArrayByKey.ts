export default function (targetArr: any[], key: string, isEqualTo: any) {
	targetArr.splice(
		targetArr.findIndex((item) => item[key] === isEqualTo),
		1,
	);
}
