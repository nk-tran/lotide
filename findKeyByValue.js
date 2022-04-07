const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} == ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} != ${expected}`);
  }
};

const findKeyByValue = function(find, genre) {
  let key = ""; 

  for (let result in find) {
    if (find[result] === genre) {
      return key;
    }
  }
} 

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)