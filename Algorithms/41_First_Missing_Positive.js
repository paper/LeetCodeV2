/**
 * Created by paper on 2016/9/12.
 * 
 * Given an unsorted integer array, find the first missing positive integer.
 *
 * For example,
 * Given [1,2,0] return 3,
 * and [3,4,-1,1] return 2.
 *
 * Your algorithm should run in O(n) time and uses constant space.
 */

/**
 * discuss 里面优秀的解法，确实不错！
 * 因为考虑的是数字的缺失的那个值，所以它的值和下标应该是一一对应的（相差个1）
 * 
 * class Solution
 * {
 * public:
 *     int firstMissingPositive(int A[], int n)
 *     {
 *         for(int i = 0; i < n; ++ i)
 *             while(A[i] > 0 && A[i] <= n && A[A[i] - 1] != A[i])
 *                 swap(A[i], A[A[i] - 1]);
 *         
 *         for(int i = 0; i < n; ++ i)
 *             if(A[i] != i + 1)
 *                 return i + 1;
 *         
 *         return n + 1;
 *     }
 * };
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var len = nums.length;

    var r = [];
    var cache = [];
    var min = null;
    var ret = 1;

    nums.forEach(function(n, i){
        if( n > 0 ) {
            min = min === null ? n : Math.min(min, n);
        }

        // 缺少数字的那个值的旁边的数字，满足的条件：
        if( n > 0 && n <= len+1 ) {
            r.push(nums[i]);
        }
    });

    // 如果发现没有1，那么1肯定就是结果了
    if( min > 1 ) return ret;

    r.forEach(function(v, i){
        cache[v] = 1;
    });

    for(var i=1, l=cache.length; i<l; i++){
        if( cache[i] !== 1 ) {
            ret = i;
            break;
        }
    }

    // 如果 cache 都填满了 1 ，那么说明缺少的是最大的那个值
    if( ret === 1 ) {
        ret = i;
    }

    return ret;
};
