// The Fibonacci series is a sequence of numbers in which each number is
//  the sum of the previous two numbers. The first two Fibonacci numbers are
//   1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth
//    is 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:
//
// F(1) = 1
// F(2) = 1
// F(n) = F(n - 1) + F(n - 2) where n > 2

let memo = {};

function fibonacci(n) {
  if(n <= 2) return 1;
  if(memo[n]) return memo[n];
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
  return memo[n];
}

console.log(fibonacci(50));
