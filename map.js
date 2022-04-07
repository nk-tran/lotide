const eqArrays = function (a ,b) {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++){
      if (a[i] !== b[i]) {
        return false 
      }       
    }
    return true
  } else {
    return false
  }
};

const assertArraysEqual = function() {
  if (eqArrays) {
    console.log(`✅✅✅`)
  } else {
    console.log(`🛑🛑🛑`)
  }
};

const times = [1, 5, 34, 23, 4];
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(times, word =>  word);
console.log(results1);
