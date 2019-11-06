/**
 * Created by paper on 2016/6/28.
 * Given a collection of integers that might contain duplicates, nums, return all possible subsets.
 * 
 * Note: The solution set must not contain duplicate subsets.
 * 
 * For example,
 * If nums = [1,2,2], a solution is:
 * 
 * [
 *  [2],
 *  [1],
 *  [1,2,2],
 *  [2,2],
 *  [1,2],
 *  []
 * ]
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    "use strict";

    // 肯定包含空数组
    var results = [[]];

    if( nums.length === 0 ){
        return results;
    }

    nums.sort();

    /**
     *  分组
     *  比如 [1,2,2,2,3,3,4,4,4,4]
     *  => [ [1], [2,2,2], [3,3], [4,4,4,4] ]
     */
    function inductive(nums) {
        var len = nums.length;

        if( len === 0 || len === 1) {
            return [nums];
        }

        var ret = [];

        var i = 0;
        var j = 1;
        while(true) {
            var cur  = nums[i];
            var next = nums[j];

            if( cur !== next ){
                ret.push( nums.slice(i, j) );
                i = j;
            }

            j++;
            if( j === len ) {
                ret.push( nums.slice(i, j) );
                break;
            }
        }

        return ret;
    }

    /**
     * 相同的数字，有多少种组合
     * [1] => [ [1] ]
     * [2,2,2] => [ [2], [2,2], [2,2,2] ]
     */
    function sameNums(nums) {
        var ret = [];
        var len = nums.length;

        for(var i=0; i<len; i++){
            ret.push( nums.slice(i) );
        }

        return ret;
    }

    var inductiveNums = inductive(nums);
    var tempRet = [];

    inductiveNums.forEach(function(nums){
        tempRet.push( sameNums(nums) );
    });

    /**
     * @param r 传入的数组，比如
     * [
     *   [ [1] ],
     *   [ [2], [2, 2] ]
     * ]
     * @returns {Array}
     */
    function getNums(n, r){
        var ret = [],
            l = r.length,
            first,
            last;

        if( n === 1 ) {
            r.forEach(function(v){
                v.forEach(function(vin){
                    ret.push(vin);
                });
            });
        } else {
            for(var i=0; i<l; i++){
                first = r[i];
                last = getNums(n - 1, r.slice(i+1));

                // 合并first和last
                first.forEach(function(f){
                    last.forEach(function(t){
                        ret.push( t.concat(f) );
                    });
                });
            }
        }

        return ret;
    }

    var l2 = tempRet.length;
    for(var n = 1; n <= l2; n++){
        results = results.concat(getNums(n, tempRet));
    }

    return results;
};
