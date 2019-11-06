/**
    Created by paper on 15/9/30.

    Add Binary
    https://leetcode.com/problems/add-binary/

    Given two binary strings, return their sum (also a binary string).

    For example,
    a = "11"
    b = "1"
    Return "100". 
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var result = "";
    
    var r_a = a.split("");
    var r_b = b.split("");
    
    var len_a = r_a.length;
    var len_b = r_b.length;
    
    if (len_a === 0) return b;
    if (len_b === 0) return a;
    
    var jw = 0;
    
    var i = len_a - 1;
    var j = len_b - 1;
    
    while(i>=0 || j>=0) {
        var v_a = r_a[i] ? +r_a[i] : 0;
        var v_b = r_b[j] ? +r_b[j] : 0;
        
        var s = v_a + v_b + jw;
        var s2 = "";
        
        if (s >= 2) {
            s2 = s - 2 + "";
            jw = 1;
        } else {
            s2 = s + "";
            jw = 0;
        }
        
        result = s2 + result;
        
        i--;
        j--;
    }
    
    if (jw === 1) {
        return jw + result;
    }
    
    return result;
};

