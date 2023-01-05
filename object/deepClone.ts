import {ObjectWithRandomProps} from '../../types';

export default function (object: ObjectWithRandomProps) {
	return JSON.parse(JSON.stringify(object));
}
