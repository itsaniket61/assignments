/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str = str.toLowerCase();
    const v = ['a', 'e', 'i', 'o', 'u'];
    let ans = 0;
    for (let index = 0; index < str.length; index++) {
      const element = str[index];
      for (let i = 0; i < v.length; i++) {
        const e = v[i];
        if(element===e) ans++; 
      }
    }
    return ans;
}

module.exports = countVowels;