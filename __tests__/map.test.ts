import addMetersToLatitude from '../map/addMetersToLatitude';
import addMetersToLongitude from '../map/addMetersToLongitude';
import distanceBetween2CoordinatesKM from '../map/distanceBetween2CoordinatesKM';

test(`Add meters to latitude`, () => {
	expect(addMetersToLatitude(15, 10000))
		.toEqual(15.089831528411953);
});

test(`Add meters to longitude`, () => {
	expect(addMetersToLongitude(15, 15, 10000))
		.toEqual(15.093000441614725);
});

test(`Distance between 2 coordinates`, () => {
	expect(distanceBetween2CoordinatesKM(15, 15, 20, 20, 4))
		.toEqual(768.9861);
});
