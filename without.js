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
// }

// const assertArraysEqual = function() {
//   if (eqArrays) {
//     console.log(`✅✅✅`)
//   } else {
//     console.log(`🛑🛑🛑`)
//   }
// }



const without = function(source, itemsToRemove) {
  let newArray = []
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove[i] !== source[i]) {
      newArray.push(source[i])
    } 
  }
  return newArray
}

module.exports = without
// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]