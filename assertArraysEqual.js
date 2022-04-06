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


assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])