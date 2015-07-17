/*
Return the sum of all odd Fibonacci numbers up to and including the passed
number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and
each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd
Fibonacci numbers under 4 are 1, 1, and 3.

Pseudo-code:
Determine all Fib. numbers up to and including argument num
Filter the odd ones into a new array with Array.prototype.filter
newArray.reduce to sum
*/

function sumFibs(num) {
  var fibArray = [],
  oddArray,
  prev = 0,
  curr = 1,
  next;
  while(curr <= num) {
    fibArray.push(curr);
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  oddArray = fibArray.filter(function(element) {
    if(element % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  });
  return oddArray.reduce(function(prevVal, currVal){
    return prevVal + currVal;
  });
}

sumFibs(4);

