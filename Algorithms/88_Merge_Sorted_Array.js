/**
    Created by paper on 15/8/5.

    Merge Sorted Array
    https://leetcode.com/problems/merge-sorted-array/

    Given two sorted integer arrays nums1 and nums2, 
    merge nums2 into nums1 as one sorted array.

    Note:
    You may assume that nums1 has enough space (size that is greater or equal to m + n) 
    to hold additional elements from nums2. 
    The number of elements initialized in nums1 and nums2 are m and n respectively.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 把nums1的长度看成2个数组相加长度
// 用i,j两个下标，从后开始 “指向” 2个数组对应位置的大小，
// 谁大就放到相应的位置，再修改下标的位置
var merge = function(nums1, m, nums2, n) {
    var i = m-1, 
        j = n-1, 
        k = m+n-1;
        
    while ( j>=0 ) {
        
        if ( i<0 || nums2[j] >= nums1[i] ){
            nums1[k] = nums2[j];
            k--;
            j--;
        }else{
            nums1[k] = nums1[i]; 
            k--;
            i--;
        }
            
    }//end while
    
};


