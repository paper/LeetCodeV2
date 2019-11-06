/**
 * Created by paper on 15/7/25.
 * 
 * Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/
 * 
 * Given an array of n integers where n > 1, nums, 
 * return an array output such that output[i] is equal to 
 * the product of all the elements of nums except nums[i].
 * 
 * Solve it without division and in O(n).
 * 
 * For example, given [1,2,3,4], return [24,12,8,6].
 * 
 * Follow up:
 * Could you solve it with constant space complexity? 
 * (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 关键点：
 * 从 nums 左右两头同时跑
 * 所以2个for循环都只循环了nums长度的一半
 * 
 * Time: O(n/2) + O(n/2) = O(n)
 * Space: O(1) (Note: The output array does not count as extra space)
 */
var productExceptSelf = function(nums) {
  var output= [];
  var len = nums.length;
  
  // 所有非0数的乘积
  var m = 1;
  var i;
  
  // nums 0 的个数
  var zero_num = 0;

  var left;
  var right;

  var left_v;
  var right_v;
  
  // O(n/2)
  for(i = 0; i < len; i++){
    left = i;
    right = len - i - 1;

    left_v = nums[left];
    right_v = nums[right];

    if( left_v === 0 ){
      zero_num++;
      left_v = 1;
    }

    if( right_v === 0 ){
      zero_num++;
      right_v = 1;
    }

    if( zero_num >= 2 ) break;
    
    m *= left_v * right_v;

    if( left+1 === right-1 ){

      if( nums[left+1] === 0 ){
        zero_num++;
      }else{
        m *= nums[left+1];
      }

      break;
    }

    if( left+1 > right-1 ){
      break;
    }
  }

  // O(n/2)
  for(i = 0; i < len; i++){
    left = i;
    right = len - i - 1;

    switch (zero_num) {
      case 0:
        output[left] = m / nums[left];
        output[right] = m / nums[right];

        if( left+1 === right-1 ){
          output[left+1] = m / nums[left+1];
        }
        break;

      case 1:
        output[left] = nums[left] === 0 ? m : 0;
        output[right] = nums[right] === 0 ? m : 0;

        if( left+1 === right-1 ){
          output[left+1] = nums[left+1] === 0 ? m : 0;
        }
        break;

      default :
        output[left] = 0;
        output[right] = 0;

        if( left+1 === right-1 ){
          output[left+1] = 0;
        }
    }//end switch

    if( left+1 >= right-1 ){
      break;
    }

  }

  return output;
};