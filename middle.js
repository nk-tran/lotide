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
  return mid
}


module.exports = middle; 

 
 
