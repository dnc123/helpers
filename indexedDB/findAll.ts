import getTable from './getTable';
import getDatabase from './getDatabase';
import handleIndexedDBRequest from './handleIndexedDBRequest';
import {ObjectWithRandomProps} from '../../types';

export default async function (
	tableName: string,
	filters?: ObjectWithRandomProps,
): Promise<any> {
	const results: any = await handleIndexedDBRequest(
		getTable(await getDatabase(), tableName).getAll(),
	);

	if (filters) {
		const filtersArr = Object.entries(filters);

		return results.filter((result: any) => {
			for (let i = 0; i < filtersArr.length; i++) {
				const [targetProp, targetValue] = filtersArr[i];

				if (result[targetProp] === targetValue) {
					return true;
				}
			}

			return false;
		});
	}

	return results;
}
