/*
We'll pass you an array of two numbers. Return the sum of those two numbers and
all numbers between them.

The lowest number will not always come first.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.reduce()
*/

function sumAll(arr) {
  var total = Math.min(arr[0], arr[1]);

  for (var i = total + 1; i <= Math.max(arr[0], arr[1]); i++) {
    total += i;
  }
  return(total);
}

sumAll([1, 4]);
