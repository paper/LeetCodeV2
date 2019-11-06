/**
 * Given the coordinates of four points in 2D space, return whether the four points could construct a square.
 *
 * The coordinate (x,y) of a point is represented by an integer array with two integers.
 *
 * Example:
 * Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
 * Output: True
 * Note:
 *
 * All the input integers are in the range [-10000, 10000].
 * A valid square has four equal sides with positive length and four equal angles (90-degree angles).
 * Input points have no order.
 */

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  var l1 = getLine(p1, p2);
  var l2 = getLine(p1, p3);
  var l3 = getLine(p1, p4);
  var l4 = getLine(p2, p3);
  var l5 = getLine(p2, p4);
  var l6 = getLine(p3, p4);

  var r = [l1, l2, l3, l4, l5, l6];

  r.sort(function (a, b) {
    return a - b;
  });

  if( isEqual(r[0], r[1]) &&
  isEqual(r[0], r[2]) &&
  isEqual(r[0], r[3]) &&
  isEqual(r[4], r[5]) &&
  isEqual(r[4]*r[4], r[0]*r[0]*2) &&
  r[4] > r[0] ) {
    return true;
  }

  return false;

  function getLine(pa, pb) {
    var x = pa[0] - pb[0];
    var y = pa[1] - pb[1];

    return Math.sqrt( x*x + y*y );
  }

  function isEqual(v1, v2) {
    return Math.abs(v1 - v2) < 0.000001;
  }

};
