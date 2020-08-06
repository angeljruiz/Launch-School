// # P #
//
// - Input: Array to be rotated
// - Output: Rorated Array
//
// # E #
//
// rotateArray([1, 2, 3]) => [2, 3, 1]
// rotateArray(['a', 'b', 'c']) => ['b', 'c', 'a']
//
// # D #
//
// - Rotated var to store results
// - Temp var to hold leftmost element of array
//
// # A #
//
// - Init rotated to []
// - Init temp to leftmost element of input
// - From index 1 to last element of input store into rotated
// - Push temp to rotated

function rotateArray(arr) {
  let rotated = [];
  let temp;

  if(!Array.isArray(arr)) return undefined;
  if(arr.length == 0) return arr;

  temp = arr[0];

  for(let i=1; i<arr.length; i++) {
    rotated.push(arr[i]);
  }

  rotated.push(temp);

  return rotated;
}


module.exports = rotateArray;
