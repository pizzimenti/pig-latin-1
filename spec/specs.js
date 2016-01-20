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


});
