/**
    Created by paper on 15/8/4.

    Excel Sheet Column Number 
    https://leetcode.com/problems/excel-sheet-column-number/

    Related to question Excel Sheet Column Title

    Given a column title as appear in an Excel sheet, 
    return its corresponding column number.

    For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var len = s.length;
    
    if(len === 0) return 0;
    
    // "A".charCodeAt() => 65
    var sum = 0;
    var r = s.split("");
    
    for(var i=0; i<len; i++){
        sum += (r[i].charCodeAt() - 64) * Math.pow(26, len-i-1);
    }
    
    return sum;
};