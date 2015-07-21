/*
Flatten a nested array. You must account for varying levels of nesting.
*/
function steamroller(arr) {
  // I'm a steamroller, baby
  var flattened = [];
  for(var i = 0 ; i < arr.length ; i++) {
    if(Array.isArray(arr[i])) {
      flattened = flattened.concat(steamroller(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}

steamroller([1, [2], [3, [[4]]]]);
