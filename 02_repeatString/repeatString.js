const repeatString = function(str, num) {
  let repsStr = ""; // takes on whatever string, even empty

  if (num < 0) return "ERROR"

  for (let i = 0; i < num; i++) {
    repsStr = repsStr + str; // if empty, keeps empty; when str is given, the blank string is then added
  }

  return repsStr;
};

// Do not edit below this line
module.exports = repeatString;
