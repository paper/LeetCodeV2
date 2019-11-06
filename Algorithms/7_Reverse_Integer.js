/**
 * Created by paper on 15/7/23.
 * 
 * Reverse Integer
 * https://leetcode.com/problems/reverse-integer/
 * 
 * Reverse digits of an integer.
 * 
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 * 
 * Have you thought about this?
 * 
 * Here are some good questions to ask before coding. 
 * Bonus points for you if you have already thought through this!
 * 
 * If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
 * 
 * Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, 
 * then the reverse of 1000000003 overflows. How should you handle such cases?
 * 
 * For the purpose of this problem, 
 * assume that your function returns 0 when the reversed integer overflows.
 * 
 * Update (2014-11-10):
 * Test cases had been added to test the overflow behavior.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if(x === 0) return 0;

  var ret;
  var prefix = 1;
  var MAX = Math.pow(2, 31);
  var MIN = -1 * MAX + 1;

  if( x < 0 ) {
    prefix = -1;
    x = x * -1;
  }

  var x2 = x.toString();

  ret = prefix * parseInt( x2.split("").reverse().join("") ,10);

  if(ret > MAX || ret < MIN){
    return 0;
  }

  return ret;
};