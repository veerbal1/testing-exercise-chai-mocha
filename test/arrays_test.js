const { returnEmptyArray } = require('../array_functions');

var expect = require('chai').expect;

describe('Arrays', function () {
  it('Should return empty error', function () {
    expect(returnEmptyArray()).to.be.deep.equal([]);
  });
});
