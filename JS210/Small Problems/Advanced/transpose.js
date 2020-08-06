// # Problem #
//
// - Input:
// --- Matrix - Nested array
// - Output:
// --- Transposed matrix
//
// # Examples #
//
// var matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];
//
// var newMatrix = transpose(matrix);
//
// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
//
// # Data Structure #
//
// - Transposed: nested array
//
// # Algorithm #
//
// - Init transposed to []
// - Init outer = matrix[0].len
// - Init inner = matrix.len
// - Loop from 0 to outer
// --- Push [] to transposed
// --- Loop from 0 to inner
// ----- Push matrix[inner][outer] to matrix[outer]

function transpose(matrix) {
  let transposed = [];
  let outer = matrix[0].length;
  let inner = matrix.length;
  for(let i=0; i<outer; i++) {
    transposed.push([]);
    for (let j=0; j<inner; j++) {
      transposed[i].push(matrix[j][i]);
    }
  }
  return transposed;
}

var matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
