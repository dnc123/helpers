export default function<T> (
    targetArr: T[],
    key: keyof T,
    isEqualTo: string,
): void {
    targetArr.splice(
        targetArr.findIndex((item) => item[key] === isEqualTo),
        1,
    );
}
