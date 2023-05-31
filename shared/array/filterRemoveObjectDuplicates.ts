export default function<T> (
    items: T[],
    targetKey: keyof T
): T[] {
    return items.filter((itemA, index) => {
        return items
            .map((itemB) => itemB[targetKey])
            .indexOf(itemA[targetKey]) === index;
    });
}
