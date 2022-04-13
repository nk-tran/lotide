const assert = require('chai')
const middle = require('../middle')

describe("finds middle of array", () => {
  it("should return 3 and 4 from 1, 2, 3, 4, 5, 7", () => {
    middle([1, 2, 3, 4, 5, 7]);
  })
  it("should return empty if less than 3 elements", () => {
    middle([1, 2]);
  })
})

// assertArraysEqual(middle([1, 2, 3, 4, 5, 7]))
// assertArraysEqual(middle([1, 2]))