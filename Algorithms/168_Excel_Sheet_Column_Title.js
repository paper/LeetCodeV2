/**
 * Created by paper on 15/7/23.
 * 
 * Excel Sheet Column Title
 * https://leetcode.com/problems/excel-sheet-column-title/
 * 
 * Given a positive integer, 
 * return its corresponding column title as appear in an Excel sheet.
 * 
 * For example:
 * 1 -> A
 * 2 -> B
 * 3 -> C
 * ...
 * 26 -> Z
 * 27 -> AA
 * 28 -> AB
 */

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  if (n <= 0) return "";

  var NUM = 26;
  var r =  ["Z", "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
  var ret = [];
  
  // 也可以这样
  // for (var i = 0; i < NUM - 1; i++) {
  //  r.push(String.fromCharCode(65 + i));
  // }

  while (n > NUM) {
    var y = n % NUM;

    ret.unshift(r[y]);

    n = parseInt(n / NUM, 10);

    if( y === 0 ){
      n--;
    }
  }

  ret.unshift(r[n % NUM]);

  return ret.join("");
};