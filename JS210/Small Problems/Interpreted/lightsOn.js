// # Problem #
//
// - Input:
// --- Integer representing number of lights
//
// - Output:
// --- Array representing switches in the on position
//
// - Rules:
// --- All lights are off
// --- From 1 to n iterate through the lights toggling them on or off
// ----- First iteration would turn on all lights
// ----- Second iteration would turn on all 2n lights
// ----- So on and so forth
//
// # Examples #
//
// - lightsOn(5);        // [1, 4]
// - lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
//
// # Data Structure #
//
// - Array[n] of booleans to represent lights
// - Counter variable
//
// # Algorithm #
//
// - Initialize array with length n filled with false bools => [false, false, ..., false]
// - Init counter to 1
// - n times iterate
// --- From counter to n iterate, incrementing by counter using i
// ----- Toggle all 1i lights => [true, true, ..., true]
// ----- Toggle all 2i lights => [true, false, true, false, ...]
// ----- ...
// --- increment counter
// - Map true values to index+1 => [1, false, 2, false]
// - Filter out false values => [1, 2]
// --- Return array



function lightsOn(switches) {
  let lights = [];
  let counter = 1;
  for(let i=0; i<switches; i++) lights.push(false);
  for(let j=0; j<switches; j++) {
    for(let i=counter; i<=switches; i+=counter) {
      lights[i] = !lights[i];
    }
    counter += 1;
  }
  return lights.map( (light, index) => light ? index : false).filter( light => light).join(', ');
}

console.log(lightsOn(5));
console.log(lightsOn(100));
