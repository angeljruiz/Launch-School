// Build a program that asks a user for the length and width of a room in meters,
//  and then logs to the console the area of the room in both square meters and square feet.
//
// Note: 1 square meter == 10.7639 square feet
//
// Do not worry about validating the input at this time. Use the prompt() function to collect user input.
//
//
// - Input: length then width of room in meters using prompt()
// - Output: Square feet and square meters of room
//
// - Prompt length & store
// - Prompt width & store
// - Multiply length and width and store
// - Convert square meters to square feet
// -- 1 Square meter == 10.7639 square feet
// - Output both values

function howBig() {
  const MTSConversion = 10.7639;
  let length = prompt("What's the length of the room in meters?");
  let width = prompt("What's the width of the room in meters?");
  let squareMeters = round(length * width, 2);
  let squareFeet = round(squareMeters * MTSConversion, 2);

  console.log("The area of the room is " + squareMeters +  " square meters (" + squareFeet + " square feet).")
}

function round(x, precision) {
  return x.toPrecision(String(parseInt(x)).length + precision);
}

howBig();
