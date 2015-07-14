/*
The DNA strand is missing the pairing element. Match each character
with the missing element and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to
the provided character.

Return the provided character as the first element in each array.
*/

function pair(str) {
  var strArray = str.split("");
  for(var i = 0; i < strArray.length; i++) {
    switch(strArray.shift()) {
      case "A":
        strArray.push(["A", "T"]);
        break;
      case "T":
        strArray.push(["T", "A"]);
        break;
      case "G":
        strArray.push(["G", "C"]);
        break;
      case "C":
        strArray.push(["C", "G"]);
        break;
    }
  }
 return strArray;
}

pair("GCG");
