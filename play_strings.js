import lodash from 'lodash';
const { capitalize, camelCase } = lodash;

const fullName = 'mehul chopra';

// upper case
const u = fullName.toUpperCase();
console.log(u);
console.log(fullName);

const [firstName, lastName] = fullName.split(' ');
console.log(firstName, lastName);

console.log(fullName.charAt(0));
console.log(fullName.charAt(1));
console.log(fullName[0]);

console.log(fullName.indexOf('c'));
console.log(fullName.lastIndexOf('h'));

const msg = 'good morning. it is a nice morning';
const r = msg.replace('morning', 'night');
console.log(r);
// console.log(msg.replaceAll('morning', 'night'));

const data = '          mehul,m,11,90   ';
const cd = data.trim();
console.log(cd);
console.log(data);

console.log(msg.startsWith('good'));
console.log(msg.endsWith('night'));

console.log(capitalize(fullName));
console.log(camelCase(fullName));