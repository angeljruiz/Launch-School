// # Problem #
//
// - Input: Integer representing width of star to draw
//
// - Output: A star with n width
//
// - Rules:
// --- Print 0 outer spaces followed by * followed by 2 inner spaces then * then 2 more inner spaces then *
// --- increment outer spaces & decrement inner spaces
//
// # Examples #
//
// star(7);
// // logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *
//
// star(9);
// // logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *
//
// # Data Structure #
//
// - Iteration
//
// # Algorithm #
//
// - Init outer spaces var to 0
// - Init inner spaces var to (n - 3) / 2
// - Init midway var to false
// - Iterate n times using i
// ---- Print outer spaces amount of spaces then * then inner spaces then * then inner spaces then *
// ---- If i == (n - 1) / 2
// ------ midway = true
// ------ Print * n times
// ---- if midway outerSpaces -= 1 innerSpaces += 1
// ---- increment outer spaces by 1 inner spaces -= 1

function star(n) {
  let outerSpaces = 0;
  let innerSpaces = (n - 3) / 2;
  let midway = false;

  for(let i=0; i<n - 1; i++) {
    console.log(' '.repeat(outerSpaces) + '*' + ' '.repeat(innerSpaces) + '*' + ' '.repeat(innerSpaces) + '*');
    if(i == (n - 1) / 2 - 1) {
      midway = true;
      console.log('*'.repeat(n));
      continue;
    }
    if(midway) {
      innerSpaces += 1;
      outerSpaces -= 1;
    } else {
      innerSpaces -= 1;
      outerSpaces += 1;
    }
  }
}

star(53);
