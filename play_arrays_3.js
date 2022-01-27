import loadash from "lodash";
const { some, intersection, union, uniq, every } = loadash;

const marks = [5, 6, 5, 4, 3, 7, 8, 1, 2, 10, 10, 9];

// Create a new array consisting of all the marks >= 5 from the marks array
// new array -> existing array
// filter operation

/* const m1 = [];
for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 5) {
    m1.push(marks[i]);
  }
}

console.log(m1); */

const m1 = marks.filter(element => element >= 5);
console.log('******** Marks more than or equal to 5*********');
console.log(m1);

// Create a new array consisting of marks === 10 or marks < 2 from the marks array
// filter
const m2 = marks.filter(element => element === 10 || element < 2);
console.log('********** Marks which is 10 or less than 2 *********');
console.log(m2);

// Create a new array consiting of all elements from marks array but with their values deducted by 1
// new array -> existing array
// map operation
/* const m3 = [];
for (let i = 0; i < marks.length; i++) {
  m3.push(marks[i] - 1);
}
console.log(m3); */

const m3 = marks.map(element => element - 1);
console.log('******** Marks deducted by 1 ************');
console.log(m3);

// Create a new array consisting of all marks scored more than 7, deduct 1 from them, sort them in descending order
// filter + map + sort

const m4 = marks
  .filter(element => element > 7)
  .map(element => element - 1)
  .sort((a, b) => b - a);
console.log(m4);

// Write logic to find out whether there is any student who scored more than 9 marks -- true/false
/* let found = false;
for (let i = 0; i < marks.length; i++) {
  if (marks[i] > 9) {
    found = true;
    break;
  }
}
console.log(found); */

console.log(some(marks, element => element > 9));
console.log(some(marks, element => element === 0));

const ma = [5, 6, 1, 3];
const mb = [6, 1, 2];


// common set of marks scored in both the divisions
console.log(intersection(ma, mb));

// union of marks scored across divisions
console.log(union(ma, mb));

// unique marks
console.log(uniq(marks));

// Write logic to find out whether all student sin the class scored more than or equal 5 marks
console.log(every(marks, element => element >= 5));