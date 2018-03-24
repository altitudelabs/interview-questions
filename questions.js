/**
 * Question 1a:
 * Complete the function below to reverse a String.
 *
 * Check the comment to see how the output should look!
 */
 
function reverseString(str) {
  var output = '';
  for (var i = str.length-1; i>=0;i--) {
    output += str[i];
  }
  return output;

}
// reverseString('hello i am declan')
// nalced ma i olleh

/**
 * Question 1b:
 * Complete the function below to reverse the words in a String.
 *
 * Check the comment to see how the output should look!
 */
function reverseWords(sentence) {
  var output = '';
  let array = sentence.split(' ');
  for (var i = array.length-1; i>=0;i--) {
    output += array[i] + ' ';
  }
  return output;
}

// reverseWords('hello i am declan')
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
  var output = '';
  let array = sentence.split(' ');
  for (var i = 0; i<array.length;i++) {
    output += reverseString(array[i]) + ' ';
  }
  return output;
}

// reverseWordsInPlace('hello i am declan')
// olleh i ma nalced


/**
 * Question 2:
 * Find the unique values in an Array.
 *
 * Check the comment below to see how the output should look!
 */
const array = [2, 2, 4, 1, 6, 5, 3, 2, 8, 8, 0, 1, 7]

function uniqueArray(array) {
  let output = [];
  for (var i = 0; i<array.length;i++) {
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
}

// uniqueArray(array)
// [ 2, 4, 1, 6, 5, 3, 8, 0, 7 ]


/**
* Question 3:
* Check if the word is a palindrome. A palindrome is a word that is spelt the same
* backwards and forwards.
*/
function isPalindrome(str) {
  let output = str.split(/[^a-zA-Z]/);
  let modifiedWord = output[0].toLowerCase();
  let reversedString = reverseString(modifiedWord);
  if ( modifiedWord == reversedString ) {
    return true;
  } else {
    return false;
  }
}

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
  let splitedWords = sentence.split(' ');
  let secondSplitedWords = [];
  splitedWords.map((subString) => {
    let temp = subString.split(/[^a-zA-Z]/);
    secondSplitedWords.push(temp.length > 1? temp[0]+temp[1] : temp[0]);
  })
  
  let output = '';
  let strLength = 0;
  for (var i = 0; i<secondSplitedWords.length;i++) {
    if (secondSplitedWords[i].length > strLength) {
      strLength = secondSplitedWords[i].length;
      output = secondSplitedWords[i];
    }
  }
  return output;
}

longestWord('this is declan, and that\'s declan\'s pencil')
// declans
