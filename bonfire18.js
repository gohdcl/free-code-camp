/*
Return the lowest index at which a value (second argument) should be inserted
into a sorted array (first argument).

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1
 (0th index), but less than 2 (1st index).

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.sort()
*/

function where(arr, num) {
  // Find my place in this sorted array.
  var index;
  arr.push(num); // add num to the array
  // sort the array in ascending order
  arr.sort(function(a, b) {
    return a - b;
  });

  // search function finds the index where num resides in the array
  function search() {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === num) {
        return i;
      }
    }
  }

  // index is equal to the index returned by the search function
  index = search();

  return index;
}


where([40, 60], 50);
