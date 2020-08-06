// Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or
//  the product of all numbers between 1 and the entered integer, inclusive.
//
// Examples:
//
// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product.
//
// The sum of the integers between 1 and 5 is 15.
//
// loop to get proper input - int, x > 0
// loop to get either s or p translate that to true or false
// for loop from 1 to x
// -- if bool true sum else product
// return result

function sumOrProduct() {
  let sumOrProduct = 0;
  let endpoint;
  let input;
  do {
    input = Number(prompt('Please enter an integer greater than 0.'));
    if(input > 0) {
      endpoint = input;
      break;
    };
  } while (true);
  do {
    input = prompt('Enter "s" to compute the sum, or "p" to compute the product.');
    if(input === 's') {
      break;
    } else if(input === 'p') {
      sumOrProduct += 1;
      input = false;
      break;
    }
  } while (true);
  for(let i=1; i<= endpoint; i++) {
    input ? sumOrProduct += i : sumOrProduct *= i;
  }
  if(input) {
    console.log("The sum of the integers between 1 and " + endpoint + " is " + sumOrProduct);
  } else {
    console.log("The product of the integers between 1 and " + endpoint + " is " + sumOrProduct);
  }
}

sumOrProduct();
