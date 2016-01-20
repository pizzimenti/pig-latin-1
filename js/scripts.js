var pigLatin = function(englishWord) {
  var splitAt = indexOfFirstVowel(englishWord);
  return englishWord.slice(splitAt) + englishWord.slice(0, splitAt) + "ay";
};

var indexOfFirstVowel = function(word) {
 var vowels = ['a', 'e', 'i', 'o', 'u'];
 var letters = word.split("");

 for (var i = 0; i < letters.length; i++) {
  for (var j = 0; j < vowels.length; j++) {
    if (letters[i] === vowels[j]) {
       return i;
      }
    }
  }
};

var quWords = function(englishWord) {
  var squ = 'squ';
  var qu = 'qu';
  if (englishWord[0] + englishWord[1] + englishWord[2] === squ) {
    return englishWord.slice(3) + englishWord[0] + englishWord[1] + englishWord[2] + "ay";
  } else {
    return englishWord.slice(2) + englishWord[0] + englishWord[1] + "ay"
  }
};

$(function(){
 $('form#latin').submit(function(event){
   var englishWord = $("input#word").val();
   var translatedMessage = pigLatin(englishWord);

   $(".translation").text(translatedMessage);

   $('#result').show();

   event.preventDefault();
  });

});
