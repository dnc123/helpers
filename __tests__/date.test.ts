import formatDate from '../date/formatDate';
import addTimezoneOffset from '../date/addTimezoneOffset';
import formatTime from '../date/formatTime';
import removeTimezoneOffset from '../date/removeTimezoneOffset';
import getLatestDate from '../date/getLatestDate';
import getEarliestDate from '../date/getEarliestDate';
import formatDateTime from '../date/formatDateTime';
import isDateObject from '../date/isDateObject';
import isDateString from '../date/isDateString';

test(`Date time format`, () => {
    expect(formatDateTime(new Date(`2011-11-23 14:30:22`)))
        .toEqual(`2011-11-23 14:30:22`);
});

test(`Date format`, () => {
    expect(formatDate(new Date(`2011-11-23 14:30:22`)))
        .toEqual(`2011-11-23`);
});

test(`Time format`, () => {
    expect(formatTime(new Date(`2011-11-23 14:30:22`)))
        .toEqual(`14:30:22`);
});

test(`Is date object`, () => {
    expect(isDateObject(new Date(`2011-11-23 14:30:22`))).toBeTruthy();
});

test(`Is date object`, () => {
    expect(isDateString(`2011-11-23 14:30:22`)).toBeFalsy();
    expect(isDateString(`2011-11-23`)).toBeTruthy();
});

test(`Get latest date`, () => {
    const date1 = new Date(`2011-11-23 14:30:22`);
    const date2 = new Date(`2011-11-24 14:30:22`);
    const date3 = new Date(`2011-11-25 14:30:22`);

    expect(getLatestDate(date1)).toMatchObject(date1);

    expect(getLatestDate([date1, date3, date2]))
        .toMatchObject(date3);
});

test(`Get earliest date`, () => {
    const date1 = new Date(`2011-11-23 14:30:22`);
    const date2 = new Date(`2011-11-24 14:30:22`);
    const date3 = new Date(`2011-11-25 14:30:22`);

    expect(getEarliestDate(date1)).toMatchObject(date1);

    expect(getEarliestDate([date1, date3, date1, date2]))
        .toMatchObject(date1);
});

test(`Timezone manipulation`, () => {
    let date = new Date(`2011-11-23 14:30:22`);

    date = removeTimezoneOffset(date);
    date = addTimezoneOffset(date);

    expect(formatDateTime(date))
        .toEqual(`2011-11-23 14:30:22`);
});
