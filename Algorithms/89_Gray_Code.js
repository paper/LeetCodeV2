/**
 * Created by paper on 2016/8/12.
 * 
 * The gray code is a binary numeral system where two successive values differ in only one bit.
 * 
 * Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. 
 * A gray code sequence must begin with 0.
 * 
 * For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:
 * 
 * 00 - 0
 * 01 - 1
 * 11 - 3
 * 10 - 2
 * 
 * Note:
 *  For a given n, a gray code sequence is not uniquely defined.
 * 
 *  For example, [0,2,3,1] is also a valid gray code sequence according to the above definition.
 * 
 *  For now, the judge is able to judge based on one instance of gray code sequence. Sorry about that.
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if(n===0) { return [0]; }
    if(n===1) { return [0, 1]; }
    if(n===2) { return [0, 1, 3, 2]; }

    var r = grayCode(n-1);
    var l = r.length;

    var ret = [];

    for(var i = l-1; i>=0; i--) {
        ret.push(Math.pow(2, n-1) + r[i]);
    }

    ret = r.concat(ret);

    return ret;
};
