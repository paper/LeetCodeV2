/**
 * You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. 
 * Grid cells are connected horizontally/vertically (not diagonally). 
 * The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). 
 * The island doesn't have "lakes" (water inside that isn't connected to the water around the island). 
 * One cell is a square with side length 1. 
 * The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
 *
 * Example:
 *
 * [[0,1,0,0],
 * [1,1,1,0],
 * [0,1,0,0],
 * [1,1,0,0]]
 *
 * Answer: 16
 * Explanation: The perimeter is the 16 yellow stripes in the image below:
 * */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var ret = 0;

    var row = grid.length;

    if( row === 0 ) return ret;

    var col = grid[0].length;

    if( col === 0 ) return ret;

    for(var i=0; i<row; i++) {
        for(var j=0; j<col; j++) {
            var item = grid[i][j];

            if( item === 1 ) {
                var left  = j > 0 ? grid[i][j-1] : 0;
                var right = j < col-1 ? grid[i][j+1] : 0;

                var top    = i > 0 ? grid[i-1][j] : 0;
                var bottom = i < row-1 ? grid[i+1][j] : 0;

                ret += 4 - (left + right + top + bottom);
            }
        }
    }

    return ret;
};

