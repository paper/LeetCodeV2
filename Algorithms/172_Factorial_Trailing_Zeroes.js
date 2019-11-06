/**
 * Created by paper on 15/7/27.
 * 
 * Factorial Trailing Zeroes
 * https://leetcode.com/problems/factorial-trailing-zeroes/
 * 
 * Given an integer n, return the number of trailing zeroes in n!.
 * Note: Your solution should be in logarithmic time complexity.
 * 
 * 
 */

/**
 * @param {number} n
 * @return {number}
 * 
 * 计算5的个数
 * 但25有2个5，同样50，75都有2个5 等等
 */
var trailingZeroes = function(n) {
  var ret = 0;
  if( n < 5 ) return ret;
  while( n >= 5 ){
    n = parseInt( n/5, 10 );
    ret += n;
  }

  return ret;
};