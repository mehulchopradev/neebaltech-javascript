export default class CollegeUser {
  constructor(name, gender) {
    // this -- Student object, Professor object, any subclass object of CollegeUser
    this.name = name;
    this.gender = gender;
  }

  getDetails() {
    // this -- Student, Professor, any subclass object of CollegeUser
    return `Name: ${this.name}\nGender: ${this.gender}`;
  }
}