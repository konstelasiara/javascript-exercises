const sumAll = function(num1, num2) {
  let finalSum = 0; // initializing final summary storage

  if (num1 < 0 || num2 < 0) return "ERROR"; // check if negative
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR"; // check if actual integer

  // to determine which with higher and lower numbers
  let higher = Math.max(num1, num2);
  let lower = Math.min(num1, num2);

  // looping the number from higher to lower, count down
  for (let i = higher; i >= lower; i--) {
    finalSum += i
  }

  return finalSum
};

// Do not edit below this line
module.exports = sumAll;
