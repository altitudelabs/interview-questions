function reverseString(str) {
  str = str.split('').reverse();
  str = str.join('');
  return str;
}

reverseString('hello');

function reverseWords(sentence) {
  sentence = sentence.split(' ').reverse();
  sentence = sentence.join(' ');
  //console.log(sentence);
  return sentence;
}

reverseWords('Hello this is declan');


function reverseWordsInPlace(sentence) {
  sentence = sentence.split(' ');
  for(let i=0; i<sentence.length; i++){
    sentence[i] = reverseString(sentence[i]);
  }
  sentence = sentence.join(' ');
  //console.log(sentence);
  return sentence;
}

reverseWordsInPlace('Hello this is a question');

function uniqueArray(array) {
  let uniqueValues = [];
  for(let i=0; i<array.length; i++) {
    if(uniqueValues.indexOf(array[i]) < 0) uniqueValues.push(array[i]);
  }
  return uniqueValues;
}

uniqueArray([1,1,3,3,4,4,5,5,6]);

function isPalindrome(str) {
  let reversedString = reverseString(str);
  if(str.length != reversedString.length) return false;
  for(let i=0; i<str.length; i++) {
    if(str[i] != reversedString[i]) {
      return false;
    }
  }
  return true;
}

isPalindrome('racecar');

function longestWord(sentence) {
  let max = '';
  sentence = sentence.split(' ');
  for(let i=0; i<sentence.length; i++) {
    max =  max.length > sentence[i].length? max : sentence[i]
  }
  return max;
}

longestWord('Hello I am a pen.');

