/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For
example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a
prime number, because it's only divisible by itself.

The provided number may not be a prime.
*/
function sumPrimes(num) {
  var sum = 0;
  for(var i = 2; i <= num; i++) {
    var divisors = 0; // number of divisors i has
    var div = 1; // the divisor value
    // check for primacy
    // loop until a number is shown not to be prime or until div reaches i
    while (divisors <= 3 && (div <= i)) {
      if(i % div === 0) {
        divisors++;
      }
      div++;
    }
    if (divisors === 2) {
      sum += i;
    }
  }
  return sum;
}

sumPrimes(10);
