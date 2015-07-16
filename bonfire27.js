/*
Write a function that takes two or more arrays and returns a new array of unique
 values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their
original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array
should not be sorted in numerical order.

Pseudo-code:
  Iterate over each array;
  Inside each array, check that each value doesn't already exist in a new array
    used to hold unique numbers
  If that number isn't found in newArr, add it at the end
  Once all looping has finished, newArr will contain one of each number present
    in the three original arrays
*/
 function unite(arr1, arr2, arr3) {
  var newArr = []; // initialize empty array
  // concatenate all argument arrays
  for (var i = 1; i < arguments.length; i++) {
    arr1 = arguments[0].concat(arguments[i]);
  }
  arr1.forEach(function(element, index) { // check each element for uniqueness
    if(index !== 0) { // the first element is always unique
      if(arr1.indexOf(element) < index) { // if the value appears earlier in the array
        return; // end the function for this element
      }
    }
    // if the function does not return due to non-uniqueness
    newArr.push(arr1[index]); // add the element to newArr
  });
  return newArr;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);
