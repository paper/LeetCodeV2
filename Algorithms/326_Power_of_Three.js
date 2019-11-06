/**
 *  Created by paper on 16/1/9.
 * 
 *  326. Power of Three
 *  https://leetcode.com/problems/power-of-three/
 *  
 *  Given an integer, write a function to determine if it is a 
 *  power of three.
 *   
 *  Follow up:
 *  Could you do it without using any loop / recursion?
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n <= 0) return false;
    
    // logxy x是底
    function getBaseLog(x, y) {
        return Math.log(y) / Math.log(x);
    }   
    
    var v1 = getBaseLog(3, n);
    var v2 = Math.round(v1);
    
    var MIN = 1e-10;
    
    // 因为js浮点数精度问题
    if ( Math.abs( v1 - v2 ) <= MIN ) {
        return true;
    }
    
    return false;
};