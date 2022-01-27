class Student {
  constructor(name, gender, roll, marks) {
    // object reference --- implicit variable --- this (current object)
    this.name = name;
    this.gender = gender;
    this.roll = roll;
    this.marks = marks;
  }

  getDetails() {
    // object reference --- implicit variable --- this (current object)
    return `Name: ${this.name}\nGender: ${this.gender}\nRoll: ${this.roll}\nMarks: ${this.marks}`;
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