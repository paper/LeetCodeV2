/**
    Created by paper on 15/9/21.

    Move Zeroes
    https://leetcode.com/problems/move-zeroes/

     Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    For example, given nums = [0, 3, 0, 1, 12], after calling your function, 
    nums should be [3, 1, 12, 0, 0].

    Note:

    1. You must do this in-place without making a copy of the array.
    2. Minimize the total number of operations.

 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var len = nums.length;
    var n;
    var j = null;

    function swap(i, j){
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    for(var i = 0; i<len; i++){
        n = nums[i];

        if (j === null) {
            if ( n === 0 ) {
                j = i;
            } else {
                continue;
            }
        } else {
            if ( n === 0 ) {
                continue;
            } else {
                swap(i, j);
                j++;
            }
        }
    }
};

