/**
 * Created by paper on 2016/9/7.
 * 
 * Given a string S, find the longest palindromic substring in S. 
 * You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
 */

/**
 * @param {string} s
 * @return {string}
 * 
 * https://en.wikipedia.org/wiki/Longest_palindromic_substring
 * https://www.zhihu.com/question/37289584
 * http://www.jianshu.com/p/799bc53d4e3d
 */
var longestPalindrome = function(s) {
    var len = s.length;
    if( len <= 1 ) return s;

    var s2 = '#' + s.split('').join('#') + '#';
    var len2 = s2.length;
    var MaxRight = 0;
    var pos = 0;
    var MaxLen = 0;

    // 记录下拥有MaxLen最大时（最大回文数）的那个字母的下标
    var index = 0;

    var RL = createArr(0, len2);

    // Manacher's algorithm 马拉车算法
    for(var i=0; i<len2; i++) {
        // i - pos = pos - j  =>  j = 2*pos - i
        RL[i] = MaxRight>i ? Math.min(RL[2*pos - i] , MaxRight-i) : 1;

        while(s2.charAt(i+RL[i]) && s2.charAt(i+RL[i]) == s2.charAt(i-RL[i]) ) {
            RL[i]++;
        }

        if( i + RL[i] > MaxRight ) {
            MaxRight = i + RL[i];
            pos = i;
        }

        if( RL[i] > MaxLen ) {
            index = i;
            MaxLen = RL[i];
        }
    }

    var str = ''; // 最大子回文
    var realMaxLen = MaxLen - 1;

    var strBeginIndex = index - realMaxLen;
    var strEndIndex   = index + realMaxLen;

    str = s2.slice(strBeginIndex, strEndIndex + 1);

    return str.split('#').join('');

    function createArr(num, l){
        var r = [];

        for(var i=0; i<l; i++) {
            r.push(num);
        }

        return r;
    }
};