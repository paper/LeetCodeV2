/**
    Created by paper on 15/8/13.

    Two Sum
    https://leetcode.com/problems/two-sum/

    Given an array of integers, 
    find two numbers such that they add up to a specific target number.

    The function twoSum should return indices of the two numbers such that they add up to the target, 
    where index1 must be less than index2. 
    Please note that your returned answers (both index1 and index2) are not zero-based.

    You may assume that each input would have exactly one solution.

    Input: numbers={2, 7, 11, 15}, target=9
    Output: index1=1, index2=2 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length;
    var cache = [];
    
    var v;
    var t;
    
    for(var i=0; i<len; i++){
        v = nums[i];
        t = target-v;
        
        cache[v] ? cache[v].push([i+1, t]) : cache[v] = [ [i+1, t] ];
        
        if( t === v ){
            if( cache[v].length >= 2 ){
                return [ cache[v][0][0],  cache[v][1][0] ];
            }
        }else{
            if( cache[t] ){
                return [ Math.min(cache[v][0][0], cache[t][0][0]), Math.max(cache[v][0][0], cache[t][0][0]) ];
            }
        }
    }
};

