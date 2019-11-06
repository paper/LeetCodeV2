/**
 * Given a non-empty integer array of size n, 
 * find the minimum number of moves required to make all array elements equal, 
 * where a move is incrementing n - 1 elements by 1.
 * 
 * Example:
 *
 * Input:
 * [1,2,3]
 *
 * Output:
 * 3
 *
 * Explanation:
 * Only three moves are needed (remember each move increments two elements):
 *
 * [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 这里详细说明一下：（主要使用数学方法解决这个问题）
 * 
 * 先把问题简单化
 * nums = [100, 1]，那么显然是需要99次，(100-1)
 * nums = [100, 100, 1]，这就要想一想了。是 (100-1) * 2
 * 依次类推，那么我们就先把nums进行排序，计算出前面相等时需要进行的步骤，记录下来。
 * 
 */

var minMoves = function(nums){
    var len = nums.length;
    var ret = 0;

    if( len === 1 ) {
        return ret;
    }

    // 从大到小排序
    nums.sort(function(a, b){
        return b - a;
    });

    var curNum  = nums[0];

    for(var i=1; i<len; i++) {
        var nextNum = nums[i] + ret; // 右边的比较小的值，也是在加1的，别忘记了~

        if( nextNum < curNum ) {
            var step = i * ( curNum - nextNum ); // 需要进行多少步骤
            ret += step; // 记录下来
            curNum = nextNum + step; // 等到最左边临时的最大值
        }
    }

    return ret;
}
