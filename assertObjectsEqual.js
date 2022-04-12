const eqObjects = function(object1, object2) {
  const objectOneArray = Object.keys(object1);
  const objectTwoArray = Object.keys(object2);
    
  if (objectOneArray.length !== objectTwoArray.length) {
    return false;
  }
  for (let i in object1) {
    if (object1[i] !== object2[i]) {
      return false;
    } else {
      return true;
    }
  }
};

const assertObjectsEqual = function(actual, expected) {
  let test = eqObjects(actual, expected)
  const inspect = require('util').inspect;
  if (test === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ba = { b: "2", a: "1" };
const ab = { a: "1", b: "2" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

