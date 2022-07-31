const insertHiphenBetweenTwoEvenNumbers = (input) => {
  // If input is string and characters are numbers, else return null
  if (typeof input === 'string' && input.match(/^[0-9]+$/)) {
    let result = [input[0]];
    for (let i = 1; i < input.length; i++) {
      if (input[i - 1] % 2 === 0 && input[i] % 2 === 0) {
        result.push('-', input[i]);
      }else{
        result.push(input[i]);
      }
    }
    return result.join('');
  } else {
    return null;
  }
};

module.exports = {
  insertHiphenBetweenTwoEvenNumbers,
};