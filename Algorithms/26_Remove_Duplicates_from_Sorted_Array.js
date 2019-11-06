/**
 * Created by paper on 15/7/24.
 * 
 * Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * 
 * Given a sorted array, remove the duplicates in place such that 
 * each element appear only once and return the new length.
 * 
 * Do not allocate extra space for another array, 
 * you must do this in place with constant memory.
 * 
 * For example,
 * Given input array nums = [1,1,2],
 * 
 * Your function should return length = 2, 
 * with the first two elements of nums being 1 and 2 respectively. 
 * It doesn't matter what you leave beyond the new length.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var len = nums.length;
  var ret = 1;

  if(len <= 1) return len;

  var x = 0; // 下标
  var l = 0; // 长度

  for( var i = 1; i < len; i++){
    if( nums[i] !== nums[i-1] ){
      ret++;

      if(l !== 0 ){
        i -= l;

        nums.splice(x,l);
        len = nums.length;
        
        x = 0;
        l = 0;
      }
    }else{
      if(x === 0 ) x = i;
      l++;
    }
  }

  if( l !== 0 ){
    nums.splice(x, l);
  }

  return ret;
};