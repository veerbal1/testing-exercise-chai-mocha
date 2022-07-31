const isArray = (input) => {
  return Array.isArray(input);
};

const cloneArray = (input) => {
  if (!isArray(input)) {
    return null;
  }
  return [...input];
};

module.exports = { isArray, cloneArray };
