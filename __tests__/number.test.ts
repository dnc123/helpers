// import {
// 	round,
// 	formatMoney,
// 	convertMillsToNormalNumber,
// 	convertNormalNumberToMills,
// 	randomNumberInRange,
// } from '../number';

import round from '../number/round';
import formatMoney from '../number/formatMoney';
import convertMillsToNormalNumber from '../number/convertMillsToNormalNumber';
import convertNormalNumberToMills from '../number/convertNormalNumberToMills';
import randomNumberInRange from '../number/randomNumberInRange';

test(`Number rounding`, () => {
	expect(round(34.234554, 2))
		.toEqual(34.23);

	expect(round(34.235554, 2))
		.toEqual(34.24);
});

test(`Money formatting`, () => {
	expect(formatMoney(462.34, `LTL`))
		.toEqual(`Lt 462.34`);

	expect(formatMoney(462.34))
		.toEqual(`$462.34`);
});

test(`Converting mills to number`, () => {
	expect(convertMillsToNormalNumber(543262))
		.toEqual(543.262);
});

test(`Converting number to mills`, () => {
	expect(convertNormalNumberToMills(543.262))
		.toEqual(543262);
});

test(`Get random number in range`, () => {
	const min = 53;
	const max = 58;
	const randomNumber = randomNumberInRange(min, max);

	expect(randomNumber).toBeGreaterThanOrEqual(min);
	expect(randomNumber).toBeLessThanOrEqual(max);
});
