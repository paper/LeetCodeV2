/**
    Created by paper on 15/8/3.

    Valid Anagram
    https://leetcode.com/problems/valid-anagram/

    Given two strings s and t, write a function to determine if t is an anagram of s.

    For example,
    s = "anagram", t = "nagaram", return true.
    s = "rat", t = "car", return false.

    Note:
    You may assume the string contains only lowercase alphabets.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram_1 = function(s, t) {
    if(s.length !== t.length ) return false;
    if(s === t) return true;
    
    var s2 = s.split("").sort(function(a, b){return a.charCodeAt() - b.charCodeAt()}).join("");
    var t2 = t.split("").sort(function(a, b){return a.charCodeAt() - b.charCodeAt()}).join("");
    
    return s2 === t2;
};

var isAnagram_2 = function(s, t) {
    if(s.length !== t.length ) return false;
    if(s === t) return true;
    
    var s_r = [];
    var t_r = [];
    
    for(var j=0; j<26; j++){
        s_r[j] = t_r[j] = 0;
    }
    
    for(var i=0, len=s.length; i<len; i++){
        s_r[ s[i].charCodeAt() - 97 ] += 1;
        t_r[ t[i].charCodeAt() - 97 ] += 1;
    }
    
    return s_r.join() === t_r.join();
};
