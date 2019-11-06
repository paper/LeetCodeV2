/**
 * Created by paper on 2016/7/11.
 * 
 * Given two arrays, write a function to compute their intersection.
 * 
 * Example:
 *  Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
 * 
 * Note:
 *  Each element in the result must be unique.
 *  The result can be in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * 如果不使用系统自带的indexOf方法
 * 那么最佳的方式是对数组先进行排序，再使用二分查找会比较快
 */
var intersection = function(nums1, nums2) {
    var ret = [];

    var l1 = nums1.length;
    var l2 = nums2.length;

    if( l1 === 0 || l2 === 0 ) {
        return ret;
    }

    for(var i=0; i<l1; i++) {
        var temp = nums1[i];

        if( ret.indexOf(temp) === -1 && nums2.indexOf(temp) > -1) {
            ret.push(temp);
        }
    }

    return ret;
};