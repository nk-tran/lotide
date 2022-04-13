const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("AssertArraysEqual = ", () => {
  it("returns 1 2 3 for [1, 2, 3] and returns true", () => {
    assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), ["1", "2", "3"];
  });

})

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);