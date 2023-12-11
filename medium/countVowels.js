/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    
  let lowerstr = str.toLowerCase();
  let lowerstrarray =  lowerstr.split('');
  let vowels = ['a','e', 'i', 'o', 'u'];
   let sum = 0;
   for (let i = 0; i < lowerstrarray.length; i++) {

      for (let j = 0; j < vowels.length; j++) {
          
          if (lowerstrarray[i] == vowels[j]) {

              sum+= 1
              
          }
          
    }
      
      // if (lowerstrarray[i]=== 'a' || lowerstrarray[i]=== 'e' || lowerstrarray[i]=== 'i' || lowerstrarray[i]=== 'o' || lowerstrarray[i]=== 'u') {

      //     sum+=1;
          
      // }
  }

  return sum


}

module.exports = countVowels;