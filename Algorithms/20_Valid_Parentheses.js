/**
 * Created by paper on 15/7/23.
 * 
 * Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * 
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * 
 * The brackets must close in the correct order, 
 * "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === "" || s.length % 2 !== 0) return false;

  var r1 = s.split("");
  var len = r1.length;
  var c = r1[0];

  var r2 = [];
  var r2_last;

  if (")" == c || "}" == c || "]" == c) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    c = r1[i];

    if ("(" == c || "{" == c || "[" == c) {
      r2.push(c);
    } else {
      r2_last = r2[r2.length - 1];

      if (( ")" == c && "(" == r2_last)
        || ( "}" == c && "{" == r2_last)
        || ( "]" == c && "[" == r2_last)) {
        r2.pop();
      } else {
        return false;
      }

    }
  }

  return r2.length === 0;
};