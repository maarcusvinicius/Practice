function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function main() {
  const primeNumbers = Array.from({ length: 1000 }, (_, i) => i + 1)
    .filter(isPrime);
  return primeNumbers.reduce((acc, val) => acc + val, 0);
}

console.log(main());