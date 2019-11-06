/**
 * Created by paper on 2016/9/1.
 * 
 * Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
 * 
 * Examples:
 * 
 * s = "leetcode"
 * return 0.
 * 
 * s = "loveleetcode",
 * return 2.
 * Note: You may assume the string contain only lowercase letters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var len = s.length;

    if( len === 0 ) return -1;
    if( len === 1 ) return 0;

    var cache = initCache();

    for(var i=0; i<len; i++) {
        var char = s.charAt(i);
        var temp = cache[char];

        // 记录下当前字母最小的位置
        if( temp[0] === -1 ) {
            temp[0] = i;
        }

        temp[1] += 1;
    }

    var ret = -1;

    for(var c in cache) {
        var r = cache[c];
        var index = r[0];
        var charCount = r[1];

        if( charCount === 1 ){
            ret = ret === -1 ? index :  Math.min(index, ret);
        }
    }

    return ret;

    function initCache(){
        var letters = 'abcdefghijklmnopqrstuvwxyz';
        var len = letters.length;
        var cache = {};
        var char = "";

        for(var i=0; i<len; i++) {
            char = letters.charAt(i);
            cache[char] = [-1, 0]; // 第1个是记录下标, 第2个是记录个数
        }

        return cache;
    }
};
