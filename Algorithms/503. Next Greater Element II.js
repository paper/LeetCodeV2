/**
 *  Given a circular array (the next element of the last element is the first element of the array), 
 *  print the Next Greater Number for every element. 
 *  The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, 
 *  which means you could search circularly to find its next greater number. 
 *  If it doesn't exist, output -1 for this number.
 *
 * Example 1:
 * Input: [1,2,1]
 * Output: [2,-1,2]
 * Explanation: The first 1's next greater number is 2;
 * The number 2 can't find next greater number;
 * The second 1's next greater number needs to search circularly, which is also 2.
 * Note: The length of given array won't exceed 10000.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 这个想法非常酷，下标延长1倍，那么就相当走了循环
 * https://discuss.leetcode.com/topic/77923/java-10-lines-and-c-12-lines-linear-time-complexity-o-n-with-explanation
 */
var nextGreaterElements = function(nums) {
    var stack = [];
    var hash = {};
    var len = nums.length;
    var i;
    var ret = [];

    if( len === 0 ) {
        return ret;
    }

    // 先取出当前顺序数组"每个值"对应的下一个最大值，记录下来
    for(i = 0; i<len; i++) {
        var n = nums[i];

        // 这个“栈”是关键，找到大的值后，把之前放进去的一个一个pop出来，可以达到线性的时间需求
        while (stack.length > 0 && n > stack[stack.length - 1][1]) {
            hash[stack.pop().join('-')] = n;
        }

        stack.push([i, n]);
    }

    hash[stack[0].join('-')] = -1;

    // 剩下的就准备从头开始寻找了
    // 添加一个 tempIndex 下标，
    // 这样如果找到最小值下一个的最大值，那么比它大的值，就从之前搜索到的值开始比较，不必每次都从头开始，这样会快很多
    var last = stack.slice(1);
    var tempIndex = 0;

    for(i=last.length-1; i>=0; i--) {
        for(var j=tempIndex; j<len; j++) {
            if( nums[j] > last[i][1] ) {
                hash[last[i].join('-')] = nums[j];
                tempIndex = j;
                break;
            }
        }

        // 如果也没有找到
        if( j === len ) {
            hash[last[i].join('-')] = -1;
        }
    }

    // 根据记录，生成结果
    for(i = 0; i<len; i++) {
        ret.push( hash[i + '-' + nums[i]] );
    }

    return ret;
};