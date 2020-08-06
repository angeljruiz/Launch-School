// # Problem #
//
// Input:
// - String representing a word
// -- Case insensitive
//
// Output:
// - True or false
//
// Rules:
// - B:O   X:K   D:Q   C:P   N:A   G:T   R:E   F:S   J:W   H:U   V:I   L:Y   Z:M
// -- Word must be able to be spelt with these blocks
// -- Word must only use one letter per block
// -- Word can only use a block once
//
// # Examples #
//
// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true
//
// # Data Structure #
//
// Input:
// - Array of characters
// Blocks:
// - Array containing subarray for each block
// - Seperate array to keep track of used blocks indexes
//
// # Algorithm #
//
// - Transform input into an array containing each character of input string uppercased
// - Check each character against blocks array
// -- If character is in blocks array add index of that block to the index array
// -- Otherwise return false
// - If index array is unique return true or false otherwise

function isBlockWord(word) {
  let chars = word.split('').map( char =>  {
    return toIndex(char.toUpperCase());
  });
  return chars.every(unique);
}

function unique(item, index, arr) {
  if(item == -1) return false;

  return arr.findIndex( i => item == i) == index;
}

function toIndex(char) {
  let blocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'],['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']];
  return blocks.findIndex( block => block.includes(char));
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
