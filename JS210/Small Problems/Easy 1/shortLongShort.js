// Short Long Short
// Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of
//  concatenating the shorter string, the longer string, and the shorter string once again.
// You may assume that the strings are of different lengths.
//
// Examples:
//
// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"
//
// - Init shorter and longer
// - Store first input into shorter
// - If second input longer than first then store shorter in longer and then input into shorter
// - Output shorter longer shorter



function shortLongShort(x, y) {
  let shorter, longer;
  shorter = x;
  longer = y;

  if(shorter.length > longer.length) {
    let t = longer;
    longer = shorter;
    shorter = t;
  }

  console.log(shorter + longer + shorter);
}

shortLongShort('', 'xyz');
