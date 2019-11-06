/**
 * Created by paper on 2016/8/31.
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * 
 * You are here!
 * Your runtime beats 100.00% of javascriptsubmissions.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var len = strs.length;

    if(len === 0) return "";
    if(len === 1) return strs[0];

    strs.sort(function(a, b){
        return a.length - b.length;
    });

    var firstStr = strs[0];

    var ret = '';

    for(var i=1; i<len; i++) {
        var temp = strs[i];

        if( ret === '' ) {
            ret = compareTwoStr(firstStr, temp);
        }else{
            ret = compareTwoStr(ret, temp);
        }

        if( ret === '' ) {
            break;
        }
    }

    return ret;

    function compareTwoStr(str1, str2) {
        var comStr = '';
        var len = Math.min(str1.length, str2.length);
        var i = 0;

        while(i<len) {
            var c1 = str1.charAt(i);
            var c2 = str2.charAt(i);

            if( c1 === c2 ) {
                comStr += c1;
            } else{
                break;
            }

            i++;
        }

        return comStr;
    }
};