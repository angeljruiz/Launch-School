function logOddNumber(num) {
  for (var i = 1; i <= num; i += 2) {
    console.log(i);
  }
}

function multiplesOfThreeAndFive() {
  for (var i = 3; i <= 100; i++) {
    bang = i % 3 == 0 && i % 5 == 0 ? '!' : '';
    if(i % 3 == 0 || i % 5 == 0) {
      console.log(i + bang);
    }
  }
}

function logMultiples(num) {
  for (var i = 100; i > 0; i--) {
    if (i % num == 0 && i % 2 != 0) {
      console.log(i);
    }
  }
}

function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log('FizzBuzz');
    else if (i % 3 == 0) console.log('Fizz');
    else if (i % 5 == 0) console.log('Buzz');
    else console.log(i);
  }
}

function isPrime(num) {
  if (num <= 1) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

function isXor(op1, op2) {
  if ((op1 || op2) && !(op1 && op2)) return true;
  return false;
}

function generatePattern(num) {
  for (i = 0; i < num; i++) {
    var row = '';
    for (j = 1; j <= num; j++) {
      if (j < i + 2) row += j;
      else row += '*'
    }
    console.log(row);
  }
}

function startsWith(str, start) {
  var reg = new RegExp('^' + start);
  return reg.test(str);
}

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put c'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));
