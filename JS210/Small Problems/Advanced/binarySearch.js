// It is quite common to find yourself in a situation where you need to perform a search
//  on some data to find something you're looking for. Imagine that you need to search
//   through the yellow pages to find the phone number of a particular business. A
//    straightforward way to do this would be to go through the yellow pages one
//     business at a time, checking if the current business name is the one you're trying to find.
//
// This may be a simple and easy way to search, but it's not very efficient.
//  In the worst case scenario, it could mean having to search through every
//   single business name before finding out that the business isn't listed—or,
//    slightly better, having to go through every letter from 'A' to 'Z' before
//     finding the business. A linear search such as this can take quite a long time.
//
// A binary search algorithm is a much more efficient alternative. This algorithm
//  allows you to cut the search area in half on each iteration by discarding the
//   half that you know your search term doesn't exist in. The binary search
//    algorithm is able to do this by relying on the data being sorted. Going
//     back to the yellow pages example, let's say that we're searching the
//      following yellowPages data for the search item 'Pizzeria':
//
// With a linear search, we would have to sequentially go through each of the
//  items until we found the search item 'Pizzeria'. In a binary search,
//   however, the following sequence happens:
//
// var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us',
// 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
//
// Retrieve the middle value from the data (assume truncation to integer) --> 'Eat a Lot'.
// If the middle value is equal to 'Pizzeria', stop the search.
// If the middle value is less than 'Pizzeria':
// Discard the lower half, including the middle value
//  --> ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot'].
// Repeat the process from the top, using the upper half as the starting data
//  --> ['Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'].
// If the middle value is greater than 'Pizzeria', do the same as the previous step, but with opposite halves.
// Using the process described above, the search successfully ends on the second iteration when the middle value is 'Pizzeria'.
//
// Implement a binarySearch function that takes an array and a
//  searchItem as arguments, and returns the index of the searchItem
//   if found, or -1 otherwise. You may assume that the array argument
//    will always be sorted.
//
// Examples:
// console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
// console.log(binarySearch(yellowPages, 'Apple Store'));                // 0
//
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1
//
// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
//
// Rules:
// - Grab middle element. If input len is 10 middle would be 4. 11 => 5.
// - Compare that element with search item.
// -- If element is greater than item then discard upper half and repeat until item is found.
// -- otherwise repeat with lower half including the middle value
//
// Algorithm ([1, 2, 3, 4], 1)
// - [1, 2, 3, 4] - len 4 / 2 == 2 --- [1, ..., 5] - len 5 / 2 == 2.5 --- [1, 2, 3, 4, 5, 6] - len 6 / 2 == 3
// - set middle = input len / 2 - 1 if input len is even otherwise set to input len / 2
// - grab middle item and compare to search item
// -- return middle index if items are equal
// -- slice middle + 1 to len of input if middle item is less than search item
// -- slice middle + 1 otherwise
// -- set this slice as arr and continue until len


 function binarySearch(arr, search) {
   let halved = arr;
   while(halved.length > 0) {
     if(halved.length === 1 && halved[0] !== search) return -1
     let middle = halved.length % 2 === 0 ? halved.length / 2 - 1 : halved.length / 2;
     middle = parseInt(middle, 10);
     let middleItem = halved[middle];
     if(middleItem === search) return arr.findIndex( i => i === halved[middle]);
     if(middleItem > search) {
       halved = halved.slice(0, middle + 1), search;
     } else {
       halved = halved.slice(middle + 1, halved.length), search;
     }
   }
   return -1
 }

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
