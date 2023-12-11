/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  const LowerSortString = str1.replace(/\s/g, '').toLowerCase();
  const LowerSortString2 = str2.replace(/\s/g, '').toLowerCase();

  if (LowerSortString.length != LowerSortString2.length) {

    return false;
    
  }else
  {
    let string1 = LowerSortString.split("").sort().join("");
    let string2 = LowerSortString2.split("").sort().join("");
  
    return (string1 === string2)
  }
 
}

module.exports = isAnagram;
