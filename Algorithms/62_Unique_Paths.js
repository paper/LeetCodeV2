/**
 *  Created by paper on 15/12/01.
 * 
 *  Unique Paths
 *  https://leetcode.com/problems/unique-paths/
 * 
 *  A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 *  
 *  The robot can only move either down or right at any point in time. 
 *  The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 *  How many possible unique paths are there?
 *  
 *  Note: m and n will be at most 100.
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    var cache = {};
    
    function fn(m, n){
        if (m === 1) return 1;
        if (n === 1) return 1;
        
        var key = [m, n].join("-");
        
        if (cache[key]){
            return cache[key];
        }
        
        var ret1 = fn(m, n-1);
        var ret2 = fn(m-1, n);
        
        cache[[m, n-1].join("-")] = ret1;
        cache[[m-1, n].join("-")] = ret2;
        
        return ret1 + ret2;
    }
    
    return fn(m, n);
    
};