// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip,
//  and then log both the tip and the total amount of the bill to the console.
// You can ignore input validation and assume that the user will put in numbers.
//
// Example:
//
// What is the bill? 200
// What is the tip percentage? 15
//
// The tip is $30.00
// The total is $230.00

function tipCalculator() {
  let bill = parseFloat(prompt('What is the bill?'));
  let tipPercent = parseInt(prompt('What is the tip percentage?'), 10) / 100;
  let tip = Number(round(bill * tipPercent, 2));
  let total = round(bill + tip, 2);

  console.log('The tip is $' + tip);
  console.log('The total is $' + total);
}

function round(x, precision) {
  return x.toPrecision(String(parseInt(x)).length + precision);
}

tipCalculator();
