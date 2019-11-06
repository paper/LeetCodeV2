/**
 * Created by paper on 2016/6/22.
 * 
 * Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.
 * 
 * click to show follow up.
 * Follow up:
 * 
 * Did you use extra space?
 * A straight forward solution using O(mn) space is probably a bad idea.
 * A simple improvement uses O(m + n) space, but still not the best solution.
 * Could you devise a constant space solution?
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var colZeroStore = {}; // 某列全是0
  var rowZeroStore = {}; // 某行全是0

  matrix.forEach(function(rowArr, rowIndex){
    if( rowArr.indexOf(0) > -1 ){

      rowZeroStore[rowIndex] = 0;

      rowArr.forEach(function(v, i){
        if( v === 0 ){
          colZeroStore[i] = 0;
        }

        // 这一行一个一个修改为0
        matrix[rowIndex][i] = 0;
      });
    }
  });

  // 设置列为0
  matrix.forEach(function(rowArr, rowIndex){
    if( rowZeroStore[rowIndex] !== 0 ){
      for(var c in colZeroStore) {
        matrix[rowIndex][c] = 0;
      }
    }
  });
};