/**
 * Created by paper on 15/7/23.
 * 
 * Rectangle Area
 * https://leetcode.com/problems/rectangle-area/
 * 
 * Find the total area covered by two rectilinear rectangles in a 2D plane.
 * Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.
 * 
 * Assume that the total area is never beyond the maximum possible value of int.
 */

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  var totalArea = (C - A) * (D - B) + (G - E) * (H - F);

  if (B >= H || D <= F || C <= E || A >= G) {
    return totalArea;
  }

  if (A <= E && B <= F && C >= G && D >= H) {
    return (C - A) * (D - B);
  }

  if (A > E && B > F && C < G && D < H) {
    return (G - E) * (H - F);
  }

  var w = Math.min(C, G) - Math.max(A, E);
  var h = Math.min(H, D) - Math.max(B, F);

  return totalArea - w * h;
};