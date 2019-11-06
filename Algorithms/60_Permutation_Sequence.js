/**
 *  Created by paper on 16/1/3.
 * 
 *  Permutation Sequence
 *  https://leetcode.com/problems/permutation-sequence/
 *  
 *  The set [1,2,3,…,n] contains a total of n! unique permutations.
 *  By listing and labeling all of the permutations in order,
 *  We get the following sequence (ie, for n = 3):
 *  
 *  1. "123"
 *  2. "132"
 *  3. "213"
 *  4. "231"
 *  5. "312"
 *  6. "321"
 *  
 *  Given n and k, return the kth permutation sequence.
 *  Note: Given n will be between 1 and 9 inclusive.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    
    function factorial(n) {
        var sum = 1;
        
        for(var i=1; i<=n; i++) {
            sum *= i;
        }
        
        return sum;
    }
    
    // n => [1...n]
    function initArray(n) {
        var r = [];
        
        for(var i=1; i<=n; i++) {
            r.push(i);
        }
        
        return r;
    }
    
    var r = initArray(n);
    
    if ( n === 1 ) { return '1'; }
    if ( k === 1 ) { return r.join(''); }
    
    function walk(r, k) {
        var ret = [];
        var len = r.length;
        
        if (len===1) { return r; }
        
        if (len===2) {
            if ( k === 1 ) { return r; }
            if ( k === 2 ) { return r.reverse(); }
        }
        
        // 通过k值，可以得到顺序数组排列答案的第一个数字
        // 和剩余的数组对应的k值
        var sum = factorial(len - 1);

        var a = k % sum;
        var b = k / sum;
        
        var p = a === 0 ? b : Math.ceil(b);
        var i = p - 1;
        
        ret = r.splice(i, 1);
        
        var k2 = k - i * sum;
        ret = ret.concat( walk(r, k2) );
        
        return ret;
    }

    return walk(r, k).join('');
};

