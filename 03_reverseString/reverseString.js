const reverseString = function(str) {
  let splitLetters = str.split("");

  let reverseLetters = splitLetters.reverse();

  let joinWord = reverseLetters.join("");

  return joinWord
};

// Do not edit below this line
module.exports = reverseString;
