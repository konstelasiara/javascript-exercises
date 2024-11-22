const sumAll = function(...args) {
  let finalSum = 0;

  if (!args.isInteger()) return "ERROR" // check if negative

  if ((!Number.isInteger(args[0])) || (!Number.isInteger[1])) {
    return "ERROR"
  } // check if actual integer

  for(let i = 0; i < args; i++){
    finalSum += args;
  }

  return finalSum
};

// Do not edit below this line
module.exports = sumAll;
