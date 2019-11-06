/**
 * Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.
 *
 * The distance between two adjacent cells is 1.
 * Example 1:
 * Input:
 *
 * 0 0 0
 * 0 1 0
 * 0 0 0
 * Output:
 * 0 0 0
 * 0 1 0
 * 0 0 0
 * 
 * Example 2:
 * Input:
 *
 * 0 0 0
 * 0 1 0
 * 1 1 1
 * Output:
 * 0 0 0
 * 0 1 0
 * 1 2 1
 * 
 * Note:
 * The number of elements of the given matrix will not exceed 10,000.
 * There are at least one 0 in the given matrix.
 * The cells are adjacent in only four directions: up, down, left and right.
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    var row = matrix.length; // row 不可能为0，因为必须是一个二维数组
    var col = matrix[0].length;

    var MAX = Number.MAX_VALUE;

    if (col === 0 ) {
        return matrix;
    }

    var i, j = 0;

    var ret = [];

    // init ret
    for(i=0; i<row; i++) {
        ret[i] = [];
        for(j=0; j<col; j++) {
            ret[i][j] = matrix[i][j] === 0 ? 0 : -1;
        }
    }

    spreadFind(0);

    // 扩散递归查找
    // 从0找到周边的全部1，再从1找到周边的全部2，再从2找到周边的全部3 。。。 逐步扩散开查找
    // 因为这是指数级扩散，所以递归的次数不会很多的
    function spreadFind(curValue) {
        var nextValue = curValue+1;

        var find = false;

        for(i=0; i<row; i++) {
            for(j=0; j<col; j++) {
                var cell = ret[i][j];

                if( cell === curValue ) {
                    // left
                    if( j-1 >= 0 && ret[i][j-1] === -1 ) {
                        find = true;
                        ret[i][j-1] = nextValue;
                    }

                    // right
                    if( j+1 <= col-1 && ret[i][j+1] === -1 ) {
                        find = true;
                        ret[i][j+1] = nextValue;
                    }

                    // top
                    if( i-1 >= 0 && ret[i-1][j] === -1 ) {
                        find = true;
                        ret[i-1][j] = nextValue;
                    }

                    // bottom
                    if( i+1 <= row-1 && ret[i+1][j] === -1 ) {
                        find = true;
                        ret[i+1][j] = nextValue;
                    }

                }
            }
        }

        // 如果发现还有匹配的值，就继续扩展查找，
        // 直到一个都没有值可替换，才停止
        if( find ) {
            spreadFind(nextValue);
        }
    }

    return ret;
};


