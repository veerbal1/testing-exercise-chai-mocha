const {
  isArray,
  cloneArray,
  getNElements,
  getLastNElements,
  mergeArrayToString,
  sortArray,
  findMostFrequent,
  sumOfSquares,
} = require('../js/array_functions');

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
    expect(getNElements([1, 2, 3, 4], 5)).to.be.deep.equal([1, 2, 3, 4]);
    expect(getNElements(22)).to.be.null;
    expect(getNElements('string')).to.be.null;
    expect(getNElements(false)).to.be.null;
    expect(getNElements(369)).to.be.null;
  });

  it('Get last n elements from `input` array', function () {
    expect(getLastNElements([1, 2, 3, 4], 3)).to.be.deep.equal([2, 3, 4]);
    expect(getLastNElements([1, 2, 3, 4], 0)).to.be.deep.equal([]);
    expect(getLastNElements([1, 2, 3, 4], 5)).to.be.deep.equal([1, 2, 3, 4]);
    expect(getLastNElements(22)).to.be.null;
    expect(getLastNElements('string')).to.be.null;
    expect(getLastNElements(false)).to.be.null;
    expect(getLastNElements(369)).to.be.null;
  });

  it('Merge `input` array elements to form a string', function () {
    expect(mergeArrayToString(['Veerbal', 'Singh'], ' ')).to.be.equal(
      'Veerbal Singh'
    );
    expect(mergeArrayToString(['Veerbal', 'Singh'])).to.be.equal(
      'VeerbalSingh'
    );
    expect(mergeArrayToString([], '')).to.be.equal('');
    expect(mergeArrayToString([2, 3, 4], ',')).to.be.equal('2,3,4');
    expect(mergeArrayToString(['HTML', 'CSS'], '+')).to.be.equal('HTML+CSS');
    expect(mergeArrayToString(2, 3, 4)).to.be.null;
    expect(mergeArrayToString({ name: 'Veerbal' })).to.be.null;
  });

  it('Sort Array', function () {
    expect(sortArray([4, 3, 2, 1])).to.be.deep.equal([1, 2, 3, 4]);
    expect(sortArray(['z', 'y', 't', 'v'])).to.be.deep.equal([
      't',
      'v',
      'y',
      'z',
    ]);
  });

  it('Find out most frequent', function () {
    expect(
      findMostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])
    ).to.be.deep.equal({
      mostFrequent: 'a',
      count: 5,
    });
    expect(
      findMostFrequent([
        3,
        'a',
        'a',
        'a',
        2,
        2,
        2,
        2,
        2,
        2,
        3,
        'a',
        3,
        'a',
        2,
        4,
        9,
        3,
      ])
    ).to.be.deep.equal({
      mostFrequent: '2',
      count: 7,
    });
  });

  it('Sum of squares of elements in array', () => {
    expect(sumOfSquares([1, 2, 3, 4])).to.be.equal(30);
    expect(sumOfSquares([1, 2, '3', 4])).to.be.null;
  });
});
