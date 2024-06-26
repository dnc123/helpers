export default async function<T> (
    array: T[],
    callback: (item: T, index: number, context: T[]) => Promise<void>,
): Promise<void> {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}
