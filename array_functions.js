/**
 * @description - This function will check if the input is an array or not.
 * @param {Object[]} input - array of elements
 * @return {boolean} - true if input is array, false otherwise
 */
const isArray = (input) => {
  return Array.isArray(input);
};

/**
 * @description - This function will clone an array
 * @param {Object[]} input - array of elements
 * @return {Object[]} - cloned array
 */
const cloneArray = (input) => {
  if (!isArray(input)) {
    return null;
  }
  return [...input];
};

/**
 * @description - This function will first n elements of an array.
 * @param {Object[]} input - array of elements
 * @param {*} n - number of elements to be returned from start
 * @return {Object[]} - array of first n elements
 */
const getNElements = (input, n) => {
  if (!isArray(input)) {
    return null;
  }
  if (n > input.length) {
    return input;
  }
  return input.slice(0, n);
};

/**
 * @description - This function will return n elements of an array from last.
 * @param {Object[]} input - array of elements
 * @param {*} n - number of elements to be returned from end
 * @return {Object[]} - array of last n elements
 */
const getLastNElements = (input, n) => {
  if (!isArray(input)) {
    return null;
  }
  if (n > input.length) {
    return input;
  }
  return input.slice(input.length - n);
};

/**
 * @description - This function will return string by joining all elements of an array.
 * @param {Object[]} input - array of elements
 * @param {string} separateWith - string to be used as separator
 * @return {string} - string of all elements joined by separator
 */
const mergeArrayToString = (input, separateWith) => {
  if (!isArray(input)) {
    return null;
  }
  if (separateWith) {
    return input.join(separateWith);
  } else {
    return input.join('');
  }
};

/**
 * @description - This function will return sorted array.
 * @param {Object[]} - array of elements
 * @return {Object[]} - sorted array
 */
const sortArray = (input) => {
  if (!isArray(input)) {
    return null;
  }
  return input.sort();
};

/**
 * @description - This function will return information about most frequent element in an array.
 * @param {Object[]} input - array of elements
 * @return {Object} - object with most frequent element and its frequency - { mostFrequent: string , count: number }
 */
const findMostFrequent = (input) => {
  if (!isArray(input)) {
    return null;
  }
  let mostFrequent = 0;
  let count = 0;
  let record = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i] in record) {
      record[input[i]] += 1;
    } else {
      record[input[i]] = 1;
    }
  }
  for (let key in record) {
    if (record[key] > count) {
      mostFrequent = key;
      count = record[key];
    }
  }
  return { mostFrequent, count };
};

/**
 * @description - This function will return sum of squares of all elements in an array.
 * @param {Object[]} input - array of elements 
 * @return {number} - sum of square of all elements
 */
const sumOfSquares = (input) => {
  if (!isArray(input)) {
    return null;
  }
  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] !== 'number') {
      return null;
    }
  }
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += Math.pow(input[i], 2);
  }
  return sum;
};

module.exports = {
  isArray,
  cloneArray,
  getNElements,
  getLastNElements,
  mergeArrayToString,
  sortArray,
  findMostFrequent,
  sumOfSquares,
};
