/**
 * Created by paper on 2016/7/13.
 * 
 * Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.
 * 
 * Example:
 *  For num = 5 you should return [0,1,1,2,1,2].
 * 
 * Follow up:
 * 
 *  It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
 *  Space complexity should be O(n).
 *  Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
 * 
 * Hint:
 * 
 *  You should make use of what you have produced already.
 *  Divide the numbers in ranges like [2-3], [4-7], [8-15] and so on. And try to generate new range from previous.
 *  Or does the odd/even status of the number help you in calculating the number of 1s?
 */

/**
 * @param {number} num
 * @return {number[]}
 * 
 * 观察 1，4，8，16，32 等
 * 会发现：4-7，8-15，16-31，32-63，都是后面的1的个数再加1
 */
var countBits = function(num) {
    if(num===0) return [0];
    if(num===1) return [0, 1];

    var k1 = 1;
    var v1 = Math.pow(2, k1);

    var k2 = 2;
    var v2 = Math.pow(2, k2);

    var ret = [0, 1];

    for(var n=2; n<=num; n++) {
        if( n === v2 ) {
            ret[n] = 1;
            v1 = v2;

            k2++;
            v2 = Math.pow(2, k2);
        }else {
            ret[n] = 1 + ret[n - v1];
        }

    }

    return ret;
};

