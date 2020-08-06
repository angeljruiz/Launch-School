function myMap(array, func) {
  var results = [];
  array.forEach( (item, index) => {
    results[index] = func(item);
  });
  return results;
}

// let plusOne = n =>n + 1;
// console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]

module.exports = myMap;
