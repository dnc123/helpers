export default function<T extends Record<K, string | number>, K extends keyof T>(
    array: T[],
    key: K,
): Record<T[K], T[]> {
    return array.reduce((accumulator, item) => {
        const value = item[key];

        accumulator[value] = accumulator[value] || [];
        accumulator[value].push(item);

        return accumulator;
    }, {} as Record<T[K], T[]>);
}
