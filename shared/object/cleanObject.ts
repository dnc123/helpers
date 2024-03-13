type AnyObject = Record<string, unknown>

export default function (targetObject: AnyObject): void {
    const propNames = Object.getOwnPropertyNames(targetObject);

    for (let i = 0; i < propNames.length; i++) {
        const propName = propNames[i];

        if (targetObject[propName] === null || targetObject[propName] === undefined) {
            delete targetObject[propName];
        }
    }
}
