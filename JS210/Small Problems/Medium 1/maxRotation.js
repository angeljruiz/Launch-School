// Rotation Part 3
// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.
//
// Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.
//
// Examples:
//
// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845

// 1234 => 2341 1
// 2341 => 2413 2
// 2413 => 2431 3
//
// 105 => 051
// 051 => 015 => 15
//
// rotateRightmostDigits length
// rotateRightmostDigits length -1
// ...
// rotateRightmostDigits 2



const rotateRightmostDigits = require('./rotateRightmostDigits.js');

function maxRotation(str) {
  for(let i=str.length; i>=2; i--) {
    str = rotateRightmostDigits(str, i);
  }
  return Number(str);
}

console.log(maxRotation('8703529146'));
