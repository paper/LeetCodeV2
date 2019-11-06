/**
 * Created by paper on 2016/9/2.
 * Implement atoi to convert a string to an integer.
 * 
 * Hint: Carefully consider all possible input cases. If you want a challenge, 
 * please do not see below and ask yourself what are the possible input cases.
 * 
 * Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). 
 * You are responsible to gather all the input requirements up front.
 */

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var MAX = 2147483648;
    var numberHash = {
        '0' : 0, '1' : 1, '2' : 2, '3' : 3, '4' : 4,
        '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9
    };

    var ret  = 0; // 返回值
    var sign = 1; // 符号

    // 首先去除前后空格
    str = str.trim();

    // 基本的过滤
    if( !/^[-+]?\d+/.test(str) ) return 0;

    var theFirstChar = str.charAt(0);

    if( theFirstChar === '-' ) {
        sign = -1;
    }

    if( theFirstChar === '-' || theFirstChar === '+' ) {
        str = str.slice(1);
    }

    // 去除前面的 0 和 数字不规则的东西
    str = str.match(/^0*(\d+)[^\d]*.*/)[1];

    for(var j = str.length-1, tenIndex = 0; j>=0; j--, tenIndex++) {
        ret += numberHash[ str[j] ] * Math.pow(10, tenIndex);

        if( ret >= MAX ) {
            ret = sign === 1 ? MAX - 1 : MAX;
            break;
        }
    }

    return sign * ret;
};
