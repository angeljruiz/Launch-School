const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE = LOWERCASE.toUpperCase();
const ALPHABET = LOWERCASE + UPPERCASE;
const ASCII_UPPER_BOUND = 122; //z
const ASCII_LOWER_BOUND = 90; //Z
const OFFSET = LOWERCASE.length;

function rotate(str, rotation) {
  let results = '';
  for (i in str) {
    let current = str[i];

    if (!ALPHABET.includes(current) || current == ' ') {
      results += current;
      continue;
    }
    let rotated = String.fromCharCode(current.charCodeAt(0) + rotation);
    let ascii = rotated.charCodeAt(0);

    if (LOWERCASE.includes(current) && ascii > ASCII_UPPER_BOUND) {
      rotated = String.fromCharCode(ascii - OFFSET);
    } else if (UPPERCASE.includes(current) && ascii > ASCII_LOWER_BOUND) {
      rotated = String.fromCharCode(ascii - OFFSET);
    }
    results += rotated;
  }
  return results;
}

console.log(rotate('Teachers open the door, but you must enter by yourself.', 13));
console.log(rotate(rotate('Teachers open the door, but you must enter by yourself.', 13), 13));
