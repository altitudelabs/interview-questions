/**
 * Question 1a:
 * Complete the function below to reverse a String.
 *
 * Check the comment to see how the output should look!
 */
function reverseString(str) {
  var temp; //init temp and pass str into it
  var tmp2 ='';
  temp = str.split('');
  var j =0;
  for (var i=str.length-1; i>=0; i--){ //try to revise the string
    temp[j]=str[i];
    j++;
    tmp2+=str[i];
  }

  return tmp2;
}

//reverseString('hello i am declan')
// nalced ma i olleh

/**
 * Question 1b:
 * Complete the function below to reverse the words in a String.
 *
 * Check the comment to see how the output should look!
 */
function reverseWords(sentence) {
  var newsent = sentence.split(' ');
  var temp ='';
  for (var i = newsent.length-1; i>=0; i--){
    temp += (newsent[i]);
    if (i > 0)
      temp += ' ';
  }
  return temp;
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
  var newsent = sentence.split(' ');
  var temp ='';
  for (var i = 0; i<newsent.length; i++){
    temp += reverseString(newsent[i]);
    if (i < newsent.length)
      temp += ' ';
  }
  return temp;
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
  var temp = [];
  var unique = [];
  var flag;
  for (var i =0; i<array.length; i++){
    flag = 0;
    for (var j = 0; j<unique.length; j++){
      if (unique[j] == array[i]){
        flag = 1;

      }
      if (flag==0){
        temp.push(array[i])
      }
    }
  }
  return temp;
}

 uniqueArray(array)
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

//longestWord('this is declan, and that\'s declan\'s pencil')
// declans
