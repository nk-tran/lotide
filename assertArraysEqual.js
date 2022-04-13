const eqArrays = require('./eqArrays');
const assertArraysEqual = function() {
  if (eqArrays) {
    console.log(`✅✅✅`)
  } else {
    console.log(`🛑🛑🛑`)
  }
}

module.exports = assertArraysEqual;
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])