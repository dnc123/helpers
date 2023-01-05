import removeFromArrayByKey from '../array/removeFromArrayByKey';
import groupByKey from '../array/groupByKey';
import findMaxValue from '../array/findMaxValue';
import filterRemoveObjectDuplicates from '../array/filterRemoveObjectDuplicates';
import forEachAsync from '../array/forEachAsync';
import shuffle from '../array/shuffle';
import sortObjectArrayByStringKey from '../array/sortObjectArrayByStringKey';

test(`Array shuffle`, () => {
	const randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

	shuffle(randomNumbers);
	expect(randomNumbers).not.toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

	const randomNumber = [1];

	shuffle(randomNumber);
	expect(randomNumber).toMatchObject([1]);
});

test(`forEachAsync`, async () => {
	let testString = ``;

	const longPromise = new Promise((resolve) => {
		setTimeout(() => {
			return resolve(`long`);
		}, 100);
	});

	const shortPromise = Promise.resolve(`short`);

	await forEachAsync([longPromise, shortPromise], async (resolvedValue) => {
		testString += await resolvedValue;
	});

	expect(testString).toEqual(`longshort`);
});

test(`Remove array duplicates`, () => {
	const users = [
		{name: `Bob`},
		{name: `Cuker`},
		{name: `Bob`},
	];

	expect(filterRemoveObjectDuplicates(users, `name`)).toMatchObject([
		{name: `Bob`},
		{name: `Cuker`},
	]);
});

test(`Get max`, () => {
	expect(findMaxValue([1, 6, 7, 4])).toEqual(7);
});

test(`Remove from array by key`, () => {
	const nameKey = `name`;
	const joshName = `Josh`;
	const sallyName = `Sally`;

	const users = [
		{[nameKey]: `Bob`},
		{[nameKey]: joshName},
		{[nameKey]: sallyName},
	];

	removeFromArrayByKey(users, nameKey, joshName);
	expect(users[1][nameKey]).toEqual(sallyName);
});

test(`Group array items`, () => {
	const users = [
		{age: 5},
		{age: 16},
		{age: 5},
	];

	expect(groupByKey(users, `age`)).toMatchObject({
		16:
			[
				{age: 16},
			],
		5: [
			{age: 5},
			{age: 5},
		],
	});
});

test(`Array sort by object key`, () => {
	const users = [
		{name: `Bob`},
		{name: `Cuker`},
		{name: `Adam`},
	];

	expect(sortObjectArrayByStringKey(users, `name`)).toMatchObject([
		{name: `Adam`},
		{name: `Bob`},
		{name: `Cuker`},
	]);
});
