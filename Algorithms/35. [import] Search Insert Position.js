/**
 * Given a sorted array and a target value, return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order.
 *
 * You may assume no duplicates in the array.
 *
 * Here are few examples.
 * [1,3,5,6], 5 → 2
 * [1,3,5,6], 2 → 1
 * [1,3,5,6], 7 → 4
 * [1,3,5,6], 0 → 0
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var len = nums.length,
  start = 0,
  end = len - 1;

  if (target > nums[end]) {
    return len;
  }
  if (target <= nums[0]) {
    return 0;
  }

  while (start < end - 1) {
    var mid = Math.floor((start + end) / 2);
    var midNumber = nums[mid];

    if (midNumber === target) {
      return mid;
    } else if (midNumber > target) {
      end = mid;
    } else {
      start = mid;
    }
  }

  return start + 1;
};