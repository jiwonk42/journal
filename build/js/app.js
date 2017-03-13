(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
