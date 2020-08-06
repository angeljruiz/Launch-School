// # Problem #
//
// Input:
// - string representing a phone number
// - may contain non-digit characters
// - may be invalid
// Output:
// - cleaned up phone number string
// - string of 10 0's if invalid input
// Rules:
// - remove invalid characters
// - must be 10 or 11 digits
// - if 11 digits the first digit must be a 1 and trimmed away
//
// # Examples #
//
// # Data structure #
//
// Input:
//   array of characters
// Intermediary:
//   string
//
// # Algorithm #
//
// transform input string into array
// remove invalid characters and add valid ones to result string
// check the array's length
// - if 10 digits return cleaned up number
// - if 11 digits and first digit is a 1 return cleaned up number
// - otherwise return 0000000000

function cleanup(number) {
  number = number.split('');
  let result = number.reduce( (result, item) => {
    let pattern = /[0-9]/;
    if(pattern.test(item)) result += item;
    return result;
  }, '');
  if(result.length == 10 || result.length == 11) {
    if(result.length == 11) {
      if(result[0] != 1) return '0000000000';
      result = result.slice(1);
    }
    return result;
  } else {
    return '0000000000';
  }
}

console.log(cleanup('(231) 234-2345 ')) //2312342345
console.log(cleanup('123.123.2345 ')) //1231232345
console.log(cleanup('28462947173 ')) //0000000000
console.log(cleanup('128462947173 ')) //0000000000
console.log(cleanup('1-343-234-1223- ')) //3432341223
console.log(cleanup('281759348 ')) //0000000000
console.log(cleanup('(234)234-23481 ')) //0000000000
console.log(cleanup('2334.234.2345 ')) //0000000000
console.log(cleanup('1-234-234-23451 ')) //0000000000
