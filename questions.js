/**
 * Question 1a:
 * Complete the function below to reverse a String.
 *
 * Check the comment to see how the output should look!
 */
function reverseString(str) {
    return str.split('').reverse().join('')
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
    return sentence.split(' ').reverse().join(' ')
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
    return sentence.split(' ').map((word) => {
        return reverseString(word)
    }).join(' ')
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
    var s = {}
    array.forEach((a) => {
        s[a] = ""
    })
    return Object.keys(s)
}

// uniqueArray(array)
// [ 2, 4, 1, 6, 5, 3, 8, 0, 7 ]


/**
* Question 3:
* Check if the word is a palindrome. A palindrome is a word that is spelt the same
* backwards and forwards.
*/

// function palindrome(str) {
//         if (s[0] == s[s.length-1]) {
//             return str
//         } else {
//             return false;
//         }
//     return true;
//     // return (str[0] == str[str.length-1])? palindrome(str.slice(1, str.length - 1)) : false;
// }
function isPalindrome(str) {
    var s = str.toLowerCase().split('').map((letter) => {
        return (letter.charCodeAt() < 97 || letter.charCodeAt() > 122)? '': letter
    }).join('')

    // return palindrome(s)
    console.log(s.length)
    for(var i = 0; i < Math.floor(s.length/2); i++) {
        if (s[i] == s[s.length-i-1]) {
            continue;
        } else {
            return false;
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
    var s = sentence.split(' ')
    var j = []
    s.forEach(s => j.push(0))
    
}

longestWord('this is declan, and that\'s declan\'s pencil')
// declans
