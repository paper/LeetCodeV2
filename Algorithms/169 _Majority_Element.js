/**
    Created by paper on 15/9/14.

    Majority Element
    https://leetcode.com/problems/majority-element/

    Given an array of size n, find the majority element. 
    The majority element is the element that appears more than ⌊ n/2 ⌋ times.

    You may assume that the array is non-empty and the majority element always exist in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var cache = [];
    var curMax = 0;
    var curMaxNum = 0;
    var len = nums.length;
    var n;
    
    for(var i = 0; i<len; i++){
        n = nums[i];
        
        if ( cache[n] === undefined ) {
            cache[n] = 1;
        } else {
            cache[n] += 1;
        }
        
        if (curMax < cache[n]) {
            curMax = cache[n];
            curMaxNum = n;
        }
    }
    
    return curMaxNum;
};

/**
 * @param {number[]} nums
 * @return {number}
 * http://gregable.com/2013/10/majority-vote-algorithm-find-majority.html
 */
var majorityElement = function(nums) {
     var num = 0;
     var count = 0;
     
     nums.forEach(function(v, i){
        if (count === 0){
            num = v;
        }
        
        if (num === v){
            count++;
        }else{
            count--;
        }
     });
     
     return num;
};
