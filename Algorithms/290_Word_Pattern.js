/**
 *  Created by paper on 15/11/28.
 * 
 *  Word Pattern
 *  https://leetcode.com/problems/word-pattern/
 *  
 *  Given a pattern and a string str, find if str follows the same pattern.
 *  Here follow means a full match, 
 *  such that there is a bijection between a letter in pattern and a non-empty word in str.
 *  
 *  Examples:
 *  
 *      pattern = "abba", str = "dog cat cat dog" should return true.
 *      pattern = "abba", str = "dog cat cat fish" should return false.
 *      pattern = "aaaa", str = "dog cat cat dog" should return false.
 *      pattern = "abba", str = "dog dog dog dog" should return false.
 *  
 *  Notes:
 *  You may assume pattern contains only lowercase letters, and str contains lowercase letters separated
 *  by a single space. 
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var pattern_r = pattern.split("");
    var str_r = str.split(" ");
    
    var pattern_len = pattern_r.length;
    var str_len = str_r.length;
    
    if (pattern_len !== str_len) return false;
    
    var cache1 = {};
    var cache2 = {};
    
    for (var i = 0; i < pattern_len; i++) {
        var pattern_item = pattern_r[i];
        var str_item = str_r[i];
        
        if (cache1[pattern_item] === undefined){
            cache1[pattern_item] = str_item;
            
            if (cache2[str_item] === undefined){
                cache2[str_item] = pattern_item;
            }else {
                if (cache2[str_item] !== pattern_item){
                    return false;
                }
            }
        }else{
            if (cache1[pattern_item] !== str_item){
                return false;
            }
        }
    }
    
    return true;
};