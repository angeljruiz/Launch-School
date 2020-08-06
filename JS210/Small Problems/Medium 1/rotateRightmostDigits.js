// # P #
//
// - Input: number to be rotate, int representing digits to rotate
// - Output: number with n rightmost digits rotated
//
// # E #
//
// rotateRightmostDigits(735291, 1)
// rotateRightmostDigits(735291, 2)
// rotateRightmostDigits(735291, 3)
// rotateRightmostDigits(735291, 4)
// rotateRightmostDigits(735291, 5)
// rotateRightmostDigits(735291, 6)
//
// # D #
//
// - Left & Right arrays
//
// # A #
//
// - Init left & right to []
// - Store arr length - n - 1 elements of input to left
// - Store rest of digits to right
// - Call rotateArray with right array
// - Concat both arrays and return

const rotateArray = require('./rotateArray.js');

function rotateRightmostDigits(arr, n) {
  let left = [];
  let right = [];

  arr = String(arr).split('');

  left = arr.slice(0, arr.length - n);
  right = arr.slice(arr.length - n);

  right = rotateArray(right);

  right.forEach( item => {
    left.push(item);
  });

  return left.join('');
}

module.exports = rotateRightmostDigits;
