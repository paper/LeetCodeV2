/**
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 *
 * Given two integers x and y, calculate the Hamming distance.
 *
 * Note:
 * 0 ≤ x, y < 231.
 *
 * Example:
 *
 * Input: x = 1, y = 4
 *
 * Output: 2
 *
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 * ↑   ↑
 *
 * The above arrows point to positions where the corresponding bits are different.
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {

    return bitCount( x^y );

    // http://www.cnblogs.com/graphics/archive/2010/06/21/1752421.html
    // https://en.wikipedia.org/wiki/Hamming_distance
    function bitCount(num) {
        var c = 0;

        for(; num; ++c){
            num &= (num - 1);
        }

        return c;
    }
};

