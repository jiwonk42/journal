var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $(".user-input").submit(function(event) {
    event.preventDefault();
    var inputtedEntry = $("input#word").val();
    var userEntry = new Entry(inputtedEntry);
    console.log(inputtedEntry);
    $(".word-num").text(userEntry.numOfWords());
    $(".vowels").text(userEntry.countLetters()[0]);
    $(".consonants").text(userEntry.countLetters()[1]);
    $(".teaser").text(userEntry.getTeaser());
  });
});
