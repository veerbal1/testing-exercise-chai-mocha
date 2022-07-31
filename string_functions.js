/**
 * @description - This function add - among two even number in number string and return it.
 * e.g. '126348' => '12-634-8'
 * @param {string} input - number string
 * @return {string} - number string with - among two even number
 */
const insertHiphenBetweenTwoEvenNumbers = (input) => {
  // If input is string and characters are numbers, else return null
  if (typeof input === 'string' && input.match(/^[0-9]+$/)) {
    let result = [input[0]];
    for (let i = 1; i < input.length; i++) {
      if (input[i - 1] % 2 === 0 && input[i] % 2 === 0) {
        result.push('-', input[i]);
      } else {
        result.push(input[i]);
      }
    }
    return result.join('');
  } else {
    return null;
  }
};

/**
 * @description - This function will reverse a string.
 * @param {string} input - string 
 * @return {string} - reversed string
 */
const reverseString = (input) => {
  if (typeof input === 'string') {
    let splitString = input.split('');
    let reversedCharacterArray = [];
    for (let i = splitString.length - 1; i >= 0; i--) {
      reversedCharacterArray.push(splitString[i]);
    }
    return reversedCharacterArray.join('');
  } else {
    return null;
  }
};

module.exports = {
  insertHiphenBetweenTwoEvenNumbers,
  reverseString,
};
