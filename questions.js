/**
 * Question 1a:
 * Complete the function below to reverse a String.
 *
 * Check the comment to see how the output should look!
 */

/**
function reverseString(str) {

}
**/

function reverseString(str) {
  
  str_size = sizeof(str);
  output_str[256];
  
  for(i=0;i<str_size;i++){
    output_str[i] = str[str_size - 1];
  }
  console.log(output_str);
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
  var total_length = sentence.length;
  var temp_array = [];
  var output_string = [];
  var temp;
  var no_of_word = 0;
  
  for(i=0;i<total_length;i++){
    sentence.pop = temp;
    if(temp == ' '){
      output_string[no_of_word] = temp_array[no_of_word];
      no_of_word++;
    }else{
      temp_array[i] = temp;
    }
  }
  console.log(output_string);
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
  var str = reverseWords(sentence);
  var reverseString(str);
  console.log(str);
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

}

// uniqueArray(array)
// [ 2, 4, 1, 6, 5, 3, 8, 0, 7 ]


/**
* Question 3:
* Check if the word is a palindrome. A palindrome is a word that is spelt the same
* backwards and forwards.
*/
function isPalindrome(str) {

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

}

longestWord('this is declan, and that\'s declan\'s pencil')
// declans
