/**
 *  There are N children standing in a line. Each child is assigned a rating value.
 *
 * You are giving candies to these children subjected to the following requirements:
 *
 * Each child must have at least one candy.
 * Children with a higher rating get more candies than their neighbors.
 * What is the minimum candies you must give?
 */

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    // 这个题目的输入会保证至少有一个小孩
    var len = ratings.length;

    if( len === 1 ) {
        return 1;
    }

    var i = 0;
    var candys = [];

    // 首先全部都给1个糖果初始化
    ratings.forEach(function () {
        candys.push(1);
    });

    // 从左到右
    // 如果当前小孩大于左边小孩，那么当前就要比左边的小孩多1个糖果
    for(i = 1; i<len; i++) {
        if( ratings[i] > ratings[i-1] ) {
            candys[i] = candys[i-1] + 1;
        }
    }

    // 再从右到左
    // 如果当前小孩大于右边小孩，那么当前就要比右边的小孩多1个糖果
    // 但是如果上面的遍历已经发现当前小孩比右边的多了，就不加糖果。（反之 加）
    for(i = len - 2; i>=0; i--) {
        if( ratings[i] > ratings[i+1] && candys[i] <= candys[i+1]) {
            candys[i] = candys[i+1] + 1;
        }
    }

    return candys.reduce(function (cur, next) {
        return cur + next;
    }, 0);
};
