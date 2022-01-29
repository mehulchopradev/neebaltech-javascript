import Student from "./models/student.js";

const marks = [5, 6, 5, 4, 3, 7, 8, 1, 2, 10, 10, 9];

// reduce() - Higher order function

// sum of marks scored in the class
/* let sum = 0;
for (let m of marks) {
  sum += m;
}
console.log(sum); */

// 1st argument --> (previousValue, element) => {}
// 2nd argument --> initialValue

const sum = marks.reduce((previousValue, element) => {
  const c = previousValue + element;
  return c;
}, 0);
console.log(sum);

const students = [
  new Student('mehul', 'm', 10, 56),
  new Student('jane', 'f', 13, 90),
  new Student('stevie', 'f', 15, 94),
  new Student('steve', 'm', 16, 78)
];
// find out the max marks that were scored for every gender
// {'m': 78, 'f': 94}

const hash = students.reduce((previousValue, student) => {
  const maxMarks = previousValue[student.gender];
  
  if (!maxMarks) {
    previousValue[student.gender] = student.marks;
  } else {
    if (maxMarks < student.marks) {
      previousValue[student.gender] = student.marks;
    }
  }

  return previousValue;
}, {});
console.log(hash);


/* const genderToMaxMarksHash = {};
for (const student of students) {
  const maxMarksFound = genderToMaxMarksHash[student.gender];
  
  if (!maxMarksFound) {
    genderToMaxMarksHash[student.gender] = student.marks; // student["marks"]
  } else {
    if (maxMarksFound < student.marks) {
      genderToMaxMarksHash[student.gender] = student.marks;
    }
  }
}
console.log(genderToMaxMarksHash); */