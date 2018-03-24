/**
 * Question 1a:
 * Complete the function below to reverse a String.
 *
 * Check the comment to see how the output should look!
 */
function reverseString(str) {
  
  //for (i =0;i<str.length/2;i++){
  //  a=str[i];
  //  console.log(str[i]);
  //  str[i]=str[str.length-i-1];
  //  console.log(str[str.length-i-1]);
  //  console.log(str[i]);
  //  str[str.length-i-1]=a;
  //}
  
  //console.log(str);
  
  str2="";
  for ( i =0;i<str.length;i++){
    str2=str2+str[str.length-i-1];
  }
  //console.log(str2);
  
  //console.log(str);
  return str2;
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
  var spaceIndex=[]; 
  spaceIndex[0]=-1;
  for (i=0;i<sentence.length;i++){
    if(sentence[i]==" ")
          spaceIndex[spaceIndex.length]=i;
  }
  spaceIndex[spaceIndex.length]=sentence.length;

  resultStr="";
  for (i=spaceIndex.length-2;i>=0;i--){
    currentWord="";
    for(j=spaceIndex[i]+1;j<spaceIndex[i+1];j++){
      currentWord=currentWord+[sentence[j]];
    }
    resultStr=resultStr+currentWord;
    if(i!=0)
      resultStr=resultStr+' ';
  }
  return resultStr;
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
  var spaceIndex=[]; 
  spaceIndex[0]=-1;
  for (i=0;i<sentence.length;i++){
    if(sentence[i]==" ")
          spaceIndex[spaceIndex.length]=i;
  }
  spaceIndex[spaceIndex.length]=sentence.length;

  resultStr="";
  for (i=0;i<spaceIndex.length-1;i++){
    currentWord="";
    for(j=spaceIndex[i+1];j>spaceIndex[i];j--){
      currentWord=currentWord+[sentence[j]];
    }
    resultStr=resultStr+currentWord;
    if(i!=0)
      resultStr=resultStr+' ';
  }
  return resultStr;
}

 //reverseWordsInPlace('hello i am declan')
// olleh i ma nalced


/**
 * Question 2:
 * Find the unique values in an Array.
 *
 * Check the comment below to see how the output should look!
 */
const array = [2, 2, 4, 1, 6, 5, 3, 2, 8, 8, 0, 1, 7]

function uniqueArray(array) {
  // sort
  array.sort()
  console.log(array);
  for(i=array.length-1;i>0;i--){
    if(array[i]==array[i-1]){
      delete array[i];
      //i--;
    }
  }
  
  return array;
}

 uniqueArray(array)
// [ 2, 4, 1, 6, 5, 3, 8, 0, 7 ]


/**
* Question 3:
* Check if the word is a palindrome. A palindrome is a word that is spelt the same
* backwards and forwards.
*/
function isPalindrome(str) {
  for(i=0;i<str.length/2;i++){
    if(str[i]!=str[str.length-i-1])
      return false;
  }
  return true;
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
