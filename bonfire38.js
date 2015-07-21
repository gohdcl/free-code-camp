/*
Create a function that sums two arguments together. If only one argument is
provided, return a function that expects one additional argument and will return
the sum.

For example, add(2, 3) should return 5, and add(2) should return a function that
is waiting for an argument so that var sum2And = add(2); return sum2And(3); // 5

If either argument isn't a valid number, return undefined.
*/
function add() {
  var args = arguments;
  if(typeof args[0] !== "number") {
    return undefined;
  } else {
    if(args[1] === undefined) {
      return function(newNum) {
        if(typeof newNum === "number") {
        return args[0] + newNum;
        }
        else {
          return undefined;
        }
      };
    } else if(typeof args[1] !== "number") {
        return undefined;
    } else {
      return args[0] + args[1];
    }
  }
}

add(2,3);
