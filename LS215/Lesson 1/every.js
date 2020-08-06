function myOwnEvery(array, func) {
  array.forEach( item => {
    if(!func(item)) return false;
  });
  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));
