/**
 *  Created by paper on 16/1/2.
 * 
 *  Permutations
 *  https://leetcode.com/problems/permutations/
 *  
 *  Given a collection of distinct numbers, 
 *  return all possible permutations.
 *   
 *  For example,
 *  [1,2,3] have the following permutations:
 *  [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1]. 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var ret = [];
    var len = nums.length;
    
    if (len === 0) return [];
    if (len === 1) return [nums];
    
    for(var i=0; i<len; i++) {
        var r = nums.concat();
        var p = r.splice(i, 1);
                    
        var tempRet = permute(r);
        
        tempRet.forEach(function(v){
            ret.push( v.concat(p) );    
        });
    }
    
    return ret;
};