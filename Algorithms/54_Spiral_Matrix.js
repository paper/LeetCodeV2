/**
 * Created by paper on 2016/6/20.
 * 
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 * 
 * For example,
 * Given the following matrix:
 * 
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 * 
 * You should return [1,2,3,6,9,8,7,4,5].
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    if( matrix.length === 0 ){
        return [];
    }

    if( matrix.length === 1 ){
        return matrix[0];
    }

    var x = 0;
    var y = 0;

    var ret = [];

    /**
     * 以左上角为坐标，向右是X轴，代表列
     * 向下是Y轴，代表行
     */
    var X = matrix[0].length;
    var Y = matrix.length;

    var XMIN = 0;
    var YMIN = 0;

    var XMAX = X - 1;
    var YMAX = Y - 1;

    var curDirection = 'right';

    while(true){

        if(  y < YMIN || y > YMAX ||
            x < XMIN || x > XMAX ){
            break;
        }

        ret.push( matrix[y][x] );

        switch (curDirection) {
            case 'right':
                if( x === XMAX ){
                    curDirection = 'down';
                    YMIN++;
                    y++;
                }else{
                    x++;
                }
                break;
            case 'down':
                if( y === YMAX ) {
                    curDirection = 'left';
                    XMAX--;
                    x--;
                }else{
                    y++;
                }
                break;
            case 'left':
                if( x === XMIN ){
                    curDirection = 'up';
                    YMAX--;
                    y--;
                }else{
                    x--;
                }
                break;
            case 'up':
                if( y === YMIN ){
                    curDirection = 'right';
                    XMIN++;
                    x++;
                }else{
                    y--;
                }
                break;
        }
    }//end while

    return ret;
};
