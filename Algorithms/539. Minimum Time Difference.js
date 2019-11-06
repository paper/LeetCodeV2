/**
 * Given a list of 24-hour clock time points in "Hour:Minutes" format, 
 * find the minimum minutes difference between any two time points in the list.
 *
 * Example 1:
 * Input: ["23:59","00:00"]
 * Output: 1
 * Note:
 * The number of time points in the given list is at least 2 and won't exceed 20000.
 * The input time is legal and ranges from 00:00 to 23:59.
 */

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  var len = timePoints.length;

  var matrix = [];

  // 建立一个矩阵
  for(var i=0; i<len; i++) {
    var time = timePoints[i];
    var temp = time.split(':');

    var hour = parseInt(temp[0], 10);
    var minutes = parseInt(temp[1], 10);

    if( matrix[hour] ) {
      // 如果存在两个值一样，说明最小值肯定是0了
      if( matrix[hour][minutes] === 1 ) {
        return 0;
      }
    }else{
      matrix[hour] = [];
    }

    matrix[hour][minutes] = 1;
  }

  var first = null;
  var last = null;

  var cur  = null;
  var prev = null;

  var min_minutes = Number.MAX_VALUE;

  var row = matrix.length;

  for(var h=0; h<row; h++) {

    if( matrix[h] ) {
      var col = matrix[h].length;

      for(var m=0; m<col; m++) {

        if( matrix[h][m] ) {

          if( !first ) {
            first = [h, m];
          }

          cur = [h, m];

          if( prev ) {
            // 对比
            min_minutes = Math.min(min_minutes, getDistance(prev, cur));
          }

          prev = cur;
        }

      }
    }

  }

  last = [--h, --m];

  // 获取last 到 first 的时间差
  var x1 = (23 - last[0]) * 60 + 60 - last[1];
  var x2 = first[0] * 60 + first[1];

  return Math.min(min_minutes, x1 + x2);

  // p1 < p2
  function getDistance(p1, p2) {
    var h1 = p1[0];
    var m1 = p1[1];

    var h2 = p2[0];
    var m2 = p2[1];

    return (h2 - h1) * 60 + m2 - m1;
  }

};


