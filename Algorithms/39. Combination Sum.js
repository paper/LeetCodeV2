/**
 * Given a set of candidate numbers (C) (without duplicates) and a target number (T), 
 * find all unique combinations in C where the candidate numbers sums to T.
 * 
 *  The same repeated number may be chosen from C unlimited number of times.
 * 
 *  Note:   
 *    All numbers (including target) will be positive integers.
 *    The solution set must not contain duplicate combinations.
 *    For example, given candidate set [2, 3, 6, 7] and target 7,
 *    A solution set is:
 *      [
 *          [7],
 *          [2, 2, 3]
 *      ]
 */

/**
 * 主要是使用尾递归进行查询
 * 递归的过程中，保留当前的集合，以便最后保存！
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var ret = [];

    candidates.sort(function (a, b) {
        return a - b;
    });

    function get(fitstNum, lastArr, target, curResult) {

        if( target === 0 ) {
            //console.log(fitstNum, lastArr, target, curResult);
            ret.push(curResult);
            return;
        }

        var check_arr = check(lastArr, target);

        if( check_arr === false ){
            return false;
        }

        for(var i=0; i<check_arr.length; i++) {
            var n = check_arr[i];
            var copyCurResult = curResult.concat();

            copyCurResult.push(n);

            get(n, check_arr.slice(i), target-n, copyCurResult);
        }
    }

    function check(arr, target) {
        var ret = [];

        for(var i=0; i<arr.length; i++) {
            var v = arr[i];

            if( v <= target ) {
                ret.push(v);
            }
        }

        return ret.length === 0 ? false : ret;
    }

    candidates.forEach(function (v, i) {
        get(v, candidates.slice(i), target-v, [v]);
    });

    //console.log(ret);

    return ret;
};

