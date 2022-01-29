/*
Should be able to create objects of data type Account
Every Account object must have attributes
  - name
  - type
  - balance

On every Account object, should be able to call the following methods
  - withdraw(amt) : returns the updated balance
  - deposit(amt) : returns the updated balance
*/
import MinBalNotMaintainedError from "../lib/min_bal_error.js";

export default class Account {
  constructor(name, type, balance) {
    this.name = name;
    this.type = type;
    this.balance = balance;
  }

  withdraw(amt) {
    // this

    if (amt <= 0) {
      throw new Error('Amt needs to be positive and more than 0');
    }

    if (this.balance - amt < 1000) {
      throw new MinBalNotMaintainedError('Balance cannot go below 1000');
    }

    this.balance -= amt;
    return this.balance;
  }

  deposit(amt) {
    // this
    this.balance += amt;
    return this.balance;
  }
}