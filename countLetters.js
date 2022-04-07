const { count } = require("console");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} == ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:${actual} != ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (result[letter]) {
      result[letter] = result[letter]+ 1;
    } else {
      result[letter] = 1;
    }
  }
  }console.log(result)
}


countLetters("lighthouse in the house")

// {h: 1, e: 1, l:2, o: 1}