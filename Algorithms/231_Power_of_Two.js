/**
 * Created by paper on 15/7/24.
 * 
 * Power of Two
 * https://leetcode.com/problems/power-of-two/
 * 
 * Given an integer, write a function to determine if it is a power of two.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if(n <= 0) return false;
  
  // -------------------------------------
  // 传统方式
  // while( n % 2 === 0 ){
  //   n = n/2;
  // }

  // return n === 1;

  // -------------------------------------
  // 判断2进制格式
  // var s = n.toString(2);
  // var len = s.length;

  // for(var i = len - 1; i > 0; i--){
  //   if( s.charAt(i) === "1" ){
  //     return false;
  //   }
  // }

  // return true;

  // -------------------------------------
  // 最快方式
  return ( n & (n - 1) ) === 0;
};