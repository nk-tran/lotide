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
  //empty array
  for (let letter of string) {
    //everytime a letter from string appears, temporarily store it in "letter" to loop
    if (letter !== " ") {
      //if letter is not a " ", move forward
      if (result[letter]) {
        //if result has a temporary value then move forward
      result[letter] = result[letter]+ 1;
      //if the key exists already, value of key +1
    } else {
      result[letter] = 1;
      //if key does not exist, make that key = 1
    }
  }
  }console.log(result)
}


countLetters("lighthouse in the house")
/*
result 
{l : 1 
i : 1
g: 1
h :1
t: 1}
letter  i

*/
// {h: 1, e: 1, l:2, o: 1}