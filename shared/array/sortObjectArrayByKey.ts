export default function <T>(array: T[], key: keyof T, descending = false): T[] {
    const order = descending ? -1 : 1;

    return array.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1 * order;
        }

        if (a[key] > b[key]) {
            return 1 * order;
        }

        return 0;
    });
}
