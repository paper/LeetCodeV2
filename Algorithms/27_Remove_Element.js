/**
    Created by paper on 15/8/3.

    Remove Element
    https://leetcode.com/problems/remove-element/

    Given an array and a value, 
    remove all instances of that value in place and return the new length.

    The order of elements can be changed. 
    It doesn't matter what you leave beyond the new length.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var len = nums.length;
    
    if(len === 0) return 0;
    
    nums.sort(function(a, b){return a - b });
    
    var start = -1;
    var sum = 0;
    
    for(var i = 0; i<len; i++){
        if( nums[i] === val ){
            if(start === -1) start = i;
            sum++;
        }else{
            if(start !== -1) break;
        }
    }
    
    if(start === -1){
        return len;
    }else{
        nums.splice(start, sum);
        
        return nums.length;
    }
    
};
