var pigLatin = function(englishWord) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
   for (var i = 0; i < vowels.length; i++) {
     if (englishWord[0] === vowels[i]) {
     var startsWithVowel = true;
     break;
    }
  }
  if (startsWithVowel) {
  var translatedWord = englishWord;
} else if (englishWord[1] === vowels[0]) {
  var translatedWord = englishWord.slice(1) + englishWord[0];
} else {
  var translatedWord = englishWord.slice(2) + englishWord[0] + englishWord[1];
}
 return translatedWord + 'ay';
};
