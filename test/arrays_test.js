const { isArray, cloneArray, getNElements } = require('../array_functions');

var expect = require('chai').expect;

describe('Array functions testing', function () {
  it('Check whether an `input` is an array or not', function () {
    expect(isArray([])).to.be.true;
    expect(isArray(['firstName', 'lastName'])).to.be.true;
    expect(isArray('string')).to.be.false;
    expect(isArray(false)).to.be.false;
    expect(isArray(369)).to.be.false;
  });

  it('Clone `input` array', function () {
    expect(cloneArray([])).to.be.deep.equal([]);
    expect(cloneArray(['a', 'b'])).to.be.deep.equal(['a', 'b']);
    expect(cloneArray(22)).to.be.null;
    expect(cloneArray('string')).to.be.null;
    expect(cloneArray(false)).to.be.null;
    expect(cloneArray(369)).to.be.null;
  });

  it('Get n elements from `input` array', function () {
    expect(getNElements([1, 2, 3, 4], 3)).to.be.deep.equal([1, 2, 3]);
    expect(getNElements([1, 2, 3, 4], 0)).to.be.deep.equal([]);
    expect(getNElements([1, 2, 3, 4], 5)).to.be.null;
    expect(getNElements(22)).to.be.null;
    expect(getNElements('string')).to.be.null;
    expect(getNElements(false)).to.be.null;
    expect(getNElements(369)).to.be.null;
  });
});
