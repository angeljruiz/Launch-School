myReduce = require('./reduce.js')

function totalArea(rectangles) {
  return myReduce(rectangles, (sum, item) => {
    return sum + item[0] * item[1];
  });
}

function totalSquareArea(rectangles) {
  return totalArea(rectangles.filter( item => item[0] == item[1]));
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121
