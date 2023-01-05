import handleIndexedDBRequest from './handleIndexedDBRequest';

export default function (name: string) {
	return handleIndexedDBRequest(
		indexedDB.deleteDatabase(name),
	);
}
