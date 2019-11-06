/**
 * Created by paper on 2016/8/19.
 * 
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * 
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var l1 = nums1.length;
    var l2 = nums2.length;

    var nums1_min = nums1[0];
    var nums1_max = nums1[l1-1];

    var nums2_min = nums2[0];
    var nums2_max = nums2[l2-1];

    var arr = [];
    var ret = 0;

    if( nums1_max <= nums2_min ) {
        arr = nums1.concat(nums2);
    }else if( nums2_max <= nums1_min ) {
        arr = nums2.concat(nums1);
    }else {
        var index_1 = 0; // nums1 游标
        var index_2 = 0; // nums2 游标

        var n1; // nums1 某个值
        var n2; // nums2 某个值

        while(true){

            if( index_1 >= l1 && index_2 >= l2 ) {
                break;
            }

            n1 = nums1[index_1];
            n2 = nums2[index_2];

            if( n1 === undefined ) {
                arr = arr.concat(nums2.slice(index_2));
                break;
            }

            if( n2 === undefined ) {
                arr = arr.concat(nums1.slice(index_1));
                break;
            }

            if( n1 < n2 ) {
                arr.push(n1);
                index_1++;
            }else if( n1 > n2 ) {
                arr.push(n2);
                index_2++;
            }else{
                // 相同的数字不过滤
                arr.push(n1);
                arr.push(n2);
                index_1++;
                index_2++;
            }
        }
    }

    var arrLen = arr.length;
    var mid = arrLen/2;
    ret = arrLen%2 !== 0 ? arr[parseInt(mid, 10)] : (arr[mid] + arr[mid-1])/2;

    return ret;
};

