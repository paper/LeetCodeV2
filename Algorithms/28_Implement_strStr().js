/**
 * Created by paper on 2016/8/29.
 * 
 * Implement strStr().
 * 
 * Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

function KMP(haystack, needle){
    var haystackLen = haystack.length;
    var needleLen   = needle.length;

    //根据某个str字符串，创建前缀和后缀集合，并返回共有元素
    function createPrevfixAndSuffix(str) {
        var prevfix = [];
        var suffix = [];
        var sameNum = 0;

        var len = str.length;

        if( len === 1 ) {
            return {
                prevfix : [],
                suffix  : [],
                sameNum : 0
            }
        }

        var prevfixIndex = 0;
        var suffixIndex  = len - 1;

        var curPrevfixStr = '';
        var curSuffixStr = '';

        while(prevfixIndex < len-1 && suffixIndex > 0) {
            curPrevfixStr = curPrevfixStr + str.charAt(prevfixIndex);
            curSuffixStr  = str.charAt(suffixIndex) + curSuffixStr;

            prevfix.push( curPrevfixStr );
            suffix.push( curSuffixStr );

            prevfixIndex++;
            suffixIndex--;
        }

        // 统计相同的字符
        prevfix.forEach(function(v, i){
            if( v === suffix[i] ) {
                sameNum = Math.max(sameNum, v.length);
            }
        });

        return {
            prevfix : prevfix,
            suffix  : suffix,
            sameNum : sameNum
        }
    }

    // Create Partial Match Table
    // ABCDABD -> 0000120
    function createMatchTable(str) {
        var ret  = [];
        var len = str.length;

        for(var i=0; i<len; i++) {
            ret.push( createPrevfixAndSuffix(str.slice(0, i+1)).sameNum )
        }

        return ret;
    }

    var matchTable = createMatchTable(needle);

    var i = 0;
    var find = false;
    var step = 1;

    while(i <= haystackLen - needleLen) {

        for(var j = 0; j<needleLen; j++) {
            var hayStackChar = haystack.charAt(i+j);
            var needleChar   = needle.charAt(j);

            if( hayStackChar != needleChar ) {
                if( j === 0 ) {
                    step = 1;
                } else {
                    //移动位数 = 已匹配的字符数 - 对应的部分匹配值
                    step = j - matchTable[j-1];
                }

                i += step;
                console.log(i)
                break;
            }
        }

        // 如果匹配了前面全部的j，发现都没变被break，说明全部匹配
        if( j === needleLen ) {
            find = true;
            break;
        }

    }

    return find ? i : -1;
}

function BM(haystack, needle) {
    var haystackLen = haystack.length;
    var needleLen   = needle.length;

    // v 在 r 中的位置
    // 从后往前查找才行！
    function indexOf(r, v) {
        for(var i=r.length-1; i>=0; i--){
            if(r[i] === v) {
                return i;
            }
        }

        return -1;
    }

    // 初始化，一开始对齐，从尾部开始比较
    var i = 0;
    var find = false;
    var step = 0;

    while(i <= haystackLen - needleLen) {
        for(var j = needleLen - 1; j >= 0; j-- ) {
            var needleChar   = needle[j];
            var haystackChar = haystack[i + j];

            // 后移位数 = 坏字符的位置 - 搜索词中的上一次出现位置
            if( needleChar != haystackChar ) {

                var badChar = haystackChar;
                var index = indexOf(needle, badChar);

                // i 只能向前，不能退后
                if( j <= index){
                    i += 1;
                    break;
                }

                step = j - index;
                i += step;

                break;
            }
        }

        if( j === -1 ) {
            find = true;
            break;
        }
    }

    return find ? i : -1;
}

var strStr = function(haystack, needle) {
    //return haystack.indexOf(needle);
    
    if( needle === '') {
        return 0;
    }

    if(haystack === '') {
        return -1;
    }

    if( haystack.length <= needle.length ) {
        if( haystack === needle ) {
            return 0;
        } else {
            return -1;
        }
    }

    // ===============================================
    // KMP 算法 - AC
    // ===============================================
    // return KMP(haystack, needle)

    // ===============================================
    // Boyer-Moore 算法 - AC
    // ===============================================
    return BM(haystack, needle);

};