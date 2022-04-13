// const eqArrays = function (a ,b) {
//   if (a.length === b.length) {
//     for (let i = 0; i < a.length; i++){
//       if (a[i] !== b[i]) {
//         return false 
//       }       
//     }
//     return true
//   } else {
//     return false
//   }
// };

// const assertArraysEqual = function() {
//   if (eqArrays) {
//     console.log(`✅✅✅`)
//   } else {
//     console.log(`🛑🛑🛑`)
//   }
// };

// const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

// const results1 = map(words, word =>  word[0]);
// console.log(results1);
