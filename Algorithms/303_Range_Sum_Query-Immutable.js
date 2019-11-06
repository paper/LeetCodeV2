/**
 *  Created by paper on 15/12/27.
 * 
 *  Range Sum Query - Immutable
 *  https://leetcode.com/problems/range-sum-query-immutable/
 * 
 *  Given an integer array nums, 
 *  find the sum of the elements between
 *  indices i and j (i ≤ j), inclusive.
 *  
 *  Example:
 *      Given nums = [-2, 0, 3, -5, 2, -1]
 *      
 *      sumRange(0, 2) -> 1
 *      sumRange(2, 5) -> -1
 *      sumRange(0, 5) -> -3
 *  
 *  Note:
 *      You may assume that the array does not change.
 *      There are many calls to sumRange function.
 */

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.cache = [];
    
    var len = nums.length;
    var sum = 0;
    
    for(var i=0; i<len; i++){
        sum += nums[i];
        this.cache[i] = sum;
    }
    
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.cache[j] - this.cache[i] + this.nums[i];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
