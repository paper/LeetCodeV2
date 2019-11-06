/**
    Created by paper on 15/10/12.

    Best Time to Buy and Sell Stock III
    https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/

    Say you have an array for which the ith element is the price of a given stock on day i.

    Design an algorithm to find the maximum profit. 
    You may complete at most two transactions.

    Note:
    You may not engage in multiple transactions at the same time 
    (ie, you must sell the stock before you buy again).
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    
    var r = removePreAndSuf(prices);

    if (r.length <= 1) return 0;
    
    var max = 0;
    var i = 0;
    var len = r.length;

    for(; i<len; i++) {
        var max1 = maxProfitByOnce(r.slice(0,i));
        var max2 = maxProfitByOnce(r.slice(i));

        max = Math.max(max, max1 + max2);
    }

    return max;
};

// 移除价格的头和尾
// 比如： [10,9,6,1,3,2,4,7,3,2,1] => [1,3,2,4,7]
function removePreAndSuf(prices) {
    var len = prices.length;

    var i = 0;

    while(i<len-1 && prices[i] >= prices[i+1]){
        i++;
    }

    var j = len - 1;

    while(j > 0 && prices[j] <= prices[j-1]) {
        j--;
    }

    // maybe []
    return prices.slice(i, j+1);
}

var maxProfitByOnce = function(prices) {
    if (prices.length <= 1) return 0;
    
    var max = 0;
    var cur = -prices[0];
    var len = prices.length;
    var p;
    
    for(var i = 1; i<len; i++) {
        p = prices[i];

        if (p < -cur) {
            cur = -p;
        } else {
            max = Math.max(p + cur, max);
        }
    }

    return max;
};

