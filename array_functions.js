const isArray = (input) => {
  return Array.isArray(input);
};

const cloneArray = (input) => {
  if (!isArray(input)) {
    return null;
  }
  return [...input];
};

const getNElements = (input, n) => {
  if (!isArray(input)) {
    return null;
  }
  if (n > input.length) {
    return input;
  }
  return input.slice(0, n);
};

const getLastNElements = (input, n) => {
  if (!isArray(input)) {
    return null;
  }
  if (n > input.length) {
    return input;
  }
  return input.slice(input.length - n);
};

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

const sortArray = (input) => {
  if (!isArray(input)) {
    return null;
  }
  return input.sort();
};

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

module.exports = {
  isArray,
  cloneArray,
  getNElements,
  getLastNElements,
  mergeArrayToString,
  sortArray,
  findMostFrequent,
};
