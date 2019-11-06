/**
    Created by paper on 15/10/11.

    Best Time to Buy and Sell Stock II
    https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

    Say you have an array for which the ith element is the price of a given stock on day i.

    Design an algorithm to find the maximum profit. 
    You may complete as many transactions as you like 
    (ie, buy one and sell one share of the stock multiple times). 

    However, you may not engage in multiple transactions at the same time 
    (ie, you must sell the stock before you buy again).

    ---------------------------------------------

    动态规划的思路。大问题如何变成子问题（小问题），我的思路：
    
    f_buy(prices)  : 在prices中，一开始是可以买的时候的最大值
    f_sell(prices) : 在prices中，一开始是可以卖的时候的最大值

    最初始的情况是先买。它等于2种情况，第一个买，或者，第一个不买。
    第一个买，那么 f_buy(prices) 的 maxProfit 就是：-prices[0] +  f_sell(prices.slice(1))
    第一个不买，那么 f_buy(prices) 的 maxProfit 就是： 0 + f_buy(prices.slice(1))
    
    f_sell(prices) 也分2种情况：第一个卖，或者，第一个不卖。
    第一个卖，那么 f_sell(prices) 的 maxProfit 就是： +prices[0] + f_buy(prices.slice(1))
    第一个不卖，那么 f_sell(prices) 的 maxProfit 就是：0 + f_sell(prices.slice(1)
    
    初始买 和 初始卖 针对0个，1个，2个价格的情况，稍微用笔画画就会得出比较明显的答案。

    既然大问题分成了小问题，然后再研究一下什么时候买，什么时候卖最佳，当然你使用 Math.max 2种情况也可以，但性能不佳。

    先研究下买：
    很明显，当前的prices数组中，第1个数比第2个数大的时候，是肯定不能买的。反之买。
    
    再研究下卖：
    同样，当前的prices数组中，第1个数比第2个数大的时候，是肯定要卖掉的。反之不卖。

    PS：我这里没有使用 prices.slice(1) ，而是是用 i 作为指向剩余数组第一个数的指针，这样性能会高一些。
    然后就是 removeSame 函数，清除一些相同的数据，精简prices，有有助于分析和解决问题，提高性能。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    
    var i = 0;
    var r = [];
    var len = 0;
    
    // 凡是相同个数大于2的，都只保留2个数据，多余的都是没有意义的，比如：
    // 333 -> 33， 3333 -> 33
    function removeSame(){
        
        var len = prices.length;
        
        if (len < 3) {
            r = prices;
            return;
        }
        
        r[0] = prices[0];
        r[1] = prices[1];
        
        for(var i=2; i<len; i++){
            if ( prices[i] ===  prices[i-1] && prices[i] === prices[i-2]){
                //continue;
            } else {
                r.push(prices[i]);
            }
        }
    }
    
    function buy() {

        switch(i) {
            case len:
            case len-1:
                return 0;
            case len-2:
                return r[len-2] < r[len-1] ? r[len-1] - r[len-2] : 0;
        }
        
        if ( r[i] >= r[i+1] ) {
            i++;
            return buy();
        } else {
            var p0 = r[i];
            i++;
            return sell() - p0;
        }
    }
    
    function sell() {
        switch(i) {
            case len: return 0;
            case len - 1: return r[len - 1];
            case len - 2: 
                return r[len-2] < r[len-1] ? r[len-1] : r[len-2];
        }

        if ( r[i] > r[i+1] ) {
            var p0 = r[i];
            i++;
            return p0 + buy();
        } else {
            i++;
            return sell();
        }
    }
    
    removeSame();
    
    len = r.length;

    return buy();
};