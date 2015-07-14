/*
Convert the given number into a roman numeral.
*/

function convert(num) {
  var roman = "";

  var lookup = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL:40,
  X: 10,IX: 9, V: 5, IV: 4, I: 1};

  for (var i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    } // end while
  } // end for
  return roman;
}

convert(36);
