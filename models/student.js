// Student IS-A CollegeUser
import CollegeUser from "./college_user.js";

class Student extends CollegeUser {
  constructor(name, gender, roll, marks) {
    // object reference --- implicit variable --- this (current object)
    super(name, gender); // CollegeUser.constructor(name, gender, this);

    this.roll = roll;
    this.marks = marks;
  }

  // method overriding
  getDetails() {
    // object reference --- implicit variable --- this (current object)
    return `${super.getDetails()}\nRoll: ${this.roll}\nMarks: ${this.marks}`;
  }

  getGrade = () => {
    // arrow functions remember the surrounding context under which they were created
    // this
    let grade;
    const marks = this.marks;

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
}

export default Student;