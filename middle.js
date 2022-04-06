const eqArrays = function (a ,b) {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++){
      if (a[i] !== b[i]) {
        return false 
      }       
    }
    return true
  } else {
    return false
  }
}

const assertArraysEqual = function() {
  if (eqArrays) {
    console.log(`✅✅✅`)
  } else {
    console.log(`🛑🛑🛑`)
  }
}

const middle = function(array) {
  let length = array.length
  let midIndex = Math.floor(length / 2);
  let mid = [];

  if (length < 3) return []
  else if (length % 2 !== 0) {
    mid.push(array[midIndex])
  } else {
    mid.push(array[midIndex -1])
    mid.push(array[midIndex])
  }
  console.log(mid)
  return mid
}
middle([1, 2, 3, 4, 5, 7])
middle([1, 2])

 
 
