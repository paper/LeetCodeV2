/**
 * Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
 *
 * Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
 *
 * The order of output does not matter.
 *
 * Example 1:
 *
 * Input:
 * s: "cbaebabacd" p: "abc"
 *
 * Output:
 * [0, 6]
 *
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of "abc".
 * Example 2:
 *
 * Input:
 * s: "abab" p: "ab"
 *
 * Output:
 * [0, 1, 2]
 *
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 * */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var ret = [];

    var s_len = s.length;
    var p_len = p.length;

    if( s_len === 0 || s_len < p_len ) return ret;

    var hash_p = {};

    for(var i=0; i<p_len; i++) {
        var key = p.charAt(i);

        if( hash_p[key] === undefined ) {
            hash_p[key] = 1;
        }else{
            hash_p[key] += 1;
        }
    }

    // 记录当前满足条件的当前s字符串中最左边的字符
    var temp = '';

    for(var j=0; j<s_len-p_len+1; j++) {
        if( temp !== '' ) {
            // 如果发现之前记录的满足条件的s一段字符串满足条件，而且后移一格后，发现最后一个字符串不是和之前的字符串一样，
            // 那么这一段小s，肯定不满足条件
            if( temp !== s.charAt(j+p_len-1) ) {
                temp = '';
            }else{
                // 如果最新小段s最后一个字符，和之前存储的满足条件一小段字符串的第一个字符一样，
                // 说明，这个一小段s，肯定满足p
                ret.push(j);

                // 更新最左边的字符串
                temp = s.charAt(j);
            }
            continue;
        }

        var c = check(j);

        if( c === true ) {
            ret.push(j);

            // 更新最左边的字符串
            temp = s.charAt(j);
        }else if( c === false ) {
            continue;
        }else {
            j = c;
        }
    }

    function copy(hash) {
        var obj = {};

        for(var i in hash) {
            obj[i] = hash[i];
        }

        return obj;
    }

    // hash等方式判断小段s是否和p一样
    function check(j) {
        var hash = copy(hash_p);

        for(var k=0; k<p_len; k++) {
            var s_char = s.charAt(j+k);

            // 如果一找到不存在大字符串，可以“跳”过这个字符串，加快s字符串的判断
            if( hash[s_char] === undefined ) {
                return j+k;
            }

            if( hash[s_char] === 0 ) {
                return false;
            }

            hash[s_char] -= 1;
        }

        return true;
    }
    
    return ret;
};
