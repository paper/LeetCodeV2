/**
    Created by paper on 15/10/10.

    Compare Version Numbers
    https://leetcode.com/problems/compare-version-numbers/

    Compare two version numbers version1 and version2.
    If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

    You may assume that the version strings are non-empty and contain only digits and the . character.
    The . character does not represent a decimal point and is used to separate number sequences.
    For instance, 2.5 is not "two and a half" or "half way to version three", 
    it is the fifth second-level revision of the second first-level revision.

    Here is an example of version numbers ordering:

    0.1 < 1.1 < 1.2 < 13.37
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    
    if (version1 === version2) return 0;
    
    var r1 = version1.split(".");
    var r2 = version2.split(".");
    
    var len = Math.max(r1.length, r2.length);
    
    for(var i=0; i<len; i++){
        var c = check(r1[i], r2[i]);
        
        if ( c !== 0 ) return c;
    }
    
    return 0;
};

function check(s1, s2) {
    if (s1 === undefined ) {
        s1 = "0";
    }
    
    if (s2 === undefined ) {
        s2 = "0";
    }
    
    var n1 = parseFloat(s1);
    var n2 = parseFloat(s2);
    
    if (n1 === n2) return 0;
    
    return n1 > n2 ? 1 : -1;
}


