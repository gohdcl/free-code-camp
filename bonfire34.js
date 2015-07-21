/*
Drop the elements of an array (first argument), starting from the front, until
the predicate (second argument) returns true.
*/
function drop(arr, func) {
  // Drop them elements.
  // note: while(func(arr[0]) === false) breaks the editor
  for (var i = 0 ; i < arr.length; i++) {
    if(func(arr[i]) === false) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });
