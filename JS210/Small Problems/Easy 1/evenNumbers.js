// - Input: None
// - Output: All even numbers from 1 to 99 inclusive on seperate lines
//
// - For loop from 1 to 99
// -- Output i if i % 2 == 0


function oddNumbers() {
  for(let i=1; i<=99; i++) {
    if(i % 2 == 0)
      console.log(i);
  }
}

oddNumbers();
