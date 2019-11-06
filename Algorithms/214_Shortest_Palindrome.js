/**
 * Created by paper on 2016/9/13.
 * 
 * Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it. 
 * Find and return the shortest palindrome you can find by performing this transformation.
 * 
 * For example:
 * 
 * Given "aacecaaa", return "aaacecaaa".
 * Given "abcd", return "dcbabcd".
 * 
 * 太难，参考了 @xcv58 的算法
 * https://discuss.leetcode.com/topic/21068/my-7-lines-recursive-java-solution/2
 *
 * 这个算法简直了！！！
 */

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    var len = s.length;

    var j = 0;

    for(var i=len-1; i>=0; i--) {
        if(s.charAt(i) === s.charAt(j)) {
            j++;
        }
    }

    if( j === len ) return s;

    var suffix = s.slice(j);

    return reverseStr(suffix) + shortestPalindrome(s.slice(0, j)) + suffix;

    function reverseStr(s) {
        return s.split('').reverse().join('');
    }
};
