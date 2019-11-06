/**
 * There are N students in a class. Some of them are friends, while some are not. 
 * Their friendship is transitive in nature. For example, if A is a direct friend of B, 
 * and B is a direct friend of C, then A is an indirect friend of C. 
 * And we defined a friend circle is a group of students who are direct or indirect friends.
 *
 * Given a N*N matrix M representing the friend relationship between students in the class. 
 * If M[i][j] = 1, then the ith and jth students are direct friends with each other, 
 * otherwise not. And you have to output the total number of friend circles among all the students.
 *
 * Example 1:
 * Input:
 * [[1,1,0],
 * [1,1,0],
 * [0,0,1]]
 * Output: 2
 * Explanation:The 0th and 1st students are direct friends, so they are in a friend circle.
 * The 2nd student himself is in a friend circle. So return 2.
 * 
 * Example 2:
 * Input:
 * [[1,1,0],
 * [1,1,1],
 * [0,1,1]]
 * Output: 1
 * Explanation:The 0th and 1st students are direct friends, the 1st and 2nd students are direct friends,
 * so the 0th and 2nd students are indirect friends. All of them are in the same friend circle, so return 1.
 * 
 * Note:
 * N is in range [1,200].
 * M[i][i] = 1 for all students.
 * If M[i][j] = 1, then M[j][i] = 1.
 */

/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
    var cache = {};

    var row = M.length;
    var col = M[0].length;

    for(var i=0; i<row; i++) {
        for(var j=0; j<col; j++) {
            if( M[i][j] === 1 ) {
                cache[getKey(i, j)] = 1;
            }
        }
    }

    var circles = 0;

    var black_row = [];
    var black_col = [];

    find();

    return circles;

    function find() {
        // 还有没有剩下没有找到的，任意取一个出来
        var keys = Object.keys(cache);
        if( keys.length === 0 ) return;

        circles += 1;

        var pick = parseKey(keys[0]);
        var start = [+pick[0], +pick[1]];

        // 横向与纵向不断深入查找，有没有“一伙”的
        function search(points) {
            var len = points.length;

            if( len === 0 ) {
                return;
            }

            var tempPoints = [];

            for(var i=0; i<len; i++) {
                var start_i = points[i][0];
                var start_j = points[i][1];

                delete cache[getKey(start_i, start_j)];

                // 横向查找
                if( black_row.indexOf(start_i) === -1 ) {
                    for(var k=0; k<col; k++) {
                        if( cache[getKey(start_i, k)] === 1 ) {
                            tempPoints.push([start_i, k]);
                        }
                    }
                }


                // 纵向查找
                if ( black_col.indexOf( start_j ) === -1 ) {
                    for(var j=0; j<row; j++) {
                        if( cache[getKey(j, start_j)] === 1 ) {
                            tempPoints.push([j, start_j]);
                        }
                    }
                }

                black_row.push(start_i);
                black_col.push(start_j);
            }

            search(tempPoints);
        }

        search([start]);

        find();
    }

    function getKey(i, j) {
        return [i, j].join('-');
    }

    function parseKey(key) {
        return key.split('-');
    }

};

