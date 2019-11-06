/**
 * Given a string and an integer k, 
 * you need to reverse the first k characters for every 2k characters counting from the start of the string. 
 * If there are less than k characters left, reverse all of them. 
 * If there are less than 2k but greater than or equal to k characters, 
 * then reverse the first k characters and left the other as original.
 * 
 * Example: Input: s = "abcdefg", k = 2
 * 
 * Output: "bacdfeg"
 * 
 * Restrictions:
 *  1, The string consists of lower English letters only.
 *  2, Length of the given string and k will in the range [1, 10000]
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var r = s.split('');

    var ret = [];
    var temp = [];
    var ret2 = [];

    // 按照k的步长，对r进行分段，存储到ret
    for(var i=0; i<r.length; i++) {
        if( i % k === 0 ) {
            resetTempAndStoreTemp();
        }

        temp.push(r[i]);
    }

    resetTempAndStoreTemp();

    // 对ret的偶数下标进行翻转，拼接到ret2
    for(var j=0; j<ret.length; j++) {
        if(j%2 === 0) {
            ret[j] = ret[j].reverse();
        }

        ret2 = ret2.concat(ret[j]);
    }

    // 返回结果
    return ret2.join('');

    function resetTempAndStoreTemp() {
        if(temp.length > 0) {
            ret.push(temp);
        }
        temp = [];
    }
};


