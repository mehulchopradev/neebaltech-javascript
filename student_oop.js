/* const s1 = {
  name: 'mehul',
  roll: 10,
  gender: 'm',
  marks: 90
};

const s2 = {
  name: 'jane',
  roll: 12,
  gender: 'f',
  marks: 67
};

console.log(s1.roll);
console.log(s2.marks);

s1.marks = 60;

console.log(s1);
console.log(s2); */

// create Student objects from the Student class

import Student from "./models/student.js";

// const s1 = new Student();
// Internally
// 1. new ----> reserve some memory in the RAM ---- 4005
// 2. Student.constructor(4005)

const s1 = new Student('mehul', 'm', 10, 90);
// Internally
// 1. new ----> reserve some memory in the RAM --- 4006
// 2. Student.constructor('mehul', 'm', 10, 90, 4006)


const s2 = new Student('jane', 'f', 11, 45);

/* const name = s1.name;
const gender = s1.gender;
const roll = s1.roll;
const marks = s1.marks; */

// Object destructuring
/* const { name: studentName, gender, roll, marks } = s1;

console.log(studentName);
console.log(gender);
console.log(roll);
console.log(marks); */

/* const s3 = new Student('jill', 'f', 12);
const { gender, marks=0 } = s3;
console.log(gender);
console.log(marks); */

const s4 = {
  name: 'elon',
  gender: 'm',
  address: {
    state: 'CA',
    country: 'USA'
  }
};

const { name: personName, address: { state, country } } = s4;
console.log(personName);
console.log(state);
console.log(country);


// console.log(s1);
// console.log(s2);

// console.log(s1.getDetails());
// Internally
// Student.getDetails(s1)

// console.log(s2.getDetails());
// Internally
// Student.getDetails(s2)

// console.log(s2.getGrade());
// Internally
// Student.getGrade(s2)

// console.log(s1.getGrade());