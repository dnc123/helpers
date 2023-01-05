export default function (inputString: string, stringToInsert: string, targetIndex: number) {
	return inputString.substring(0, targetIndex)
		+ stringToInsert
		+ inputString.substring(targetIndex, inputString.length);
}
