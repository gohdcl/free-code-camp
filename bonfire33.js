/*
Create a function that looks through an array (first argument) and returns the
first element in the array that passes a truth test (second argument).
*/

function find(arr, func) {
  var num; // num is not initialized / undefined
  for(var i = 0 ; i < arr.length ; i++) { // for each element in the array
    if (func(arr[i]) === true) { // if the truth test passes
      return arr[i]; // return the first element that passes it
    }
  }
  return num; // if no elements pass the truth test, return undefined
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
