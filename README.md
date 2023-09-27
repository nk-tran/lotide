# Lotide

A mini clone of the [Lodash](https://lodash.com) library.


## Usage

**Install it:**

`npm install @nktran/lotide`

**Require it:**

`const _ = require('@nktran/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

**countLetters(string): count each letter.

**countOnly(allItems, itemsToCount): counts how many times item appears in array.

**eqArrays(array1, array1): returns true if length of arrays are equal.

**eqObjects(object1, object2): returns true if objects are equal.

**findKey(object, callback) returns the first key in object for which the callback returns a truthy value.

**findKeyByValue(object, value): returns the first key which contains the given value. 

**head(array): returns the first element of an array. 

**letterPositions(string): returns keys and values of each element in array

**map(array, callback): returns a new array based on the results of the callback function.

**middle(array): returns the an array with the middle element of array if array is odd, the middle 2 elements if array is even

**tail(array): returns an array consisting of all but the first element of array. Returns an empty array if array is empty.

**takeUntil(array, callback): Returns an array with the elements of the array from the beginnig until the callback returns a truthy value.

**without(array, itemsToRemove): removes elements from array listed in itemsToRemove.
