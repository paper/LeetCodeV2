/**
 * Created by paper on 15/7/23.
 * 
 * Palindrome Number
 * https://leetcode.com/problems/palindrome-number/
 * 
 * Determine whether an integer is a palindrome. 
 * Do this without extra space.
 * 
 * Some hints:
 * Could negative integers be palindromes? (ie, -1)
 * If you are thinking of converting the integer to string, 
 * note the restriction of using extra space.
 * 
 * You could also try reversing an integer. 
 * However, if you have solved the problem "Reverse Integer", 
 * you know that the reversed integer might overflow. How would you handle such case?
 * 
 * There is a more generic way of solving this problem.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

  if(x < 0) return false;
  if(x < 10) return true;

  function getLen(x){

    var n = 0;

    while(x >= 1){
      x = x/10;
      n++;
    }

    return n;
  }

  function getNumFromIndex(x, i){
    if( i === 0 ){
      return x%10;
    }

    var v = parseInt( x / ( Math.pow(10, i) ), 10);

    return v%10;
  }

  var len = getLen(x);
  var l = parseInt(len/2, 10);

  for(var i = 0; i < l; i++){
    var first = getNumFromIndex(x, i);
    var last = getNumFromIndex(x, len - 1 - i);

    if( first !=  last){
      return false;
    }
  }

  return true;

};