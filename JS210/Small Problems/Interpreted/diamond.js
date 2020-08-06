// # Problem #
//
// - Input: Integer representing width of triangle to draw
//
// - Output: A diamond with n width
//
// - Rules:
// --- Print (n - 1) / 2 spaces followed by * then (n - 1) / 2 more spaces
// --- Print one less space then 3 total * then one less space
//
// # Examples #
//
// diamond(1);
// *
//
// diamond(3);
//  *
// ***
//  *
//
//  diamond(9);
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
//
// # Data Structure #
//
// - Iteration
//
// # Algorithm #
//
// - Init spaces var to (n - 1) / 2
// - Init stars var to 1
// - Init increasing var to true
// - Iterate n times using i
// --- Print spaces amount of spaces followed by stars amount of stars
// --- If increasing
// ----- If i == (n - 1) / 2
// ------- Set increasing to false
// ------- Increment spaces by 1 and decrement stars by 2
// ----- Decrement spaces by 1 and increment stars by 2
// --- Else !increasing
// ----- Increment spaces by 1 and decrement stars by 2

function diamond(n) {
  let spaces = (n - 1) / 2;
  let stars = 1;
  let increasing = true;

  for(let i=0; i<n; i++) {
    console.log(' '.repeat(spaces) + '*'.repeat(stars));
    if(increasing) {
      if(i == (n - 1) / 2) {
        increasing = false;
      } else {
        spaces -= 1;
        stars += 2;
      }
    }
    if(!increasing) {
      spaces += 1;
      stars -= 2;
    }
  }
}

diamond(53);
