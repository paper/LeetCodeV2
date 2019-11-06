/**
 *  Created by paper on 15/12/27.
 * 
 *  Range Sum Query 2D - Immutable
 *  https://leetcode.com/problems/range-sum-query-2d-immutable/
 * 
 *  Given a 2D matrix matrix, 
 *  find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) 
 *  and lower right corner (row2, col2).  
 *  
 *  Example:
 *  Given matrix = [
 *      [3, 0, 1, 4, 2],
 *      [5, 6, 3, 2, 1],
 *      [1, 2, 0, 1, 5],
 *      [4, 1, 0, 1, 7],
 *      [1, 0, 3, 0, 5]
 *  ]
 *  sumRegion(2, 1, 4, 3) -> 8
 *  sumRegion(1, 1, 2, 2) -> 11
 *  sumRegion(1, 2, 2, 4) -> 12
 *  
 *  Note:
 *  You may assume that the matrix does not change.
 *  There are many calls to sumRegion function.
 *  You may assume that row1 ≤ row2 and col1 ≤ col2.
 */

/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix;
    this.cache = [];
    this.isEmpty = false;
    
    var rows = matrix.length;
    
    if (rows === 0) {
        this.isEmpty = true;
        return;
    }
    
    var cols = matrix[0].length;
    
    if (cols === 0) {
        this.isEmpty = true;
        return;
    }
    
    var sum = 0;
    
    for(var row=0; row<rows; row++) {
        this.cache[row] = [];
        sum = 0;
        
        for(var col=0; col<cols; col++) {
            sum += matrix[row][col];
            this.cache[row][col] = sum;
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    var result = 0;
    
    if (!this.isEmpty) {
        for(var row=row1; row<=row2; row++) {
            result += this.cache[row][col2] - this.cache[row][col1] + this.matrix[row][col1];
        }
    }
    
    return result;
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */
