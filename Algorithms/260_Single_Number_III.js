/**
 *  Created by paper on 15/12/01.
 * 
 *  Single Number III
 *  https://leetcode.com/problems/single-number-iii/
 * 
 *  Given an array of numbers nums, 
 *  in which exactly two elements appear only once and all the other elements appear exactly twice. 
 *  Find the two elements that appear only once.
 *   
 *  For example:
 *  Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].
 *   
 *  Note:
 *  The order of the result is not important. So in the above example, [5, 3] is also correct.
 *  Your algorithm should run in linear runtime complexity. 
 *  Could you implement it using only constant space complexity?
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var len = nums.length;
    
    if (len === 2) return nums;
    
    var r = nums.sort(function(a, b){return a - b});
    
    var ret = [];
    var t;
    
    for (var i = 0; i < len; i++) {
        t = r[i];
        
        if ( ret[0] === t ) {
            ret.shift();
        } else {
            ret.unshift(t);
        }
    }
    
    return ret;
};
