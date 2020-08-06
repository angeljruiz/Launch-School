function fibonacci(n) {
  if(n <= 2) return 1;
  let first = 1;
  let second = 1;
  for(let i=3; i<=n; i++) {
    let t = first;
    first += second;
    second = t;
  }
  return first;
}

console.log(fibonacci(20));
