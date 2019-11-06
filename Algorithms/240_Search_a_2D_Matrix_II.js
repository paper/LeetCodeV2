/**
 * Created by paper on 15/7/26.
 * 
 * Search a 2D Matrix II
 * https://leetcode.com/problems/search-a-2d-matrix-ii/
 * 
 * Write an efficient algorithm that searches for a value in an m x n matrix. 
 * This matrix has the following properties:
 * 
 *    Integers in each row are sorted in ascending from left to right.
 *    Integers in each column are sorted in ascending from top to bottom.
 * 
 * For example,
 * Consider the following matrix:
 * [
 *   [1,   4,  7, 11, 15],
 *   [2,   5,  8, 12, 19],
 *   [3,   6,  9, 16, 22],
 *   [10, 13, 14, 17, 24],
 *   [18, 21, 23, 26, 30]
 * ]
 * 
 * Given target = 5, return true.
 * Given target = 20, return false.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  var find = false;

  // 0行，0列判断 和 初始化赋值
  var row = matrix.length;
  if(row === 0) return false;

  var col = matrix[0].length;
  if(col === 0) return false;

  // 对角线查询，每次都可以缩小矩阵查询“面积”的一半
  // 类似于1维数组的2分查找
  function search(left_top_i, left_top_j, right_bottom_i, right_bottom_j){
    // 如果找到，就退出
    if(find) return;

    // 边界条件判断
    var min = matrix[left_top_i][left_top_j];
    var max = matrix[right_bottom_i][right_bottom_j];
    if( target < min || target > max ) return;
    if( target === min || target === max ){
      find = true;
      return;
    }

    var i = left_top_i;
    var j = left_top_j;
    var v = matrix[i][j];

    var row = right_bottom_i  + 1;
    var col = right_bottom_j  + 1;

    while(i < row && j < col ){

      if( target == v ){
        find = true;
        return;
      }

      if( target > v ){
        if( i === right_bottom_i && j === right_bottom_j ){
          break;
        }

        if(i < right_bottom_i ){
          i++;
        }

        if(j < right_bottom_j ){
          j++;
        }

        v = matrix[i][j];
      }else{
        if( i >= 1 ){
          search( left_top_i, j,  i-1, right_bottom_j);
        }

        if( j >= 1 ){
          search( i, left_top_j, right_bottom_i, j - 1);
        }
        
        break;
      }

    }//end while


  }//end search

  search(0, 0, row - 1, col - 1);

  return find;
};