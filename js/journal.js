var Entry = function(input){
  this.entry = input;
}

Entry.prototype.numOfWords = function() {
  return this.entry.split(" ").length;
}

Entry.prototype.countLetters = function() {
  var splitChar = this.entry.split("");
  var countVowels = 0;
  var countConsonants = 0;

  for (var i = 0; i < splitChar.length; i++) {
    if (splitChar[i].toLower() === 'a' && splitChar[i].toLower() === 'e' && splitChar[i].toLower() === 'i' && splitChar[i].toLower() === 'o' && splitChar[i].toLower() === 'u') {
      countVowels++;
    } else {
      countConsonants++;
    }
  }
  var letterArr = [countVowels, countConsonants];

  return letterArr;
}

Entry.prototype.getTeaser = function() {
  var splitChar = this.entry.split(" ");
  if (splitChar.length > 8) {
    var teaser = splitChar.slice(0, 8);
    return teaser.join(' ');
  } else {
    return splitChar.join(' ');
  }
}

exports.entryModule = Entry;
