import getDatabase from './getDatabase';
import getTable from './getTable';
import handleIndexedDBRequest from './handleIndexedDBRequest';

export default async function (tableName: string, dataToUpsert: any) {
	return handleIndexedDBRequest(
		getTable(await getDatabase(), tableName).put(dataToUpsert),
	);
}
