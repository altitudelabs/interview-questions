/**
 * Question 1a:
 * Complete the function below to reverse a String.
 *
 * Check the comment to see how the output should look!
 */
function reverseString(str) {
  var str2 = '';
  for(i = str.length-1; i >= 0; i --){
    str2 = str2 + str[i];
  }

  for(i = 0; i < str2.length-1; i ++){
    console.log(str2[i]);
  }
  
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
  var l = sentence.length;
  var str = '';
  var stop = l;
  
  for(i = l; i >= 0; i --) {
    
    if (sentence[i] == ' ' ) {

      for (j = i + 1; j < stop; j ++) {
        str = str + sentence[j];
      }
      str = str + ' ';
      stop = i;
      
      
    }
    
    if (i == 0) {
      for (m = 0; m < stop; m ++){
        str = str + sentence[m];
      }
    }
  }
  
  for(i = 0; i < str.length; i ++){
    console.log(str[i]);
  }
  
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
  var l = sentence.length;
  var str = '';
  var stop = l;
  
  for(i = l; i >= 0; i --) {
    
    if (sentence[i] == ' ' ) {

      for (j = stop-1; j >= i; j --) {
        str = str + sentence[j];
      }
      // str = str + ' ';
      stop = i;
    }
    
    if (i == 0) {
      for (m = stop; m >= 0; m --){
        str = str + sentence[m];
      }
    }
  }
  
  for(i = 0; i < str.length; i ++){
    console.log(str[i]);
  }

}

// reverseWordsInPlace('hello i am declan')
// olleh i ma nalced
