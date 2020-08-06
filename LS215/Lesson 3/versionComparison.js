// Problem
// Input
// - two strings
// -- Examples:
// --- 4.3.2
// --- 5.2.1
// Output
// - 1 if first version is bigger
// - -1 if it is smaller
// - 0 if they're equal
// Rules
// - Major numbers take precedence. eg:
// -- 2.2.3 < 2.12.1
// Examples
// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
// Data structure
// two arrays containing the versions split by .
// Algorithm
// select the longer array
// - for each piece of the array compare it to the other's corresponding element
// - compare each piece
// -- continue if both pieces are equal

function compareVersions(version1, version2) {
  let first = version1.split('.');
  let second = version2.split('.');
  let len = Math.max(first.length, second.length);
  for(let i=0; i<len; i++) {
    if(Number(first[i]) > Number(second[i])) {
      return 1;
    } else if (Number(first[i]) < Number(second[i])) {
      return -1;
    }
  }
  return 0;
}

let t = ['1.1', '1.2.0.0', '0.1', '13.37', '1.2', '1.18.2', '1.0', '1'].sort(compareVersions);

console.log(t);
