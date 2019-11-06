/**
 * Created by paper on 2016/7/6.
 * 
 * Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
 * 
 * Example:
 *  Given a = 1 and b = 2, return 3.
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    'use strict';
    
    // 任何值和0异或，值不变
    if( b === 0 ){
        return a;
    }

    var c = a ^ b; // 先取出相加不会进位的值
    var d = (a & b) << 1; // 再取出相加会进位的值，进1（左移1位）

    // c + d === a + b
    // 因为a+b很有可能有多个进位产生连锁反映，所以继续判断，直到 b=0
    return getSum(c, d);
};
