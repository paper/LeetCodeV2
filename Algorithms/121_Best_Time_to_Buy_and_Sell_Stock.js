/**
    Created by paper on 15/10/11.

    Best Time to Buy and Sell Stock
    https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

    Say you have an array for which the ith element is the price of a given stock on day i.

    If you were only permitted to complete at most one transaction
    (ie, buy one and sell one share of the stock),
    design an algorithm to find the maximum profit.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;

    var max = 0;
    // 初始化第一个股票买进
    var cur = -prices[0];
    var len = prices.length;
    var p;

    // 从第2天开始
    for(var i = 1; i<len; i++) {
        p = prices[i];

        // 一但发现当天的股票比以前的低，就买进当天的作为买进最低点，之前的作废
        if (p < -cur) {
            cur = -p;
        }
        // 反之，则（假设）卖掉手上“cur”的股票，获取收益。并和之前的收益比较，取最大值。
        else {
            max = Math.max(p + cur, max);
        }
    }

    return max;
};
