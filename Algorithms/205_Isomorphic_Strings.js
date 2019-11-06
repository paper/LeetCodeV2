/**
 *  Created by paper on 16/1/1.
 * 
 *  Isomorphic Strings
 *  https://leetcode.com/problems/isomorphic-strings/
 * 
 *  Given two strings s and t, determine if they are isomorphic.
 *  Two strings are isomorphic if the characters in s can be replaced to get t.
 *  
 *  All occurrences of a character must be replaced with another character while preserving
 *  the order of characters. No two characters may map to the same character but a character 
 *  may map to itself.
 *  
 *  For example,
 *  Given "egg", "add", return true.
 *  Given "foo", "bar", return false.
 *  Given "paper", "title", return true.
 *  
 *  Note:
 *  You may assume both s and t have the same length.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var sr = s.split('');
    var tr = t.split('');
    var len = sr.length;
    
    function compare(sr, tr) {
        var cache = {};
        
        for(var i=0; i<len; i++) {
            var si = sr[i];
            var ti = tr[i];
            
            if(cache[si]) {
                if(cache[si] !== ti) {
                    return false;
                }
            } else {
                cache[si] = ti;
            }
        }
        
        return true;
    }

    return compare(sr, tr) && compare(tr, sr);
};

