// const eqArrays = function (a ,b) {
//   if (a.length === b.length) {
//     for (let i = 0; i < a.length; i++){
//       if (a[i] !== b[i]) {
//         return false;
//       }       
//     }
//     return true;
//   } else {
//     return false;
//   }
// }

// const assertArraysEqual = function() {
//   if (eqArrays) {
//     console.log(`✅✅✅`);
//   } else {
//     console.log(`🛑🛑🛑`);
//   }
// }

const letterPositions = function(sentence) {
  const results = {};
  
  for (i = 0; i < sentence.length; i++){
    let letterKey = results[sentence[i]]
    if (!letterKey) {
      results[sentence[i]] = [i]
    } else {
    results[sentence[i]].push(i)
    } 
  } return results
}
  


module.exports = letterPositions

  // console.log(letterPositions("hello"))