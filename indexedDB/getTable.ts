export default function (DB: IDBDatabase, name: string) {
	return DB.transaction(name, 'readwrite')
		.objectStore(name);
}
