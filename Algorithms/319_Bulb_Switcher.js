/**
 * Created by paper on 2016/9/9.
 * 
 * There are n bulbs that are initially off. 
 * You first turn on all the bulbs. Then, you turn off every second bulb. 
 * On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, 
 * you toggle every i bulb. For the nth round, you only toggle the last bulb. 
 * Find how many bulbs are on after n rounds.
 * 
 * Example:
 *
 * Given n = 3.
 *
 * At first, the three bulbs are [off, off, off].
 * After first round, the three bulbs are [on, on, on].
 * After second round, the three bulbs are [on, off, on].
 * After third round, the three bulbs are [on, off, off].
 *
 * So you should return 1, because there is only one bulb is on.
 */

/**
 * 因为试验一下就会发现，灯泡偶数开关操作次数的最后都会被关闭，
 * 只有奇数次数的操作才会亮，那怎么才能是奇数操作次数？
 * 
 * Tip：任何一个数都可以写成 n = 1*n
 * 
 * 例如：
 * 操作第7个灯泡的次数分别是：1*7 => 2次, 所以是 on, off
 * 操作第8个灯泡的次数分别是：1*8, 2*4 => 4次, 所以是 on, off, on, off
 * 操作第9个灯泡的次数分别是：1*9, 3*3 => 3次, 所以是 on, off, on
 * 
 * 所以要想是奇数，那么它必须是可以被开方的。所以亮的灯泡就是: n的开方取整
 * 
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    return ~~Math.sqrt(n);
};