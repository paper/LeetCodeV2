/**
    Created by paper on 15/8/11.
    
    Single Number
    https://leetcode.com/problems/single-number/

    Given an array of integers, 
    every element appears twice except for one. 
    Find that single one.

    Note:
    Your algorithm should have a linear runtime complexity. 
    Could you implement it without using extra memory? 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber_1 = function(nums) {
    nums.sort(function(a, b){ return a - b; });
    var len = nums.length;
    
    for(var i=0; i<len; i+=2){
        if( i >= len - 1 ) return nums[len-1];

        if( nums[i] !== nums[i+1] ){
            return nums[i];
        }
    }
};

// A ^ A = 0
// 0 ^ A = A
var singleNumber_2 = function(nums) {
    var len = nums.length;
    var ret = nums[0];
    
    for(var i=1; i<len; i++){
        ret ^= nums[i];
    }
    
    return ret;
};