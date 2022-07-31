const { isArray } = require('../array_functions');

var expect = require('chai').expect;

describe('Array functions testing', function () {
  it('Check whether an `input` is an array or not', function () {
    expect(isArray([])).to.be.true;
    expect(isArray(['firstName', 'lastName'])).to.be.true;
    expect(isArray('string')).to.be.false;
    expect(isArray(false)).to.be.false;
    expect(isArray(369)).to.be.false;
  });
});
