/*
If all letters are present in the range, return undefined.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()
*/

function fearNotLetter(str) {
  var missing; // undefined
  var count = 0;
  // initialize i to the charCodeAt the first index, check that i equals the
  // charCodeAt the char in the string corresponding with index count,
  // return the character from code i if they do not match
  for (var i = str.charCodeAt(0) ; i < str.charCodeAt(str.length - 1); i++)   {
    if(i !== str.charCodeAt(count)) {
       return String.fromCharCode(i);
    }
    count++;
  }
  return missing;
}

fearNotLetter('abce');
