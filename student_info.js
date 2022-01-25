// Define two functions
  // getDetails (name, gender, roll, marks)
    /*
    Name: mehul\n
    Gender: m\n
    Roll: 10\n
    Marks: 56
   */

  // getGrade(marks)
    /*
    >= 70 - A
    >= 60 - B
    >= 40 - C
    < 40 - F
    > 100 or < 0 - I
    */
// call these two functions with sample student data

// const student_ops = require('./lib/student_ops.js');
import student_ops from './lib/student_ops.js';

// procedural style
const name = 'mehul';
const gender = 'm';
const marks = 34;
const roll = 10;

console.log(student_ops.getDetails(name, gender, roll, marks));
console.log(student_ops.getGrade(marks));

// object oriented programming style
// 1. Real world actors (Student)  ------- Software as entities (data in the RAM) ----- Objects in the RAM
// 2. Real world actor characteristics ---- Attributes of those objects in the RAM
// 3. Real world actor actions ----- Methods being called on those objects in the RAM

// giving structure to ur objects
  // class (Es6)
  // at one common place
  // a class even gives a human readable data -type to the objects