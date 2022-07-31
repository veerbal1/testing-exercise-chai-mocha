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

module.exports = {
  isArray,
  cloneArray,
  getNElements,
  getLastNElements,
  mergeArrayToString,
};
