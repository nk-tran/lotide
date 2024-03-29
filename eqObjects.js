const { keys } = require("prelude-ls");

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} == ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed:${actual} != ${expected}`);
//   }
// };

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2)

  if (keys1.length !== keys2.length) {
    return false
  }
  for (let list in object1){
    if (object1[list] !== object2[list]) {
      return false
    }
  } return true
} 

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

module.exports = eqObjects;