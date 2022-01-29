// Professor IS-A CollegeUser
import CollegeUser from "./college_user.js";

export default class Professor extends CollegeUser {
  constructor(name, gender, subjects) {
    // this --> Professor object
    super(name, gender); // CollegeUser.constructor(name, gender, this);

    this.subjects = subjects;
  }
}