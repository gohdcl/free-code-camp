/*
You will be provided with an initial array (the first argument in the destroyer
function), followed by one or more arguments. Remove all elements from the
initial array that are of the same value as these arguments.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
Array.filter()
*/

function destroyer(arr) {
  // Remove all the values
  var functionArguments = arguments;
  var filteredArr = arr.filter(function(element) {
    var notMatched = true; // set a sentinel value to true
    for(var i = 1; i < functionArguments.length; ++i) {
      // if the element is equal to the search values
      if(element === functionArguments[i]) {
        notMatched = false; // set the sentinel value to false
      }
    }
    return notMatched; // return true or false
  });
  return filteredArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
