// // These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------
//
// madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.
//
// madlibs(template1);
// // The "hungry" brown "cat" "lazily"
// // "licks" the "noisy" yellow
// // "dog", who "lazily" "licks" his
// // "leg" and looks around.
//
// madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".
//
// madlibs(template2);      // The "cat" "pats" the "cat"'s "head".
//
// Structure:
// "The {adj} brown {noun} {adv}
// {verb} the {adj} yellow
// {noun}, who {adv} {verb} his
// {noun} and looks around."
//
// Array containing each word set
//
// Map each word in input examine
// -- if word matches {(\w*)} then grab match
// --- replace word with translation of match




function madlibs(template) {
  return (template.split(' ').map( word => translateWord(word) ).join(' '));
}

function translateWord(word) {
  const ADJ = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
  const NOUN = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
  const VERB = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
  const ADV = ['easily', 'lazily', 'noisily', 'excitedly'];
  const REG = /{(\w*)}/;

  if(REG.test(word)) {
    switch (REG.exec(word)[1]) {
      case 'adj':
        word = word.replace(REG, ADJ[Math.floor(Math.random() * ADJ.length)]);
        break;
      case 'noun':
        word = word.replace(REG, NOUN[Math.floor(Math.random() * NOUN.length)]);
        break;
      case 'verb':
        word = word.replace(REG, VERB[Math.floor(Math.random() * VERB.length)]);
        break;
      case 'adv':
        word = word.replace(REG, ADV[Math.floor(Math.random() * ADV.length)]);
        break;
    }
  }

  return word;
}

console.log(madlibs("The {adj} brown {noun} {adv} {verb} the {adj} yellow {noun}, who {adv} {verb} his {noun} and looks around."))
