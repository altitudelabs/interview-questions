/**
 * Question 1a:
 * Complete the function below to reverse a String.
 *
 * Check the comment to see how the output should look!
 */
function reverseString(str) {
  let result = str.split('').reverse().join('');
  return result;
}

console.log(reverseString('hello i am declan'));
// nalced ma i olleh

/**
 * Question 1b:
 * Complete the function below to reverse the words in a String.
 *
 * Check the comment to see how the output should look!
 */
function reverseWords(sentence) {
  let result = sentence.split(' ').reverse().join(' ');
  return result;
}

console.log(reverseWords('hello i am declan'));
// declan am i hello

/**
 * Question 1c:
 * Complete the function below to reverse the words in a String __in place__. This
 * means that `hello` will still be the first word of the sentence, but it will be
 * reversed! If it helps, you can re-use `reverseString`, but this doesn't mean doing
 * so is the best answer :)
 *
 * Check the comment to see how the output should look!
 */
function reverseWordsInPlace(sentence) {
  let result = sentence.split(' ').map(v => reverseString(v)).join(' ');
  return result;
}

console.log(reverseWordsInPlace('hello i am declan'));
// olleh i ma nalced


/**
 * Question 2:
 * Find the unique values in an Array.
 *
 * Check the comment below to see how the output should look!
 */
const array = [2, 2, 4, 1, 6, 5, 3, 2, 8, 8, 0, 1, 7]

function uniqueArray(array) {
  let s = new Set();
  array.forEach(v => {s.add(v)});
  return Array.from(s);
}

console.log(uniqueArray(array))

// [ 2, 4, 1, 6, 5, 3, 8, 0, 7 ]


/**
* Question 3:
* Check if the word is a palindrome. A palindrome is a word that is spelt the same
* backwards and forwards.
*/
function isPalindrome(str) {
  return reverseString(str) == str;
}

function isPalindrome3b(str) {
  return reverseString(str).toLowerCase() == str.toLowerCase();
}

function removeNonAlpha(str) {
  return str.split('').filter(v => /\w/.test(v)).join('');
}

function isPalindrome3c(str) {
  return isPalindrome3b(removeNonAlpha(str));
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome3b('Racecar'));
console.log(isPalindrome3c('Raceca\'r!!'));

// 3a: Make the following return `true`
// isPalindrome('racecar')
// 3b: Make the following return `true`
// isPalindrome('Racecar')
// 3c: Make the following return `true`
// isPalindrome('Racecar!!!!!')

/**
 * Question 4:
 * Try using your code from `3c` to find the longest word in a sentence.
 *
 * Check the comment to see how the output should look!
 */
function longestWord(sentence) {
  return sentence.split(' ').map(v => removeNonAlpha(v)).map(v => ({
    value: v, length: v.length
  })).reduce((a, b) => a.length > b.length ? a : b).value;
}

console.log(longestWord('this is declan, and that\'s declan\'s pencil'));
// declans
