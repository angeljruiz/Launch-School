// # Problem #
//
// - Input: Two sorted arrays
// - Output: One array from combined inputs
//
// # Examples #
//
// merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
// merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5]);             // [1, 4, 5]
// merge([1, 4, 5], []);             // [1, 4, 5]
//
// # Data Structure #
//
// - Combined: []
// - Longer: length of longer input
// - First & Second: items from each input
// - Id1 & Id2: indexes for each current item in the input
//
// # Algorithm #
//
// - Init combined to []
// - Init id1 & id2 to 0
// - Calc longer
// - Loop until id1 or id2 = longer
// --- Grab first & second
// --- If first
// ----- If second
// ------- If first > second
// --------- Push first & increment id1
// ------- Else push second & increment id2
// ----- Else push first & increment id1
// --- Else if second
// ----- Push second & increment id2

function merge(arr1, arr2) {
  let combined = [];
  let end = Math.max(arr1.length, arr2.length);
  let id1 = 0;
  let id2 = 0;
  while(combined.length != arr1.length + arr2.length) {
    let first = arr1[id1];
    let second = arr2[id2];
    if(first) {
      if(second) {
        if(first > second) {
          combined.push(second);
          id2 += 1;
        } else {
          combined.push(first);
          id1 += 1;
        }
      } else {
        combined.push(first);
        id1 += 1;
      }
    } else if(second) {
      combined.push(second);
      id2 += 1;
    }
  }
  return combined;
}

// console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
// console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
// console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
// console.log(merge([1, 4, 5], []));             // [1, 4, 5]

module.exports = merge;
