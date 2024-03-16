// Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
// formed by reversing the digits of 'x' without using any built-in methods for reversal. After
// reversing the digits, determine whether the resulting number has any prime factors. If it does
// have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."

//Solution:

function reverseNumberAndCheckPrimeFactors(x) {
  if (x <= 0) {
   Return 'No';
  }

  // Reverse the digits of x.
  let reversed = 0;
  let num = x;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  // Check if the reversed number has any prime factors.
  function isPrime(num) {
    if (num < 2)
    {
      return false;
    }
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) 
      {
        return false;
      }
    }
    return true;
  }

  let factors = [];
  for (let i = 2; i <= reversed; i++) {
    if (reversed % i === 0 && isPrime(i)) {
      factors.push(i);
    }
  }

  // Return the result
  if (factors.length > 0) {
    return `Yes${factors.join('- ')}`;
  } else {
    return 'No';
  }
}
