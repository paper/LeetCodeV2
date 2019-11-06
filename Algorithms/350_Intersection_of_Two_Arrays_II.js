/**
 * Created by paper on 2016/8/15.
 * 
 * Given two arrays, write a function to compute their intersection.
 * 
 * Example:
 *      Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
 * 
 * Note:
 *      Each element in the result should appear as many times as it shows in both arrays.
 *      The result can be in any order.
 *  
 * Follow up:
 *      What if the given array is already sorted? How would you optimize your algorithm?
 *      What if nums1's size is small compared to nums2's size? Which algorithm is better?
 *      What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort(function(a, b){
        return a - b;
    });

    nums2.sort(function(a, b){
        return a - b;
    });

    var l1 = nums1.length;
    var l2 = nums2.length;

    var ret = [];

    // 边界判断
    if( nums2[0] > nums1[l1-1] || nums2[l2-1] < nums1[0] ) {
        return ret;
    }

    var i = 0; // nums1下标
    var j = 0; // nums2下标

    while( j < l2 && i < l1 ) {
        var n1 = nums1[i];
        var n2 = nums2[j];

        if( n2 === n1 ) {
            ret.push(n2);
            j++;
            i++;
        }else if( n2 < n1 ) {
            j++;
        }else {
            i++;
        }
    }

    return ret;
};
