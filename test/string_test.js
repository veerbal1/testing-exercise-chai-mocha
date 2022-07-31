const {
  insertHiphenBetweenTwoEvenNumbers,
  reverseString,
} = require('../string_functions');

var expect = require('chai').expect;

describe('Number functions testing', function () {
  it('Inset `-` between two even numbers to form a string', function () {
    expect(insertHiphenBetweenTwoEvenNumbers(02546)).to.null;
    expect(insertHiphenBetweenTwoEvenNumbers('025468')).to.be.equal(
      '0-254-6-8'
    );
  });
});

describe('String functions testing', () => {
  it('Reverse string', function () {
    expect(reverseString('Veerbal Singh')).to.be.equal('hgniS labreeV');
    expect(reverseString('A')).to.be.equal('A');
    expect(reverseString(35)).to.be.null;
  });
});
