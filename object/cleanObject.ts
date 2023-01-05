import {ObjectWithRandomProps} from '../../types';

export default function (targetObject: ObjectWithRandomProps) {
	let propNames = Object.getOwnPropertyNames(targetObject);

	for (let i = 0; i < propNames.length; i++) {
		let propName = propNames[i];

		if (targetObject[propName] === null || targetObject[propName] === undefined) {
			delete targetObject[propName];
		}
	}
}
