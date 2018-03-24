/**
 * Question 1a:
 * Complete the function below to reverse a String.
 *
 * Check the comment to see how the output should look!
 */
function reverseString(str) {
   // console.log(str);
    var tmp = "";
    var array = [];
    for(var i=0; i<str.length; i++){
        array.push(str.charAt(i));
    }

    for(var i=0; i<str.length; i++){
        tmp += array.pop();
    }
    
    return tmp;
}

reverseString('hello i am declan')
//console.log(reversed);
// nalced ma i olleh

/**
 * Question 1b:
 * Complete the function below to reverse the words in a String.
 *
 * Check the comment to see how the output should look!
 */
function reverseWords(sentence) {
    var tmp = "";
    var array = [];
    array = sentence.split(" ");
    array.reverse();
    for(var i=0; i<array.length; i++){
        tmp += array[i] + " ";
    }

    return tmp;
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
    var array = [];
    var tmp = "";
    array = sentence.split(" ");
    //console.log(array);
    //console.log(array.length)
    //array.reverse();
    for(var i=0; i<array.length; i++){
        
        //var splitStr = reverseString;
        //console.log(splitStr);
        tmp += reverseString(array[i]) + " ";
    }
   return (tmp);
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
    var tempArr = [];
    var resultArr = [];
    for(var i =0; i<array.length; i++){
        tempArr[array[i]] = 0;
    }
    for(var i =0; i<array.length; i++){
        tempArr[array[i]]++;
       if(tempArr[array[i]] == 1){
            resultArr.push(array[i]);
       };
    }

    return resultArr;
}

 uniqueArray(array)
// [ 2, 4, 1, 6, 5, 3, 8, 0, 7 ]


/**
* Question 3:
* Check if the word is a palindrome. A palindrome is a word that is spelt the same
* backwards and forwards.
*/
function isPalindrome(str) {
    //console.log(str.length);
    for(var i=0; i<str.length/2; i++){
        //console.log(i);
        //console.log(str.charAt(i));
        //console.log(str.charAt(str.length-1-i));
        if(str.charAt(i) != str.charAt(str.length-1-i)){
            return false;
        }
        return true;
    }
}

// 3a: Make the following return `true`
//console.log(isPalindrome('racecar'));
isPalindrome('racecar')
// 3b: Make the following return `true`
//console.log(isPalindrome('Racecar'));
isPalindrome('Racecar')
// 3c: Make the following return `true`
// isPalindrome('Racecar!!!!!')

/**
 * Question 4:
 * Try using your code from `3c` to find the longest word in a sentence.
 *
 * Check the comment to see how the output should look!
 */
function longestWord(sentence) {
    var array = sentence.split(" ");
    var max = 0;
    for(var i=0; i<array.length; i++){
        
    }
}

longestWord('this is declan, and that\'s declan\'s pencil')
// declans
