const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let list in object1) {
    if (object1[list] !== object2[list]) {
      return false;
    }
  } return true;
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
};