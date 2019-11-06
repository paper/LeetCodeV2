/**
 *  Created by paper on 15/12/02.
 * 
 *  Rotate Image
 *  https://leetcode.com/problems/rotate-image/
 *  
 *  You are given an n x n 2D matrix representing an image.
 *  Rotate the image by 90 degrees (clockwise).
 *  
 *  Follow up:
 *  Could you do this in-place?
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var n = matrix[0].length;
    
    // 旋转矩阵边缘的正方形
    // 4个参数分别是 左上角 和 右下角坐标
    function rotateBox(x1, y1, x2, y2){
        if (x1 >= x2) return false;
        
        var len = x2 - x1;
        
        var r_top= matrix[x1].slice(y1, y2+1);
        var r_right = [];
        var r_bottom = matrix[x2].slice(y1, y2+1);
        var r_left = [];
        
        for(var x = x1; x <= x2; x++){
            r_right.push(matrix[x][y2]);
            r_left.push(matrix[x][y1]);
        }
        
        // 反向。因为竖着的数组，是90度顺时针转
        r_right.reverse();
        r_left.reverse();
        
        // top
        for(var i = 0; i<=len; i++) {
            // top
            matrix[x1][y1+i] = r_left[i];
            
            // right
            matrix[x1+i][y2] = r_top[i];
            
            // bottom
            matrix[x2][y1+i] = r_right[i];
            
            // left
            matrix[x1+i][y1] = r_bottom[i];
        }
    }
    
    for(var l = 0; l < n/2; l++) {
        rotateBox(l, l, n-l-1, n-l-1);
    }
};