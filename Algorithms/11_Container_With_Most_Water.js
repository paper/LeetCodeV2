/**
 * Created by paper on 2016/9/8.
 * 
 * Given n non-negative integers a1, a2, ..., an, 
 * where each represents a point at coordinate (i, ai). 
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
 * Find two lines, which together with x-axis forms a container, 
 * such that the container contains the most water.
 * 
 * Note: You may not slant the container.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var len = height.length;

    if(len <= 1)  return 0;
    if(len === 2) return getArea(0, 1);

    var max = 0;

    var left  = 0;
    var right = len - 1;

    while(left < right) {
        max = Math.max(max, getArea(left, right));

        if( height[left] <= height[right] ) {
            left++;
        } else {
            right--;
        }
    }

    return max;

    /**
     * 获取 height 的两个下标之间的最大水量
     * @param p1 下标1
     * @param p2 下标2
     */
    function getArea(p1, p2) {
        if(p1 === p2) return 0;

        var h1 = height[p1];
        var h2 = height[p2];

        var w = Math.abs(p2 - p1);
        var h = Math.min(h1, h2);

        return w * h;
    }
};