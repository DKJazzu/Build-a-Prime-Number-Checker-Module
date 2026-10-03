function isPrime(num) {
  num = Number(num);

  if (num <= 1 || !Number.isInteger(num)) return false;

  if (num <= 3) return true;

  // eliminate multiples of 2 and 3 to reduce factor checks
  if (num % 2 === 0 || num % 3 === 0) return false;

  // apply 6k ± 1 factorization to reduce candidate factor checks
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

module.exports = { isPrime };
