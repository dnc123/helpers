export default async function (
	DB: IDBDatabase,
	name: string,
	primaryKey: string,
	isPrimaryKeyAutoIncrement = false,
) {
	DB.createObjectStore(name, {
		keyPath: primaryKey,
		autoIncrement: isPrimaryKeyAutoIncrement,
	});
}
