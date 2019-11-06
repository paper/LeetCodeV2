/**
    Created by paper on 15/8/25.

    Missing Number
    https://leetcode.com/problems/missing-number/

     Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
     find the one that is missing from the array.

    For example,
    Given nums = [0, 1, 3] return 2.

    Note:
    Your algorithm should run in linear runtime complexity. 
    Could you implement it using only constant extra space complexity? 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// 题目看起来nums是排序了，其实测试数据是乱序的，这不坑爹么。。。
// 还有就是 [0,1] 返回值是 2，这个也应该在example里写一下啊！！！
var missingNumber = function(nums) {
    var len = nums.length;
    var sum1 = 0;
    var sum2 = 0;
    
    for(var i=0; i<len; i++){
        sum1 += nums[i];
        sum2 += i;
    }
    
    return len - (sum1 - sum2);
};

