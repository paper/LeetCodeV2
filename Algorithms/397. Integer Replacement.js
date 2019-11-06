/**
 * Given a positive integer n and you can do operations as follow:
 *
 * If n is even, replace n with n/2.
 * If n is odd, you can replace n with either n + 1 or n - 1.
 * What is the minimum number of replacements needed for n to become 1?
 *
 * Example 1:
 *
 * Input:
 * 8
 *
 * Output:
 * 3
 *
 * Explanation:
 * 8 -> 4 -> 2 -> 1
 * Example 2:
 *
 * Input:
 * 7
 *
 * Output:
 * 4
 *
 * Explanation:
 * 7 -> 8 -> 4 -> 2 -> 1
 * or
 * 7 -> 6 -> 3 -> 2 -> 1
 */

/**
 * @param {number} n
 * @return {number}
 * 
 * 把n想象成一棵数的根(root), 偶数的话就1个子节点，奇数就2个子节点，直到最后叶子节点1
 * 计算这个树的最小深度
 * 
 * https://discuss.leetcode.com/topic/58425/java-12-line-4-5-ms-iterative-solution-with-explanations-no-other-data-structures
 * 这个思路也很不错！！！！
 */
var integerReplacement = function(n) {
    var min = Number.MAX_VALUE;

    function walk(n, deep) {
        if( deep > min ) {
            return;
        }

        if( n === 1 ) {
            min = Math.min(min, deep);
            return;
        }

        if( n % 2 === 0 ) {
            walk(n/2, deep+1);
        }else{
            walk(n-1, deep+1);
            walk(n+1, deep+1);
        }
    }

    walk(n, 0);

    return min;
};


