var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
//my implementation
console.log(text.replace(/^'|'$|([^\w])'|'([^\w])/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."

/* Explination

| -> is the pipe character that acts like an 'OR'

  ^'      -> looks for the single quote at the beginning of a string
  '$      -> looks for the single quote at the end of a string
  ([^w])' -> looks for a single quote with a non-word(a-z) before it
  '([^w]) -> looks for a single quote with a non-word(a-z) after it

the parentheses map to a variable within the second string parameter.
the first set of parentheses will map to the variable $1, the second will map to $2 and so on for all the parentheses.
parentheses that close over other parentheses are counted before the inner ones

ex: \b(\w(\w))\b([^123])
  -> $1 === (\w(\w))
  -> $2 === (\w)
  -> $3 === ([^123])
*/

//authors simplified implementation
console.log(text.replace(/(^|\W)'|'(^\W|$)/g, '$1"$2'));

/* Explination

  (^|\W)' -> look for the beginning of a string(^) OR a non-alphanumeric(\W) character followed by a single quote
  '(\W|$) -> look for a single quote followed by a non-alphanumeric(\W) character OR the end of the string ($)
*/


