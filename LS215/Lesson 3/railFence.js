// # Problem #
//
// Input:
// - String of clear text or ciphertext
// - Boolean for decoding or encoding
//
// Output:
// - String of ciphertext or clear text
//
// # Examples #
//
// "WE ARE DISCOVERED FLEE AT ONCE" => 'WECRLTEERDSOEEFEAOCAIVDEN'
//
// # Data Structure #
//
// - Array containing chars
//
// # Algorithm #
//
// - Remove spaces from input => "WE ARE DISCOVERED FLEE AT ONCE" => "WEAREDISCOVEREDFLEEATONCE"
// - Transform letters => "WEAREDISCOVEREDFLEEATONCE" => 'WECRLTEERDSOEEFEAOCAIVDEN'
//   - Using index 1 to 25 incrementing by 4 grab letter
//   - Using index 2 to 24 incrementing by 2 grab letter
//   - Using index 3 to 23 incrementing by 4 grab letter
