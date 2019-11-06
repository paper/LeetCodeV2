/**
 * Created by paper on 2016/7/4.
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 * 
 * Note: Do not use any built-in library function such as sqrt.
 * 
 * Example 1:
 *    Input: 16
 *    Returns: True
 * 
 * Example 2:
 *    Input: 14
 *    Returns: False
 */

/**
 * 牛顿迭代法
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    'use strict';

    var MIN = 0.0001;

    var x = 1;
    var y = 1;

    while( Math.abs(y * y - num) > MIN ) {
        x = y;
        y = 0.5 * (x + num / x);
    }

    y = parseInt(y);

    return y * y === num;
};