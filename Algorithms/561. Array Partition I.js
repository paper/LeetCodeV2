/**
 * Given an array of 2n integers, your task is to group these integers into n pairs of integer, 
 * say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
 *
 * Example 1:
 * Input: [1,4,3,2]
 *
 * Output: 4
 * Explanation: n is 2, and the maximum sum of pairs is 4.
 * Note:
 * n is a positive integer, which is in the range of [1, 10000].
 * All the integers in the array will be in the range of [-10000, 10000].
 * 
 * 证明：http://www.voidcn.com/blog/huanghanqian/article/p-6572441.html
 * ①.假设在每对(ai,bi)中，bi>=ai（顺序不影响min，所以调换顺序没有关系）
 * ②.令 Sm = min(a1, b1) + min(a2, b2) + ... + min(an, bn) ，那么该题所要求的就是最大的Sm。由①可得，Sm = a1 + a2 + ... + an.
 * ③.令Sa = a1 + b1 + a2 + b2 + ... + an + bn. Sa是一个常量。
 * ④.令di = |ai - bi|. 由①可得，di = bi - ai. 令Sd = d1 + d2 + ... + dn.
 * ⑤.所以Sa = a1 + a1 + d1 + a2 + a2 + d2 + ... + an + an + di = 2Sm + Sd => Sm = (Sa - Sd) / 2. 
 * 为了得到最大的Sm，考虑到Sa是一个常量，所以我们期望Sd最小。
 * ⑥所以这个问题转化为另一个问题：找到一个数组中的pairs (ai,bi)，使得|ai-bi|（ai和bi之间的距离）之和最小。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort(function (a, b) {
    return a - b;
  });

  var len = nums.length;
  var sum = 0;

  for(var i=0; i<len; i+=2) {
    sum += nums[i];
  }

  return sum;
};

