/*
Check if the predicate (second argument) returns truthy (defined) for all
elements of a collection (first argument).

For this, check to see if the property defined in the second argument is present
 on every element of the collection.
*/
function every(collection, pre) {
  // Does everyone have one of these?
  var has = true;
  collection.forEach(function(element) {
    if(element.hasOwnProperty(pre) === false) {
      has = false;
    }
  });
  return has;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
