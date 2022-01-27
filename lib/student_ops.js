export function getDetails(name, gender, roll, marks) {
  // return 'Name: ' + name + '\nGender: ' + gender + '\nRoll: ' + roll + '\nMarks: ' + marks;
  return `Name: ${name}\nGender: ${gender}\nRoll: ${roll}\nMarks: ${marks}`;
}

export function getGrade(marks) {
  let grade;

  if (marks > 100 || marks < 0) {
    grade = 'I';
  } else if (marks >= 70) {
    grade = 'A';
  } else if (marks >= 60) {
    grade = 'B';
  } else if (marks >= 40) {
    grade = 'C';
  } else {
    grade = 'F';
  }

  return grade;
}

// in a file there can be only one export default
/* export default {
  getDetails,
  getGrade,
}; */

/* module.exports = {
 getDetails,
 getGrade,
}; */