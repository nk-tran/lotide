const tail = function(words) {
  return words.slice(1);
};

module.exports = tail;

const words = ["Yo Yo", "Lighthouse", "Labs"]
// // assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(tail(words));