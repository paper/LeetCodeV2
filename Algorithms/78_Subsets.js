/**
 * Created by paper on 2016/6/23.
 * 
 *  Given a set of distinct integers, nums, return all possible subsets.
 *  
 * Note: The solution set must not contain duplicate subsets.
 * 
 * For example,
 * If nums = [1,2,3], a solution is:
 * 
 * [
 *  [3],
 *  [1],
 *  [2],
 *  [1,2,3],
 *  [1,3],
 *  [2,3],
 *  [1,2],
 *  []
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  "use strict";

  // 肯定包含空数组
  var results = [[]];
  var length = nums.length;

  if( length === 0 ){
    return results;
  }

  function getNums(n, r){

    var ret = [],
        l = r.length,
        first,
        last;

    if( n === 1 ) {
      r.forEach(function(v){
        ret.push([v]);
      });
    } else {

      for(var i=0; i<l; i++){

        first = r[i];
        last = getNums(n - 1, r.slice(i+1));

        // 合并first和last
        last.forEach(function(v){
          v.push(first);
          ret.push( v );
        });
      }
    }

    return ret;
  }

  for(var n = 1; n <= length; n++){
    results = results.concat(getNums(n, nums));
  }

  return results;
};
