function sumPrimes(num) {
  var prime = [];
  var primeout = [];
  var total = 0;
  for (var i=2; i<=num; i++) {
    prime.push(i);
  }
  for (i=0; i<prime.length; i++) {
    if (isPrime(prime[i])) {
      primeout.push(prime[i]);
    }
  }
  for (var k=0; k<primeout.length; k++) {
    total += primeout[k];
  }
  
  return total;
}

function isPrime(num) {
  var check = [];
  for (var i=2; i<num; i++) {
    check.push(i);
  }
  for (i=0; i<check.length; i++) {
    if (num % check[i] === 0 && num !== check[i]) {
      return false;
    } 
   }
  return true;
}

sumPrimes(1000);