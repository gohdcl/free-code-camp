/*
Return the sum of all indices of elements of 'arr' that can be paired with one
other element to form a sum that equals the value in the second argument 'arg'.
If multiple sums are possible, return the smallest sum. Once an element has been
used, it cannot be reused to pair with another.

For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because 4, 2, 3
and 5 can be paired with each other to equal 7.

pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two
elements can be paired to equal 4, and the first element has an index of 0!

Pseudocode:
Loop through the array
  check that the current element can sum to arg with another element
  eliminate those elements from consideration (maybe move indices to an array to
    check against and sum at the end)
  move onto the next eligible element
return the sum of indices of the elements
*/
function pairwise(arr, arg) {

  // this array holds indices for pairwise numbers;
  // will be summed at the end
  var sumIndices = [];
  if (arr.length === 0) {
    return 0;
  }
  arr.forEach(function (element, index) {

    // logic to check if two numbers add to the second argument;
    // this loops through each number in the array
    for(var j = 0 ; j < arr.length ; j++) {
      if(element + arr[j] === arg && j !== index) {
        var unused = sumIndices.some(function(ele){
          return ele === index || ele === j;
        });
        if(unused === false) { // if j or index are not found in sumIndices
          sumIndices.push(index); // add the current index to the sum array
          sumIndices.push(j); // add index of the other term to the sum array
        }
      } // end if
    } // end for
  }); // end forEach
  // return the sum of all elements in sumIndices
  //return sumIndices;
  return sumIndices.reduce(function(sum, element){return sum + element;});
}

pairwise([1,1,1], 2);
