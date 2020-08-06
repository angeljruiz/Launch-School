function octalToDecimal(numberString) {
  let len = numberString.length;
  let result = 0;
  for(let i=0; i<len; i++) {
    result += Number(numberString[i]) * Math.pow(8, len-i-1);
  }
  return result;
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
