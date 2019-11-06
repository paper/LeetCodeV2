/**
 * Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
 * 
 *  Example 1:
 *  Input: "abab"
 * 
 *  Output: True
 * 
 *  Explanation: It's the substring "ab" twice.
 *  Example 2:
 *  Input: "aba"
 * 
 *  Output: False
 *  Example 3:
 *  Input: "abcabcabcabc"
 * 
 *  Output: True
 * 
 *  Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
 */

/**
 * @param {string} str
 * @return {boolean}
 */
var repeatedSubstringPattern = function(str) {
    var len = str.length;

    if(len === 1) return false;

    var ret = false;

    // 直接一分为2，从大开始比较，如果一开始的2份就相等，那就最好了！
    for(var i=parseInt(len/2, 10); i>0; i--) {

        if( ret === true ) {
            break;
        }

        // 子字符串的长度肯定是可以被l整除的
        if( len % i === 0 ) {
            var subStr = str.slice(0, i);
            var step = 1;

            while(true) {
                var begin = step * i;
                var end   = begin + i;

                if( end > len ) break;

                var subStrNext = str.slice(begin, end);

                if( subStr !== subStrNext ) {
                    break;
                }else{
                    // 如果检测到了最后，都相等，说明是true
                    if( end === len ) {
                        ret = true;
                        break;
                    }
                }

                step++;
            }
        }
    }

    return ret;
};

