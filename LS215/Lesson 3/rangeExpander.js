// # Problem #
//
// Input:
// - String representing a date or range of dates
// Output:
// - String of expanded dates
// Rules:
// - Only significant digits are included in the input
// - Output must include expanded digits
// - Input can be a range of dates
//
// # Examples #
//
// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 46, 64:11" --> 545, 546, 564, 565, .. 611
//
// # Data Structure #
//
// Input:
// - String is split on seperator ', '
// Var to keep track of what to prepend
//
// # Algorithm #
//
// - Input is split on ', ' => "545, 46, 64:11" => ['545', '46', '64:11']
// -- If item is date then expand => ['545', '46', '64:11'] => ['545', '546', ...]
// --- Check previous value => '545'
// ---- If previous is greater than current prepend 1 to it => '146'
// ----- Continue adding 1 until current is greater than previous => '546'
// -- If item is range then expand => ['545', '546', '64:11'] => ['545', '546', '564', ..., '611']
// --- Get dates in range => ['64', '11']
// --- Expand these dates => ['64', '11'] => ['564', '611']
// ---- Check previous value => '546'
// ---- If previous is greater than current prepend 1 to it => '164'
// ----- Continue adding 1 until current is greater than previous => '564'
// --- Loop using first and last day
// ---- return array of dates
// -- Flatten dates => [545, 546, [564, ..., 611]] => [545, 546, 564, ..., 611]

function expandDates(dates) {
  dates = dates.split(', ');
  dates = dates.reduce( (dates, date, index) => {
    dates.push(expand(date, dates[index - 1]));
    return dates.flat();
  }, []);
  return dates.join(', ');
}

function expand(dates, previous) {
  let pattern = /([0-9]+)[-|:|\.\.]([0-9]+)[-|:|\.\.]*([0-9]*)/;
  let rangeDates = [];
  if(pattern.test(dates)) {
    dates.match(pattern).forEach( date => {
      if(date && date != dates) {
        rangeDates.push(date);
      }
    });
    return rangeDates.reduce( (range, date, index, ranges) => {
      let next;
      date = prepend(date, previous);
      next = prepend(ranges[index+1], date);
      for(let i=date; i<=next; i++) {
        if(i != range[range.length - 1])
          range.push(i);
      }
      return range;
    }, []);
  } else {
    return prepend(dates, previous);
  }
}

function prepend(date, previous) {
  if(!previous) return date;
  let prepend = 0;
  while(Number(String(prepend) + date) <= Number(previous)) prepend += 1;
  return Number(prepend + date);
}

console.log(expandDates("1, 3, 7, 2, 4, 1")) // 1, 3, 7, 12, 14, 21
console.log(expandDates("1-3, 1-2")) // 1, 2, 3, 11, 12
console.log(expandDates("1:5:2")) // 1, 2, 3, 4, 5, 6, ... 12
console.log(expandDates("104-2")) // 104, 105, ... 112
console.log(expandDates("104-02")) // 104, 105, ... 202
console.log(expandDates("545, 64:11")) // 545, 564, 565, .. 611
