type TimerMap = {
    [key: string]: ReturnType<typeof setTimeout>;
}

const timers: TimerMap = {};

export default function setTimer(
    uniqueKey: string,
    timeThresholdMS: number,
    callback: () => void,
): void {
    if (timers[uniqueKey]) {
        clearTimeout(timers[uniqueKey]);
    }

    timers[uniqueKey] = setTimeout(callback, timeThresholdMS);
}
