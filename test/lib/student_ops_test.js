import chai from 'chai';

const { expect } = chai;

import { getDetails, getGrade } from '../../lib/student_ops.js';


describe('testing student_ops module', function () {
  describe('testing getDetails()', function() {
    // test cases
    it('returns a formatted string when passing all the data', function () {
      // test steps
      const actual = getDetails('mehul', 'm', 10, 90);
  
      // test assertion
      const expected = 'Name: mehul\nGender: m\nMarks: 90\nRoll: 10';
      expect(actual).to.be.eql(expected);
    });
  });

  describe('testing getGrade()', function () {
    const scenarios = [
      {
        id: '1a',
        title: 'Returns an I grade for absurd marks passed',
        inputs: {
          marks: 1000
        },
        output: 'I',
      },
      {
        id: '1b',
        title: 'Returns a A grade for marks >= 70',
        inputs: {
          marks: 78
        },
        output: 'A',
      },
      {
        id: '1c',
        title: 'Returns an B grade for marks >= 60',
        inputs: {
          marks: 69
        },
        output: 'B',
      },
      {
        id: '1d',
        title: 'Returns a C grade for marks >= 40',
        inputs: {
          marks: 55
        },
        output: 'C',
      },
      {
        id: '1e',
        title: 'Returns a F grade for marks < 40',
        inputs: {
          marks: 35
        },
        output: 'F',
      }
    ];

    scenarios.forEach(scenario => {
      const { id, title, inputs: { marks }, output } = scenario;
      it(`${id}: ${title}`, function () {
        expect(getGrade(marks)).to.be.eql(output);
      });
    });
  });
});