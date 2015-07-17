/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-
by-dashes.
*/
by-dashes.
*/
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var searchHash = {
    "[a-z][A-Z]": "-",
    " ": "-",
    "_": "-"
  };
  var re = new RegExp(Object.keys(searchHash).join("|"), "g");
  str = str.replace(re, function(match){
    // if match is a lowercase-uppercase match
    if(match.match(/[a-z][A-Z]/g)) {
      return match[0] + "-" + match[1]; // stick a hyphen in the middle
    } else {
    return searchHash[match];
    } // end if-else
  }).toLowerCase();
  return str;
}

spinalCase('This Is Spinal Tap');
