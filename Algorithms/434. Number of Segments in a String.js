/**
 * Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.
 *
 * Please note that the string does not contain any non-printable characters.
 *
 * Example:
 *
 * Input: "Hello, my name is John"
 * Output: 5
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var r = s.split(' ');

    var ret = 0;

    for (var i = 0; i < r.length; i++) {
        if (r[i] != '') {
            ret++;
        }
    }
    
    return ret;
};

