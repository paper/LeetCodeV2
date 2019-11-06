/**
 * Created by paper on 2016/6/24.
 * 
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? 
 * Find all unique triplets in the array which gives the sum of zero.
 * 
 * Note: The solution set must not contain duplicate triplets.
 * 
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 *  [-1, 0, 1],
 *  [-1, -1, 2]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    "use strict";

    var ret = [];
    var cache = [];

    // 先排序
    nums.sort(function(a, b){
        return a - b;
    });

    // 选一个数，和后面的数组再选2个数进行相加
    function add(n1, r) {

        var l = r.length;

        for(var i=0; i<l; i++){

            var n2 = r[i];

            // 如果找不到n3了，可以直接跳出这次for循环了
            if( n1 + n2 > 0 ){
                break;
            }

            // 如果 n2 等于上一次循环的 n2，这一层循环没必要继续了
            if( n2 === r[i-1] ) {
                continue;
            }

            var lastArr = r.slice(i+1);
            var l2 = lastArr.length;
            var n3;

            for(var j=0; j<l2; j++){
                n3 = lastArr[j];

                //  如果发现大于0的，就没必要往后面找了
                if( n1 + n2 + n3 > 0) {
                    break;
                }

                // 如果找到了，说明n3就是唯一值了，就没必要往后面找了
                if( n1 + n2 + n3 === 0 ) {
                    var nr = [n1, n2, n3];
                    var nrStr = nr.join('-');

                    // 去重复
                    if( cache.indexOf(nrStr) === -1 ){
                        ret.push( nr );
                        cache.push(nrStr);
                    }

                    break;
                }
            }

        }

    }

    nums.forEach(function(n, i){
        // 如果后面的数字都是大于0的，是不可能之和为0的
        if(n <= 0 ){
            add(n, nums.slice(i+1));
        }
    });

    return ret;
};

