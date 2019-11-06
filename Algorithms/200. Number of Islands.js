/**
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 *
 * Example 1:
 *
 * 11110
 * 11010
 * 11000
 * 00000
 * Answer: 1
 *
 * Example 2:
 *
 * 11000
 * 11000
 * 00100
 * 00011
 * Answer: 3
 */

/**
 * @param {character[][]} grid
 * @return {number}
 * 
 * 我的思路是像树一样递归遍历当前的小岛，再寻找新的岛的开端
 * 
 * https://discuss.leetcode.com/topic/13248/very-concise-java-ac-solution
 * 这个方法也非常不错
 */
var numIslands = function (grid) {
    var row = grid.length;

    if (row === 0) {
        return 0;
    }

    var col = grid[0].length;

    if (col === 0) {
        return 0;
    }

    var isLands = 0;

    var landHash = {};

    function getLandHashValue(i, j) {
        return landHash[[i, j].join('-')];
    }

    function setLandHashValue(i, j, value) {
        landHash[[i, j].join('-')] = value;
    }

    function landWalk(i, j) {
        //noinspection JSValidateTypes
        if ('0' === grid[i][j] || undefined === grid[i][j] || getLandHashValue(i, j) === 1) {
            return;
        }

        setLandHashValue(i, j, 1);

        try {
            landWalk(i, j - 1);
        } catch (e) {}

        try {
            landWalk(i, j + 1);
        } catch (e) {}

        try {
            landWalk(i - 1, j);
        } catch (e) {}

        try {
            landWalk(i + 1, j);
        } catch (e) {}

    }

    var findNewLanCache = [];

    function findNewLan() {
        for (var i = 0; i < row; i++) {
            if (findNewLanCache[i] !== 'No Find') {
                for (var j = 0; j < col; j++) {
                    //noinspection JSValidateTypes,
                    if ('1' === grid[i][j] && getLandHashValue(i, j) !== 1) {
                        return {i: i, j: j, find: true};
                    }
                }
            }

            // 记录当前行找不到，那么下次就不找了
            findNewLanCache[i] = 'No Find';
        }

        return {find: false};
    }

    while (true) {
        var point = findNewLan();

        if (point.find === false) {
            break;
        }

        landWalk(point.i, point.j);
        isLands++;
    }

    return isLands;
};


