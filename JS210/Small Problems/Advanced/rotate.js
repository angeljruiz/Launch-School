// # Problem #
//
// - Input: Nested array representing a matrix
// - Output: Nested array representing a matrix rotated
//
// # Examples #
//
// - 3  4  1
// - 9  7  5
//
// - its 90-degree rotation is:
//
// - 9  3
// - 7  4
// - 5  1
//
// # Data Structure #
//
// - Rotated: Nested array
// - Columns: matrix.len
// - Rows: matrix[0].len
//
// # Algorithm #
//
// - Init rotated to []
// - Init columns to matrix.len
// - Init rows to matrix[0].len
// - Loop 0 to rows using i
// --- Push [] to rotated
// --- Loop columns-1 to 0 using j
// ----- Push matrix[1][0] to rotated[i]
// ----- Push matrix[0][0] to rotated[i]
// ----- Next iteration
// ----- Push matrix[1][1] to rotated[i]
// ----- Push matrix[0][1]

function rotate(matrix) {
  let rotated = [];
  let columns = matrix.length;
  let rows = matrix[0].length;
  for(let i=0; i<rows; i++) {
    rotated.push([]);
    for(let j=columns-1; j>=0; j--) {
      rotated[i].push(matrix[j][i]);
    }
  }
  return rotated;
}

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

var newMatrix1 = rotate(matrix1);
var newMatrix2 = rotate(matrix2);
var newMatrix3 = rotate(rotate(rotate(rotate(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
