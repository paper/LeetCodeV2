/**
 * Given a triangle, find the minimum path sum from top to bottom. 
 * Each step you may move to adjacent numbers on the row below.
 *
 * For example, given the following triangle
 * [
 *     [2],
 *    [3,4],
 *   [6,5,7],
 *  [4,1,8,3]
 * ]
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 *
 * Note:
 * Bonus point if you are able to do this using only O(n) extra space, 
 * where n is the total number of rows in the triangle.
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var height = triangle.length;

    if( height === 0 ) {
        return 0;
    }

    if( height === 1 ) {
        return triangle[0][0];
    }

    // 从底部向上走，
    // 2合一，选最小的。因为很容易判断，如果倒数第1，和 倒数第2层，往上走，肯定是和最小的合并。
    // 同理，再继续往上
    for(var h = height-2; h>=0; h--) {
        // 当前的一层
        var cur_h = triangle[h];

        // 当前层的下一层
        var next_h = triangle[h+1];

        // 更新当前一层
        for(var i=0; i<cur_h.length; i++) {
            cur_h[i] = Math.min( cur_h[i] + next_h[i], cur_h[i] + next_h[i+1] );
        }
    }

    return triangle[0][0];
};


