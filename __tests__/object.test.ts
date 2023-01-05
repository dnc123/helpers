import cleanObject from '../object/cleanObject';
import deepClone from '../object/deepClone';

test(`Remove object keys containing empty values`, () => {
	const testObject = {
		a: 1,
		b: 2,
		c: null,
		d: undefined,
		e: `sdfsad`,
	};

	cleanObject(testObject);

	expect(testObject).toMatchObject({
		a: 1,
		b: 2,
		e: `sdfsad`,
	});
});

test(`Object cloning`, () => {
	const objectA = {
		test: `aha`,

		deep: {
			very: {
				nice: `:)`,
			},
		},
	};

	const objectB = deepClone(objectA);

	expect(objectA === objectB).toBeFalsy();
	expect(objectA).toMatchObject(objectB);
});
