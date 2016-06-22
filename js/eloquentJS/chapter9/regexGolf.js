// Fill in the regular expressions

//cat or car
verify(/ca[rt]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

//prop or pop
verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

// farret, ferry, or ferrari
verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

// any word ending in 'ious'
verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

// a whtespace character followed by a dot, comma, colon, or semi-colon
verify(/\s[.,:']/,
       ["bad punctuation ."],
       ["escape the dot"]);

// a word longer than 6 letters
verify(/\w{7,}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

//a word without the letter 'e'
verify(/\b[a-df-z]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}