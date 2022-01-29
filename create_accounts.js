import Account from "./models/account.js";

const a1 = new Account('mehul chopra', 'Savings', 10000);

console.log(a1.deposit(2000));


try {
  console.log(a1.withdraw(12000));
} catch (err) {
  console.log(err);
}


console.log('Program ends...');