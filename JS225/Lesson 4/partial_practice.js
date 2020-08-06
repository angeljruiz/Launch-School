function subtract(a, b) {
  return a - b
}

function makeSubN(n) {
  return function(arg1) {
    return subtract(arg1, n)
  }
}

function multiply(a, b) {
  return a * b;
}

function makePartialFunc(func, b) {
  return function(arg1) {
    return func(arg1, b)
  }
}

let mult5 = makePartialFunc(multiply, 5)

console.log(mult5(100))