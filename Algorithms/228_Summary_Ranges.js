/**
 * Created by paper on 15/7/23.
 * 
 * Summary Ranges
 * https://leetcode.com/problems/summary-ranges/
 * 
 * Given a sorted integer array without duplicates, 
 * return the summary of its ranges.
 * For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if(nums.length === 0) return [];
  if(nums.length === 1) return [nums[0].toString()];

  var len = nums.length;
  var ret = [];

  var t = [nums[0]];
  var n = 0;

  for(var i = 1; i < len; i++){
    n = nums[i];

    t.push(n);

    if( n != t[t.length - 2] + 1 ){
      t.pop();
      ret.push(t);
      t = [n];
    }

  }

  if(t.length !== 0){
    ret.push(t);
  }

  ret.forEach(function(v,i){
    if(v.length == 1 ){
      ret[i] = v[0].toString();
    }else{
      ret[i] = [v[0], v[v.length-1]].join("->");
    }
  });

  return ret;
};