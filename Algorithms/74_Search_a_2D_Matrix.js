/**
 * Created by paper on 15/7/26.
 * 
 * Search a 2D Matrix
 * https://leetcode.com/problems/search-a-2d-matrix/
 * 
 * Write an efficient algorithm that searches for a value in an m x n matrix. 
 * This matrix has the following properties:
 * 
 *    Integers in each row are sorted from left to right.
 *    The first integer of each row is greater than the last integer of the previous row.
 * 
 * For example,
 * Consider the following matrix:
 * [
 *   [1,   3,  5,  7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 50]
 * ]
 * 
 * Given target = 3, return true.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 
 * 思路其实就是2分查找法
 * 只是取值时，一维数组的下标要转化成矩阵的下标取值
 */
var searchMatrix = function(matrix, target) {
  var find = false;

  // 0行，0列判断 和 初始化赋值
  var row = matrix.length;
  if(row === 0) return false;

  var col = matrix[0].length;
  if(col === 0) return false;

  // 边界条件判断
  var min = matrix[0][0];
  var max = matrix[row-1][col-1];

  if( target < min || target > max ) return false;
  if( target === min || target === max ) return true;

  // 根据一个值，等到对应的下标后的matrix的值
  function getMatrixValue(n){
    var i = parseInt(n / col, 10);
    var j = n - i * col;

    return matrix[i][j];
  }

  // 2分查找
  var len = row * col - 1;

  // 下标
  var left = 0;
  var right = len-1;
  var middle;

  while(left < right){
    middle = parseInt( (right + left)/2, 10);

    if( middle === left ){
      if( getMatrixValue(left) === target || getMatrixValue(right) === target ) return true;
      break;
    }

    if( target === getMatrixValue(middle) ) return true;

    if( target < getMatrixValue(middle) ){
      right = middle;
    }else{
      left = middle;
    }

  }//end while

  return find;
};