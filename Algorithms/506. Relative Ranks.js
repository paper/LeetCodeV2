/**
 * Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".
 *
 * Example 1:
 * Input: [5, 4, 3, 2, 1]
 * Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
 * Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal".
 * For the left two athletes, you just need to output their relative ranks according to their scores.
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var len = nums.length;
    var oldNums = nums.concat();
    var ret = [];
    var hash = {};

    // 从大到小
    nums.sort(function (a, b) {
        return b - a;
    });

    // 通过值能知道它对应的下标
    nums.forEach(function (n, i) {
        hash[n] = i;
    });

    oldNums.forEach(function (n) {
        var i = hash[n];
        var name = '';

        if( i === 0 ) {
            name = 'Gold Medal';
        }else if( i === 1 ) {
            name = 'Silver Medal';
        }else if( i === 2 ) {
            name = 'Bronze Medal';
        }else {
            name = String( i + 1 );
        }

        ret.push(name);
    });

    return ret;
};