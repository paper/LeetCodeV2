/**
 * Created by paper on 2016/6/21.
 * 
 * Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
 * 
 * For example,
 * Given n = 3,
 * 
 * You should return the following matrix:
 * [
 *  [ 1, 2, 3 ],
 *  [ 8, 9, 4 ],
 *  [ 7, 6, 5 ]
 * ]
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if( n <= 0 ){
        return [];
    }

    var matrix = [];

    for(var i=0; i<n; i++){
        matrix[i] = [];
    }

    /**
     * 以左上角为坐标，向右是X轴，代表列
     * 向下是Y轴，代表行
     */
    var XMIN = 0;
    var YMIN = 0;

    var XMAX = n - 1;
    var YMAX = n - 1;

    var curDirection = 'right';

    var x = 0;
    var y = 0;
    var v = 1;

    var m = n*n;

    while(true){

        if( v > m ){
            break;
        }

        matrix[y][x] = v;
        v++;

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

    return matrix;
};
