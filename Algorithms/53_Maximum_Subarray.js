/**
 * Created by paper on 15/7/27.
 * 
 * Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 * 
 * Find the contiguous subarray within an array (containing at least one number) 
 * which has the largest sum.
 * 
 * For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
 * the contiguous subarray [4,−1,2,1] has the largest sum = 6.
 * 
 * More practice:
 * If you have figured out the O(n) solution, 
 * try coding another solution using the divide and conquer approach, which is more subtle.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var len = nums.length;

  if(len === 1) return nums[0];

  var max;
  var sub;
  var num;

  max = sub = nums[0];

  for(var i = 1; i<len; i++){
    num = nums[i];

    if( max < 0 && num > max){
      max = sub = num;
      continue;
    }

    sub += num;

    if( sub > max ){
      max = sub;
    }

    if( sub < 0 ){
      sub = 0;
    }
  }

  return max;
};