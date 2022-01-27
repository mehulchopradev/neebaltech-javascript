import Student from './models/student.js';

function xyz(func) {
  console.log('Evaluating the passed function');
  // console.log(func()); // current object is undefined
  console.log(func()); // with arrow functions they remember the current object (s1)
}

const s1 = new Student('mehul', 'm', 10, 90);
// const cb = s1.getGrade(); // cb (callable) --> Function object
// Student.getGrade(s1);

const cb = s1.getGrade;

xyz(cb);
