/**
 * You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. 
 * For each integer, you should choose one from + and - as its new symbol.
 *
 * Find out how many ways to assign symbols to make sum of integers equal to target S.
 *
 * Example 1:
 * Input: nums is [1, 1, 1, 1, 1], S is 3.
 * Output: 5
 * Explanation:
 *
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 *
 * There are 5 ways to assign symbols to make the sum of nums be target 3.
 * 
 * Note:
 * The length of the given array is positive and will not exceed 20.
 * The sum of elements in the given array will not exceed 1000.
 * Your output answer is guaranteed to be fitted in a 32-bit integer.
 */

/**
 * 主要参考了：https://discuss.leetcode.com/topic/76243/java-15-ms-c-3-ms-o-ns-iterative-dp-solution-using-subset-sum-with-explanation
 * 如果使用普通的递归方法，虽然可以达到目的，但会超时
 * 
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    if( nums.length === 0 ) return 0;

    var sum = 0;

    nums.forEach(function (n) {
        sum += n;
    });

    return sum < S || (S + sum) % 2 > 0 ? 0 : subsetSum(nums, (S + sum)/2);

    function subsetSum(nums, s) {
        var dp = [1];

        nums.forEach(function (n) {
            for(var i=s; i>=n; i--) {
                if( dp[i-n] === undefined ) dp[i-n] = 0;
                if( dp[i] === undefined ) dp[i] = 0;

                dp[i] = dp[i] + dp[i-n];
            }
        });

        return dp[s];
    }
};

