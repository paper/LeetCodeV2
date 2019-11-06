/**
 * Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.
 * 
 * Example 1:
 * Input: 5
 * Output: True
 * Explanation:
 * The binary representation of 5 is: 101
 * Example 2:
 * Input: 7
 * Output: False
 * Explanation:
 * The binary representation of 7 is: 111.
 * Example 3:
 * Input: 11
 * Output: False
 * Explanation:
 * The binary representation of 11 is: 1011.
 * Example 4:
 * Input: 10
 * Output: True
 * Explanation:
 * The binary representation of 10 is: 1010.
 */

/**
 * @param {number} n
 * @return {boolean}
 * 
 * 1) n 左移动一位，和 n 异或，那么就应该得到全是1，或者只有末尾是0的值x
 * 2）再判断这个值x的条件: 即加1后，是不是2的指数即可
 */
var hasAlternatingBits = function(n) {
    let n2 = n ^ (n << 1)
    
    return isAllBinaryOne(n2) || isAllBinaryOne(n2 + 1)
    
    // 判断 数字n 转2进制，是不是全是由 1 组成
    function isAllBinaryOne(n) {
        let v = Math.log2(n + 1)
        
        return v === Math.ceil(v)
    }
};