// Word to Digit
// Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.
//
// Example:
//
//
//
// break string into words and interate through
// if lowercase word matches WTD array then return it's index
// use regex on word to only match appropriate part & replace that that.
// Join string back to sentence


function wordToDigit(sentence) {
  const WTD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  return sentence.split(' ').map( word => {
    if(WTD.includes(word.match(/(\w*)/)[0])) word = word.replace(/(\w*)/, WTD.findIndex(item => item === word.match(/(\w*)/)[0]));
    return word;
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
