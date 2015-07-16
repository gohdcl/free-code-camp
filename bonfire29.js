/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-
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
    return searchHash[match];
  }).toLowerCase();
  return str;
}

spinalCase('This Is Spinal Tap');
