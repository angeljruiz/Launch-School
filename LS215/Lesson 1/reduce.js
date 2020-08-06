function myReduce(array, func, initial) {
  var sum = initial || 0;
  array.forEach( item => {
    sum = func(sum, item);
  });
  return sum;
}

module.exports = myReduce;
