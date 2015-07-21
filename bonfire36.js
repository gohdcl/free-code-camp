/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
  var binArr = str.split(" "); // split the string into an array, space delimited
  binArr.forEach(function(element, index) { // for each element in the array
    var digit = parseInt(element, 2); // convert binary to integer
    binArr[index] = String.fromCharCode(digit); // convert integer into a char
  });
  str = binArr.join(""); // turn the array back into a string
  return str;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
