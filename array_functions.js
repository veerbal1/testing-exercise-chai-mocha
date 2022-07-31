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
    return null;
  }
  return input.slice(0, n);
};

module.exports = { isArray, cloneArray, getNElements };
