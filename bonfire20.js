/*
Compare two arrays and return a new array with any items not found in both of
the original arrays.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
String.slice()
Array.filter()
Array.indexOf()
String.concat()
*/

function diff(arr1, arr2) {
  var newArr = [];
  var newArr2 = [];
  // Same, same; but different.

  // Check the first array for items that have a match
  // in the second array. Add any items that do not have
  // a match to newArr
  newArr = arr1.filter(function(element) {
    var notMatched = true; // set a sentinel value to true
    for(var i = 0; i < arr2.length; i++) {
      // if the element is equal to the search values
      if(element === arr2[i]) {
        notMatched = false; // set the sentinel value to false
      } // end if
    } // end for
    return notMatched; // return true or false
  }); // end .filter

  // Check the second array for items that have a match
  // in the first array. Add any items that do not have
  // a match to newArr2
  newArr2 = arr2.filter(function(element) {
    var notMatched = true; // set a sentinel value to true
    for(var j = 0; j < arr1.length; j++) {
      // if the element is equal to the search values
      if(element === arr1[j]) {
        notMatched = false; // set the sentinel value to false
      } // end if
    } // end for
    return notMatched; // return true or false
  }); // end .filter

  // add the second new array to the first
  for (var k = 0; k < newArr2.length; k++) {
    newArr.push(newArr2[k]);
  } // end for
  return newArr;
} // end diff

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
