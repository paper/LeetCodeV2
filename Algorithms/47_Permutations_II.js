/**
 *  Created by paper on 16/1/3.
 * 
 *  Permutations II
 *  https://leetcode.com/problems/permutations-ii/
 *  
 *  Given a collection of numbers that might contain duplicates, 
 *  return all possible unique permutations.
 *  
 *  For example,
 *  [1,1,2] have the following unique permutations:
 *  [1,1,2], [1,2,1], and [2,1,1]. 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var ret = [];
    var cache = [];
    var len = nums.length;
    
    if (len === 0) return [];
    if (len === 1) return [nums];
    
    for(var i=0; i<len; i++) {
        var r = nums.concat();
        var p = r.splice(i, 1);
        
        // 如果开头的数字已经计算过了，那么一样的就pass
        if(cache[p] !== 1) {
            var tempRet = permuteUnique(r);
    
            tempRet.forEach(function(v){
                ret.push( v.concat(p) );    
            });
            
            cache[p] = 1;
        }
    }
    
    return ret;
};