/**
 * Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.
 *
 * Example:
 * Input:
 * [
 * [ 1, 2, 3 ],
 * [ 4, 5, 6 ],
 * [ 7, 8, 9 ]
 * ]
 * Output:  [1,2,4,7,5,3,6,8,9]
 * 
 * Note:
 * The total number of elements of the given matrix will not exceed 10,000.
 * */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    var ret = [];

    var row = matrix.length;

    if( row === 0 ) return ret;
    if( row === 1 ) return matrix[0];

    var col = matrix[0].length;

    if( col === 0 ) return ret;
    if( col === 1 ) {
        matrix.forEach(function (r) {
            ret.push(r[0]);
        });

        return ret;
    }

    // 行，列
    var point = {
        row: 0,
        col: 0
    };

    // right(1次) -> leftdown(直到最左边) -> down(1次) -> rightup(直到最顶部) -> 又继续right
    // 如果不能right了，那么就只能一直向下了
    var curDirection = 'start';
    
    // walk
    while ( point.row <= row-1 && point.row >=0 &&
            point.col <= col-1 && point.col >=0) {

        ret.push( matrix[point.row][point.col] );

        switch (curDirection) {
            // 一开始默认是最左上角的坐标
            case 'start':
                point.col += 1;
                curDirection = 'right'; // 更新当前的位置
                break;
            case 'right':
                if( point.row === 0 ) {
                    point.row += 1;
                    point.col -= 1;
                    curDirection = 'leftdown';
                }else{
                    point.row -= 1;
                    point.col += 1;
                    curDirection = 'rightup';
                }
                break;
            case 'leftdown':
                if( point.col === 0 && point.row < row - 1 ) {
                    point.row += 1;
                    curDirection = 'down';
                }else if( point.row === row - 1 ) {
                    point.col += 1;
                    curDirection = 'right';
                }else{
                    point.row += 1;
                    point.col -= 1;
                    curDirection = 'leftdown';
                }
                break;
            case 'down':
                if( point.col === 0 ) {
                    point.row -= 1;
                    point.col += 1;
                    curDirection = 'rightup';
                }else{
                    point.row += 1;
                    point.col -= 1;
                    curDirection = 'leftdown';
                }
                break;
            case 'rightup':
                if( point.col === col - 1 ) {
                    point.row += 1;
                    curDirection = 'down';
                }else if( point.row === 0 ) {
                    point.col += 1;
                    curDirection = 'right';
                }else{
                    point.row -= 1;
                    point.col += 1;
                    curDirection = 'rightup';
                }
                break;
        }

    }

    return ret;
};