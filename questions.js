/**
 * Question 1a:
 * Complete the function below to reverse a String.
 *
 * Check the comment to see how the output should look!
 */
function reverseString(str) {
  var reverse="";
  for (var i=str.length;i<=0;i--)
    reverse+=str[i];
  console.log(reverse);
  

}

 reverseString('hello i am declan')
// nalced ma i olleh

/**
 * Question 1b:
 * Complete the function below to reverse the words in a String.
 *
 * Check the comment to see how the output should look!
 */
function reverseWords(sentence) {
  var reverse="";
  var reverseString=sentence.split();
  for (var i=reverseString.length;i<=0;i--)
    reverse+=reverseString[i]+" ";
  console.log(reverse);
    

}

reverseWords('hello i am declan')
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
  var reverse="";
  var temp="";
  var reverseString=sentence.split(' ');
  for (var i=0;i<reverseString.length;i++)
    for (var k=(reverseString[i]).length;k<=0;k--){
      temp+=reverseString[i][k]+" ";
      console.log(temp);
    }
  reverse+=temp;
  
  for (i=0;i<reverse.length;i++)
    console.log(reverse[i]);

}

 reverseWordsInPlace('hello i am declan')
// olleh i ma nalced


/**
 * Question 2:
 * Find the unique values in an Array.
 *
 * Check the comment below to see how the output should look!
 */
const array = [2, 2, 4, 1, 6, 5, 3, 2, 8, 8, 0, 1, 7]

function uniqueArray(array) {
  var temp=[];
  for (var i=0; i<array.length;i++){
    for (var j=0;j<temp.length;j++){
      if (array[i]==temp[j])
        break;
    }
    temp.push(array[i]);
  }
  
  for (var k=0;k<temp.length;k++)
    console.log(temp);
    
  
}

 uniqueArray(array)
// [ 2, 4, 1, 6, 5, 3, 8, 0, 7 ]


/**
* Question 3:
* Check if the word is a palindrome. A palindrome is a word that is spelt the same
* backwards and forwards.
*/
function isPalindrome(str) {
  var temp=str.toUpperCase();
  for (var i=0;i<(temp.length/2);i++){
    if(temp[i]!=temp[temp.length-i]){
      console.log('false');
      return false
    }
  }
  return true;

}

// 3a: Make the following return `true`
 isPalindrome('racecar')
// 3b: Make the following return `true`
isPalindrome('Racecar')
// 3c: Make the following return `true`
isPalindrome('Racecar!!!!!')

/**
 * Question 4:
 * Try using your code from `3c` to find the longest word in a sentence.
 *
 * Check the comment to see how the output should look!
 */
function longestWord(sentence) {
  var temp=sentence.split(" ");
  position=0;
  for (var i=1;i<temp.length;i++)
    if (temp[i].length>temp[position].length)
      position=i;
  console.log(temp[position]);
  return temp[position];

}

longestWord('this is declan, and that\'s declan\'s pencil')
// declans
