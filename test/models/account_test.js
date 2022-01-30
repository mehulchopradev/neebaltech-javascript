import chai from 'chai';
const { expect } = chai;

import Account from '../../models/account.js';

describe('account class test suite', function () {
  let account;

  beforeEach(function () {
    // this executes before every test case
    account = new Account('mehul', 'Savings', 9000);
  });

  describe('withdraw() test suite', function () {
    const scenarios = [
      {
        id: '1a',
        title: 'When amount passed is less than 0',
        inputs: {
          withdrawlAmt: -90,
        },
        output: {
          expectError: 'Amt needs to be positive and more than 0'
        }
      },
      {
        id: '1b',
        title: 'When amount passed in causes low balance',
        inputs: {
          withdrawlAmt: 9500,
        },
        output: {
          expectError: 'Balance cannot go below 1000'
        }
      },
      {
        id: '1c',
        title: 'When amount passed in is fine for withdrawl',
        inputs: {
          withdrawlAmt: 1000,
        },
        output: {
          amt: 8000
        }
      }
    ];

    scenarios.forEach(({ id, title, inputs, output }) => {
      it(`${id}: ${title}`, function () {
        const { withdrawlAmt } = inputs;
        const { amt, expectError } = output;

        if (expectError) {
          expect(() => {
            account.withdraw(withdrawlAmt)
          }).to.throw(expectError);
        } else {
          expect(account.withdraw(withdrawlAmt)).to.be.eql(amt);
        }
      });
    });
  });
});