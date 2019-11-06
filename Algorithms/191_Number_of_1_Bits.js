/**
    Created by paper on 15/8/3.

    Number of 1 Bits
    https://leetcode.com/problems/number-of-1-bits/
    https://en.wikipedia.org/wiki/Hamming_weight

    Write a function that takes an unsigned integer 
    and returns the number of ’1' bits it has (also known as the Hamming weight).

    For example, 
    the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, 
    so the function should return 3.
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var s = n.toString(2);
    
    var sum = 0;
    
    for(var i=0,len=s.length; i<len; i++){
        if(s[i] === "1") sum++;
    }
    
    return sum;
};
