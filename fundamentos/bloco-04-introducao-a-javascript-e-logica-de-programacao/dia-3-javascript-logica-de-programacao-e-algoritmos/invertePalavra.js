let word = 'paralelepipedo';
let wordInverted = [];
for (index = 0; index <= word.length-1; index += 1){
    wordInverted.push(word[word.length-1-index]);
}
console.log(word);
console.log(wordInverted.join(''));