function anagram(word, list) {
  return list.filter(candidate => areAnagrams(candidate, word));
}

function areAnagrams(source, target) {
  let sourceLetters = source.split('');
  let targetLetters = target.split('');
  return compareArrays(sourceLetters, targetLetters);
}

function compareArrays(array1, array2) {
  let len = array2.length;
  for(let i=0; i<len; i++) {
    if(!array2.includes(array1[i])) return false;
  }
  return len == array1.length ? true : false;
}


console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));
