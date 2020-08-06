// # Problem #
//
// - Input: Array
// - Output: Sorted array
//
// # Examples #
//
// [9, 5, 7, 1] -->
// [[9, 5], [7, 1]] -->
// [[[9], [5]], [[7], [1]]]
// [[[9], [5]], [[7], [1]]] -->
// [[5, 9], [1, 7]] -->
// [1, 5, 7, 9]
//
// [9, 5, 7, 1, 4] => [[9, 5], 7, 1, 4]
// [[9, 5], 7, 1, 4] => [[9, 5], [7, 1, 4]]
// [[9, 5], [7, 1, 4]] => [[[9], [5]], [7, 1, 4]]
// [[[9], [5]], [7, 1, 4]] => [[[9], [5]], [[7, 1], 4]]
// [[[9], [5]], [[7, 1], 4]] => [[[9], [5]], [[[7], [1]], [4]]]
//
// # Algorithm #
//
// find half of [9, 5, 7, 1, 4] => 2
// split input into [9, 5, 7] and [1, 4]
// repeat until halves consist of just a sinular element
// [9, 5, 7] => [9, 5] + [7] => [9] + [5] + [7]
// combine all these pieces [[[[9], [5]], [7]], [[1], [4]]]
//
// mergeSort [   [[ [9], [5] ], [7] ]  ,  [ [1], [4] ]   ]
//
// grab first element [[ [9], [5] ], [7] ] => if both elements [ [9], [5] ] & [7] do not contain nested items then merge
// else grab the first element [ [9], [5] ] if both elements [9] & [5] do not contain nested items then merge into [5, 9]
// [[5, 9], [7] ] if both elements [5, 9] & [7] do not contain nested items then merge into [5, 7, 9]
//
// grab second element [ [1], [4] ] => if both elements [1] & [4] do not contain nested items then merge into [1, 4]
//
// mergeSort [   [[9], [5]]   , [[7], [1]]   ]
//
// grab first element [[9], [5]] => if both elements [9] & [5] do not contain nested items then merge into [5, 9]
//
// grab second element [[7], [1]] => if both elements [7] & [1] do not contain nested items then merge into [1, 7]
//
// return merge(first, second)


const merge = require('./merge.js')

function breakDown(arr) {
  let half = (arr.length - 1) / 2;
  let first = arr.slice(0, half + 1);
  let second = arr.slice(half + 1, arr.length);
  if(first.length > 1) first = breakDown(first);
  if(second.length > 1) second = breakDown(second);
  return [first, second];
}

function combine(arr) {
  let first = arr[0];
  let second = arr[1];
  if(Array.isArray(first[0])) first = combine(first);
  if(Array.isArray(second[0])) second = combine(second);
  return merge(first, second);
}

function mergeSort(arr) {
  return combine(breakDown(arr));
}

console.log(mergeSort([9, 5, 7, 1, 4, 4, 283, 231, -9]));




// console.log(mergeSort([9, 5, 7, 1]));
