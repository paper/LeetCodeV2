/**
 *  Created by paper on 15/12/02.
 * 
 *  Combinations
 *  https://leetcode.com/problems/combinations/
 *  
 *  Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
 *   
 *  For example,
 *   
 *  If n = 4 and k = 2, a solution is:
 *   
 *  [
 *     [2,4],
 *     [3,4],
 *     [2,3],
 *     [1,2],
 *     [1,3],
 *     [1,4]
 *  ]
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    // n 变成自然数数组
    var r = [];
    
    for(var i=1; i<=n; i++){
        r.push(i);
    }
    
    function combineIn(r, k) {

        if ( r.length < k ) return false;
        if ( k === 0 ) return [[]];
        
        var ret = [];
        
        if ( k === 1 ) {
            r.forEach(function(v, i){
                ret.push([v]);
            });
        } else {
            var len = r.length;
            
            for(var i = len - 1; i>=0; i--){
                var first = r[i];
                var last = combineIn(r.slice(0, i), k - 1);
                
                if (last && last.length !== 0) {
                    last.forEach(function(v){
                        ret.push( v.concat(first) );    
                    });
                }
            }
        }

        return ret;
    }
        
    return combineIn(r, k);
};
