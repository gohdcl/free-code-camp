/*
Make a function that looks through a list (first argument) and returns an array
of all objects that have equivalent property values (second argument).

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Object
Object.hasOwnProperty()
Object.keys()
*/

function where(collection, source) {
  var arr = []; // start with an empty array
  // What's in a name?
  var searchKey = Object.keys(source)[0];
  console.log(source[searchKey]);
  for(var i = 0; i < collection.length; i++) {
    if(collection[i].hasOwnProperty(searchKey)) {
      if(source[searchKey] === collection[i][searchKey]) {
        arr.push(collection[i]);
      }
    }
  }
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
