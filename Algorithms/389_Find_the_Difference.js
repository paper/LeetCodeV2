/**
 * Created by paper on 2016/9/9.
 * 
 * Given two strings s and t which consist of only lowercase letters.
 * 
 * String t is generated by random shuffling string s and then add one more letter at a random position.
 *
 * Find the letter that was added in t.
 *
 * Example:
 *
 * Input:
 * s = "abcd"
 * t = "cbead"
 *
 * Output:
 * e
 *
 * Explanation:
 * 'e' is the letter that was added.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var s_cache = {};
    var t_cache = {};

    var char = '';

    // 统计s里面每个字母的个数
    for(var i=0, s_len = s.length; i<s_len; i++) {
        char = s.charAt(i);
        s_cache[char] = s_cache[char] ? s_cache[char] + 1 : 1;
    }

    // 统计t里面每个字母的个数
    for(var j=0, t_len = t.length; j<t_len; j++) {
        char = t.charAt(j);
        t_cache[char] = t_cache[char] ? t_cache[char] + 1 : 1;
    }

    // 如果插入一个字母，那么肯定有一个字母的数量s和t的不等
    for(var c in t_cache) {
        if( t_cache[c] !== s_cache[c] ) {
            return c;
        }
    }
};