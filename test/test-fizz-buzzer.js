const expect = require('chai').expect
const adder = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('Should return fizz(num % 3 === 0), buzz(num % 5 === 0) or fizz-buzz(num % 15 === 0)', function() {
    const normalCases = [
      {
        num: 15,
        expected: 'fizz-buzz'
      },
      {
        num: 5,
        expected: 'buzz'
      },
      {
        num: 21,
        expected: 'fizz'
      },
      {
        num: 75,
        expected: 'fizz-buzz'
      },
      {
        num: 25,
        expected: 'buzz'
      }
    ];

    normalCases.forEach(function(input) {
      const answer = adder(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return error about args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = ['a', true, false,'!'];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        adder(input);
      }).to.throw(Error);
    });
  });


});
