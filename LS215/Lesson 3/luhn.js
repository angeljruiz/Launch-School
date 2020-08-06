// # Problem #
//
// Input:
// - String representing number
// - May contain non-digits
//
// Output:
// - True or false depending if input is valid
//
// Rules:
// - Counting from rightmost digit, double every other digit
// -- if number is greater than 10 subtract 9
// - Sum resulting digits
// - if this sum modulo 10 is 0 then it is valid
// - otherwise it is not
//
// # Examples #
//
// luhn('1230') == true
// luhn('1231') == false
// luhn("2323 2005 7766 3554") == true
// luhn("2323 2005 7766 3551") == false
//
// # Data structure #
//
// Input
// - Transformed to array of digits
// Output
// - true or false
//
// # Algorithm #
//
// - Transform input into an array
// -- Remove any non-digits
// - Double every other digit starting from the rightmost digit
// - Sum resulting digit array
// - Check this sum
// -- true if sum % 10 == 0
// -- false otherwise

function luhn(number) {
  number = number.split('').reverse();
  number = number.reduce(isValid, []).map(doubleOther).reduce(sum);
  if(number % 10 == 0) {
    return true;
  } else {
    return false;
  }
}

function doubleOther(item, index) {
  if(index % 2 == 0) return item;
  if(item * 2 >= 10) {
    return item * 2 - 9;
  } else {
    return item * 2;
  }
}

function isValid(cleaned, item) {
  let pattern = /[0-9]/;
  if(pattern.test(item)) cleaned.push(Number(item));
  return cleaned;
}

function sum(total, item) {
  return total + item;
}

console.log(luhn('123-0') == true);
console.log(luhn('1231') == false);
console.log(luhn("2323 2005 7766 3554") == true);
console.log(luhn("2323 2005 7766 3551") == false);
