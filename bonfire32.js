/*
Find the smallest number that is evenly divisible by all numbers in the provided
 range.

The range will be an array of two numbers that will not necessarily be in
numerical order.

Pseudocode:
The largest number in the array is the smallest possible common multiple, so
  start there
Check if the largest number is a multiple of every other number
If not, multiply by 2, 3, 4 etc.
Check again at each multiplication
*/

function smallestCommons(arr) {
  var base = Math.max(arr[0], arr[1]); // number is equal to the largest value
  var number;
  var multOfAll = false;
  var multiplier = 2;
  while(multOfAll === false) {
    for(var i = Math.min(arr[0], arr[1]); i < Math.max(arr[0], arr[1]); i++) {
      if (number % i !== 0) {
        // multiply the original number by the multiplier
        number = base * multiplier;
        multiplier++; // increment the multiplier
        break; // exit the for loop
      } // end if
      // if the for loop reaches this point on the last iteration (max - 1),
      // then number is a multiple of all divisors
      if(i === Math.max(arr[0], arr[1]) - 1) {
        multOfAll = true;
      } // end if
    } // end for
  } // end while
  return number;
} // end smallestCommons


smallestCommons([1,5]);
