/**
 * Created by paper on 15/7/28.
 * 
 * Pascal's Triangle
 * https://leetcode.com/problems/pascals-triangle/
 * 
 * Given numRows, generate the first numRows of Pascal's triangle.
 * 
 * For example, given numRows = 5,
 * 
 * Return
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows <= 0) return [];
  if(numRows === 1) return [ [1] ];
  if(numRows === 2) return [ [1], [1,1] ];

  // 杨辉三角每行都是回文
  // 所以只要遍历一半即可
  function getNextRow(r){
    var len = r.length;
    var half = parseInt(len/2, 10);
    var next = [1];

    for(var i=1; i<= half; i++){
      next[i] = next[len - i] = r[i] + r[i-1];
    }

    next.push(1);

    return next;
  }

  var ret = [ [1], [1,1] ];

  for(var i = 1; i < numRows-1; i++){
    ret.push( getNextRow(ret[i]) );
  }

  return ret;
};