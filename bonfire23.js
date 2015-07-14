/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word,
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
*/
function translate(str) {
  var wordArray = str.split("");
  var letters = [];
  var changedWord;
  // is my first letter a vowel?
  var vowelHash = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };

  if (vowelHash.hasOwnProperty(wordArray[0])) {
    return str + "way";
  } // end if

  // else it starts with a consonant
  while (!vowelHash.hasOwnProperty(wordArray[0])) {
    letters.push(wordArray.shift()); // push the first char onto the letter array
  } // end while
  changedWord = wordArray.join("") + letters.join("") + "ay";
  return changedWord;
} // end translate

translate("consonant");
