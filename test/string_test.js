const { insertHiphenBetweenTwoEvenNumbers } = require('../string_functions');

var expect = require('chai').expect;

describe('Number functions testing', function () {
  it('Inset `-` between two even numbers to form a string', function () {
    expect(insertHiphenBetweenTwoEvenNumbers(02546)).to.null;
    expect(insertHiphenBetweenTwoEvenNumbers('025468')).to.be.equal(
      '0-254-6-8'
    );
  });
});
