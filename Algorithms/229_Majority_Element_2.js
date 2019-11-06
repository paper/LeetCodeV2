/**
    Created by paper on 15/9/14.

    Majority Element II
    https://leetcode.com/problems/majority-element-ii/

    Given an integer array of size n, 
    find all elements that appear more than ⌊ n/3 ⌋ times. 
    The algorithm should run in linear time and in O(1) space.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var cache = [];
    var len = nums.length;
    var appearMinTimes = Math.floor(len/3);
    
    var n;
    var result = [];
    
    for(var i = 0; i<len; i++){
        n = nums[i];
        
        if (result.indexOf(n) > -1) {
            continue;
        }
        
        if ( cache[n] === undefined ) {
            cache[n] = 1;
        } else {
            cache[n] += 1;
        }
        
        if (cache[n] > appearMinTimes) {
            result.push(n);
        }
    }
    
    return result;
};
