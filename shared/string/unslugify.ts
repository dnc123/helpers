export default function (text = ``): string {
    return text
        .split(`-`)
        .join(` `);
}
