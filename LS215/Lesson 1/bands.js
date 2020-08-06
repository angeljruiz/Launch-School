let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map( item => {
    item.name = item.name.split(' ').map(processNamePart).join(' ');
    item.country = 'Canada';
    delete item.active;
    return item;
  });
}

function processNamePart(word) {
  let result = word[0].toUpperCase();
  result += word.slice(1, word.length);
  return result.replace('.', '');
}

console.log(processBands(bands));



// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
