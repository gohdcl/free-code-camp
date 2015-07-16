/*
Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe),
in a string to their corresponding HTML entities.
*/

function convert(str) {
  // &colon;&rpar;
  // create a hash table of all the characters that will be replaced
  var searchHash = {
    "\&": "&amp;",
    "\<":"&lt;",
    "\>": "&gt;",
    "\'": "&apos;",
    "\"": "&quot;"
  }; // end searchHash
  // create a regular expression from the hash keys and join them with OR,
  // make it global with the second argument
  var searchKey = new RegExp(Object.keys(searchHash).join("|"), "g");
  // assign str a new string with hash key replaced by its value (char code)
  // note: replace runs multiple times on a global RegEx, and the match argument
  // is the substring that matches searchKey
  str = str.replace(searchKey, function(match) {
    return searchHash[match]; // return the value stored by the key to replace
  });
  return str; // return str with char codes
}

convert('Dolce & Gabbana');
