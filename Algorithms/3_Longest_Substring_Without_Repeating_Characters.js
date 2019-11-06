/**
 * Created by paper on 2016/9/6.
 * 
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Examples:
 *  Given "abcabcbb", the answer is "abc", which the length is 3.
 *  Given "bbbbb", the answer is "b", with the length of 1.
 *  Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *  
 *  You are here!
 *  Your runtime beats 100.00% of javascriptsubmissions.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    if( len <= 1 ) return len;

    var max = 0;

    var i = 0;
    var tempStr = '';

    while(i < len) {
        var curChar = s.charAt(i);
        var index = tempStr.indexOf(curChar);

        if( index === -1 ) {
            i++;
            tempStr += curChar;
            max = Math.max(max, tempStr.length);
        } else {
            // 如果当前i的位置在tempStr index的位置有一样的字符，
            // 那么从 index 开始到 i 的字符串，肯定是不一样的！
            tempStr = tempStr.slice(index+1);
        }
    }

    return max;
};

