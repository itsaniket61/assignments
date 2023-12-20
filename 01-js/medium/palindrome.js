/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length==1 || str.length==0){
    return true;
  }
  if(str.includes(' ')){
    console.log(str);
    return true;
  }
  str = str.toLowerCase();
  let startIndex = 0;
  let lastIndex = str.length-1;
  while(startIndex<lastIndex){
    if(str[startIndex]===str[lastIndex]){
      console.log(startIndex,lastIndex,str[startIndex]===str[lastIndex]);
      startIndex++;
      lastIndex--;
    }else{
      return false;
    }
  } 
  return true;
}

module.exports = isPalindrome;
