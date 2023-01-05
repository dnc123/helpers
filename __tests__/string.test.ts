import slugify from '../string/slugify';
import unslugify from '../string/unslugify';
import sanitize from '../string/sanitize';
import generateUnique from '../string/generateUnique';
import buildQueryParams from '../string/buildQueryParams';
import capitalizeFirstLetter from '../string/capitalizeFirstLetter';
import capitalizeFirstLetterOfAllWordsInString from '../string/capitalizeFirstLetterOfAllWordsInString';
import hash from '../string/hash';
import isJSON from '../string/isJSON';
import bytesToReadable from '../string/bytesToReadable';
import makeNumberNthAffix from '../string/makeNumberNthAffix';
import truncate from '../string/truncate';
import hashtagify from '../string/hashtagify';

test(`Slugify`, () => {
	expect(slugify(`fasdf fsadfas@#SDAFAfrg12`))
		.toEqual(`fasdf-fsadfassdafafrg12`);
});

test(`Unslugify`, () => {
	expect(unslugify(`hello-darkness-MY-old-Friend`))
		.toEqual(`hello darkness MY old Friend`);
});

test(`Hashtagify`, () => {
	expect(hashtagify(`ervtrh rtherth e ththd th`))
		.toEqual(`#ErvtrhRtherthEThthdTh`);
});

test(`HTML sanitization`, () => {
	expect(sanitize(`</div></body></html>`))
		.toEqual(`&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;`);
});

test(`Unique string generation`, () => {
	const randomUniqueString1 = generateUnique();
	const randomUniqueString2 = generateUnique();

	expect(randomUniqueString1).not.toMatch(randomUniqueString2);
	expect(randomUniqueString1.length).toEqual(25);
	expect(randomUniqueString2.length).toEqual(25);
	expect(generateUnique(1).length).toEqual(14);
});

test(`Query params building`, () => {
	expect(buildQueryParams({
		a: 1,
		b: 2,
		name: `Stan`,
		isNice: true,
	})).toEqual(`a=1&b=2&name=Stan&isNice=true`);
});

test(`Character capitalization`, () => {
	expect(capitalizeFirstLetter(`asdf sdfg dfgh`))
		.toEqual(`Asdf sdfg dfgh`);
});

test(`Character capitalization in all words`, () => {
	expect(capitalizeFirstLetterOfAllWordsInString(`asdf sdfg dfgh`))
		.toEqual(`Asdf Sdfg Dfgh`);
});

test(`Hash`, () => {
	expect(hash(`asdf sdfg dfgh`, `salting`))
		.toEqual(`12d8d2c2c15f693e99e7ff3c3e41196f86f1350e6205dd0bc31f14c9d35070ef`);
});

test(`Is JSON`, () => {
	expect(isJSON(`gdsgsfd`)).toBeFalsy();

	expect(isJSON(JSON.stringify({
		hi: `mmmadgd`,
		[`fdgsfd-sdfgsf`]: `sss`,
		3: true,
	}))).toBeTruthy();
});

test(`Bytes to readable`, () => {
	expect(bytesToReadable(210))
		.toEqual(`210 B`);

	expect(bytesToReadable(45235))
		.toEqual(`44.17 KB`);

	expect(bytesToReadable(75464354))
		.toEqual(`71.97 MB`);

	expect(bytesToReadable(23464745674))
		.toEqual(`21.85 GB`);

	expect(bytesToReadable(23464745674354))
		.toEqual(`21.34 TB`);
});

test(`Get nth number`, () => {
	expect(makeNumberNthAffix(1))
		.toEqual(`st`);

	expect(makeNumberNthAffix(2))
		.toEqual(`nd`);

	expect(makeNumberNthAffix(3))
		.toEqual(`rd`);

	expect(makeNumberNthAffix(4))
		.toEqual(`th`);

	expect(makeNumberNthAffix(7))
		.toEqual(`th`);

	expect(makeNumberNthAffix(22))
		.toEqual(`nd`);
});

test(`Truncate string to ...`, () => {
	expect(truncate(`Really not that long string`, 15))
		.toEqual(`Really not that...`);
});
