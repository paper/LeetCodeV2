/**
 * Created by paper on 2016/6/13.
 * 
 * Given a non-empty array of integers, return the k most frequent elements.
 * 
 * For example,
 * Given [1,1,1,2,2,3] and k = 2, return [1,2].
 * 
 * Note:
 *  You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 *  Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var numsObj = {};
    var r = [];
    var ret = [];

    nums.forEach(function(v){
        if( numsObj[v] ){
            numsObj[v] = numsObj[v] + 1;
        }else{
            numsObj[v] = 1;
        }
    });

    for(var i in numsObj){
        r.push([i, numsObj[i]]);
    }

    r.sort(function(a, b){
        return b[1] - a[1];
    });

    for(var j=0; j<k; j++){
        ret.push( parseInt(r[j][0], 10) );
    }

    return ret;
};

