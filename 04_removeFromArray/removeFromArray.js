const removeFromArray = function(arr, ...args) {
  let removedResult = [];                  // to collect the result

  for (let coll of arr) {
    if (!args.includes(coll)) {            // if NOT part of args are in the coll
      removedResult.push(coll);            // then push the coll array into removedResult
    }
  }

  return removedResult
};

// Do not edit below this line
module.exports = removeFromArray;
