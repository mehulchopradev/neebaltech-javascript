import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";

dayjs.extend(utc);

const d1 = dayjs();
console.log(d1.year(), d1.date(), d1.month());
console.log(d1.hour(), d1.minute());

const d2 = dayjs('1986-11-25');
console.log(d2.year(), d2.date(), d2.month());

const d3 = d2.year(d1.year());
console.log(d3);

// add 1 week to now
const d4 = d1.add(1, 'w');
console.log(d4);

// dayjs() tht represents the start of the month
const d5 = d1.startOf('month');
console.log(d5);

const d6 = d1.utc();
console.log(d6);

console.log(d2.format('DD/MM/YYYY'));

/* const d3 = dayjs();
d3.year(2022);
d3.month(10);
const temp = d3.date(25);
console.log(temp);
console.log(d3.date()); */