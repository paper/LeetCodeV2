/**
 * Created by paper on 15/7/28.
 * 
 * Pascal's Triangle II
 * https://leetcode.com/problems/pascals-triangle-ii/
 * 
 * Given an index k, return the kth row of the Pascal's triangle.
 * 
 * For example, given k = 3,
 * Return [1,3,3,1].
 * 
 * Note:
 * Could you optimize your algorithm to use only O(k) extra space?
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 * 
 * https://en.wikipedia.org/wiki/Binomial_coefficient
 * C(n, 0) = 1
 * C(n, k) = n!/( k!*(n-k)! )
 * [ n = 0,1,2,3...; k = 0,1,2,3...; k<=n; 0!=1 ]
 * =>
 * 
 * C(n, k) = C(n, k-1) * (n-k+1)/k
 */
var getRow = function(rowIndex) {
  if(rowIndex < 0) return [];
  if(rowIndex === 0) return [1];
  if(rowIndex === 1) return [1,1];

  var r = [];
  r[0] = r[rowIndex] = 1;

  var half = parseInt( (rowIndex+1)/2, 10 );

  // 杨辉三角每行都是回文
  for(var i = 1; i <= half; i++){
    r[i] = r[rowIndex - i] = r[i - 1]*(rowIndex - i + 1)/i;
  }

  return r;
};