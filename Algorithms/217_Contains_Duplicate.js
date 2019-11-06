/**
 * Created by paper on 15/7/23.
 * 
 * Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 * 
 * Given an array of integers, find if the array contains any duplicates. 
 * Your function should return true if any value appears at least twice in the array, 
 * and it should return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 如果已知需要cache的是数字，可以使用数组，比对象快
 */
var containsDuplicate = function(nums) {
  var cache = [];
  var len = nums.length;
  var n;

  for(var i = 0; i<len; i++){
    n = nums[i];

    if( cache[n] !== undefined ){
      return true;
    }

    cache[n] = n;
  }

  return false;
};