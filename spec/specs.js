describe("pigLatin", function() {
  it("adds 'ay' to the end of a word that starts with the letter a", function() {
   expect(pigLatin("apple")).to.equal("appleay");
  });

  it("adds 'ay' to the end of a word that starts with any vowel", function() {
    expect(pigLatin("english")).to.equal("englishay");
  });

  it("takes a single consonant at the beginning of a word and moves it to the end", function() { expect(pigLatin("cat")).to.equal("atcay");
  });

  it("takes two consonants at the beginning of a word and moves them to the end", function() {
    expect(pigLatin("cricket")).to.equal("icketcray");
  });

  it("takes three consonants at the beginning of a word and moves them to the end", function() {
    expect(pigLatin("school")).to.equal("oolschay");
  });
});

describe("indexOfFirstVowel", function() {
  it("returns 0 for a word thats starts with a vowel", function() {
   expect(indexOfFirstVowel("apple")).to.equal(0);
  });

  it("returns 1 for a word thats starts with a single consonant", function() {
   expect(indexOfFirstVowel("cat")).to.equal(1);
  });
});

describe("quWords", function() {
  it("will move the u along with the q to the end of the word if the first consonants include qu", function() {
    expect(quWords("quit")).to.equal("itquay");
  });

  it("will move the s,q and u to the end of the word if the first thre lettes are squ", function() {
    expect(quWords("squish")).to.equal("ishsquay")
  });
});
