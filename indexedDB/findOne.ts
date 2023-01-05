import getDatabase from './getDatabase';
import getTable from './getTable';
import handleIndexedDBRequest from './handleIndexedDBRequest';

export default async function (tableName: string, targetKey: string | number) {
	return handleIndexedDBRequest(
		getTable(await getDatabase(), tableName).get(targetKey),
	);
}
