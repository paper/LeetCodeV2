/**
 * Created by paper on 15/7/27.
 * 
 * Reverse Bits
 * https://leetcode.com/problems/reverse-bits/
 * 
 * Reverse bits of a given 32 bits unsigned integer.
 * 
 * For example, given input 43261596 
 * (represented in binary as 00000010100101000001111010011100), 
 * return 964176192 (represented in binary as 00111001011110000010100101000000).
 * 
 * Follow up:
 * If this function is called many times, how would you optimize it?
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  var MAX = 32;
  var b = n.toString(2);
  var len = b.length;

  function getZero(n){
    var s = "";
    for(var i=0; i<n; i++){
      s+="0";
    }
    return s;
  }

  b = getZero(MAX-len) + b;

  var r = b.split("");
  var l = r.length;
  var h = parseInt(l/2, 10);

  for(var i=0; i<h; i++){
    var temp = r[ l-i-1 ];
    r[ l-i-1 ] = r[i];
    r[i] = temp;
  }

  return parseInt(r.join(""), 2);
};