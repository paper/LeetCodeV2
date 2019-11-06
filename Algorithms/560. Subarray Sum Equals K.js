/**
 * Given an array of integers and an integer k, 
 * you need to find the total number of continuous subarrays whose sum equals to k.
 *
 * Example 1:
 *  Input:nums = [1,1,1], k = 2
 *  Output: 2
 *  
 * Note:
 *  The length of the array is in range [1, 20,000].
 *  The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * https://discuss.leetcode.com/topic/87850/java-solution-presum-hashmap
 *
 * 1）当前位置假设是j，那么从0-j的和是 sum[0, j]
 * 2）要使得从j向左找所有的i的位置，满足 sum[0, i] == sum[0, j] - k  => sum[i, j] === k 了
 * 3）所以就是要记录下来: 每次的 sum[0, i] (i<len) 的出现次数，如果只出现1次，那么就1了。出现过2次，那么就是2。。。依次类推
 * 4）这样，在循环 j 时，就可以快速知道需要的sum[0,i] = sum[0,j] - k的i的位置，有多少个了。
 */
var subarraySum = function(nums, k) {
  var ret = 0;

  /**
   * 初始化的分析：
   * 当 j=0 =>
   * cache[sum - k] = cache[nums[0] - k]
   *
   * 如果 第一个值就是k，即 nums[0] = k =>
   * ret+=1 => cache[sum-k]=cache[0]=1 => cache={"0" : 1}
   */
  var cache = {"0" : 1};

  var sum = 0;

  nums.forEach(function (v, i) {
    sum += v;
    ret += cache[sum - k] ? cache[sum - k] : 0;
    cache[sum] = cache[sum] ? cache[sum] + 1 : 1;
  });

  return ret;
};
