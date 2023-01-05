import {createHmac} from 'crypto';

export default function (value: string, salt: string): string {
	return createHmac(`sha256`, salt)
		.update(value)
		.digest(`hex`);
}
