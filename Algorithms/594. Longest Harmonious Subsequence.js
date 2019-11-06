/**
 * We define a harmonious array is an array where the difference between its maximum value and 
 * its minimum value is exactly 1.
 *
 * Now, given an integer array, 
 * you need to find the length of its longest harmonious subsequence among all its possible subsequences.
 *
 * Example 1:
 * Input: [1,3,2,2,5,2,3,7]
 * Output: 5
 * Explanation: The longest harmonious subsequence is [3,2,2,2,3].
 * Note: The length of the input array will not exceed 20,000.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  var cache = {};

  // 记录每个数字有多少个
  nums.forEach(function (n) {
    if( cache[n] === undefined ) {
      cache[n] = 1;
    }else{
      cache[n] += 1;
    }
  });
  
  var longest = 0;

  // 这里的n还是字符串
  for(var n in cache) {
    // 变成数字先
    n = +n;

    var prev = cache[n-1] === undefined ? 0 : cache[n-1];
    var cur = cache[n];
    var next = cache[n+1] === undefined ? 0 : cache[n+1];
    
    if( prev !== 0 ) {
      longest = Math.max(prev+cur, longest);
    }

    if( next !== 0 ) {
      longest = Math.max(next+cur, longest);
    }
  }

  return longest;
};


