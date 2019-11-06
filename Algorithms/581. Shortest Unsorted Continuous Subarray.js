/**
 * Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, 
 * then the whole array will be sorted in ascending order, too.
 *
 * You need to find the shortest such subarray and output its length.
 *
 * Example 1:
 * Input: [2, 6, 4, 8, 10, 9, 15]
 * Output: 5
 * Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
 * Note:
 * Then length of the input array is in range [1, 10,000].
 * The input array may contain duplicates, so ascending order here means <=.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  var len = nums.length;

  if( len === 1 ) { return 0; }

  if( len === 2 ) {
    if( nums[0] <= nums[1] )  { return 0; }
    return 2;
  }

  // 先确认一下nums是不是本身就有序
  for(var i=1; i<len; i++) {
    if( nums[i] < nums[i-1] ) {
      break;
    }

    if( i === len - 1 && nums[i] >= nums[i-1] ) {
      return 0;
    }
  }

  // 左边的一个边界
  var begin = 0;

  for(var i=1; i<len; i++) {
    if( nums[i] < nums[i-1] ) {
      begin = i - 1;
      break;
    }
  }

  // 右边的一个边界
  var end = len - 1;

  for(var i=len-1; i>0; i--) {
    if( nums[i] < nums[i-1] ) {
      end = i;
      break;
    }
  }

  // 寻找边界里面的最大值和最小值
  var min = Number.MAX_VALUE,
    max = Number.MAX_VALUE * -1;

  for(var i=begin; i<=end; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
  }
  
  // 如果最小值在 0 - begin 中，说明begin还要向左才行
  if( begin > 0 && min < nums[begin-1] ) {
    // find new begin  
    begin = leftBinarySearch(min, 0, begin-1);
  }

  // 如果最大值 在 end - len-1 中，说明end还要向右才行
  if( end < len-1 && max > nums[end+1] ) {
    // find new end
    end = rightBinarySearch(max, end+1, len-1);
  }
  
  return  end - begin + 1;

  function leftBinarySearch(aim, p1, p2) {

    if( aim < nums[p1] ) {
      return p1;
    }

    if( aim > nums[p2] ) {
      return p2+1;
    }

    var mid = Math.floor( (p1+p2)/2 );

    if( aim === nums[mid] ) {
      return mid+1;
    }

    // aim > nums[p1]
    if( mid === p1 ) {
      return p1+1;
    }

    if( aim < nums[mid] ) {
      return leftBinarySearch(aim, p1, mid);
    }else{
      return leftBinarySearch(aim, mid, p2);
    }
  }

  function rightBinarySearch(aim, p1, p2) {
    if( aim < nums[p1] ) {
      return p1-1;
    }

    if( aim > nums[p2] ) {
      return p2;
    }

    var mid = Math.floor( (p1+p2)/2 );

    if( aim === nums[mid] ) {
      return mid-1;
    }

    // aim > nums[p1]
    if( mid === p1 ) {
      return p1;
    }

    if( aim < nums[mid] ) {
      return rightBinarySearch(aim, p1, mid);
    }else{
      return rightBinarySearch(aim, mid, p2);
    }
  }
};
