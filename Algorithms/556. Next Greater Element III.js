/**
 * Given a positive 32-bit integer n, 
 * you need to find the smallest 32-bit integer which has exactly the same digits existing in the integer n and is greater in value than n. 
 * If no such positive 32-bit integer exists, you need to return -1.
 *
 * Example 1:
 *  Input: 12
 *  Output: 21
 * 
 * Example 2:
 *  Input: 21
 *  Output: -1
 */

/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {

    var MAX = Math.pow(2, 31);

    var str = n.toString();
    var r = str.split('');

    r = r.map(function (num) {
        return parseInt(num, 10);
    });

    var len = r.length;

    if( len === 1 ) { return -1; }

    if( len === 2 ) {
        var nextNumber = parseInt( r.reverse().join(''), 10);
        return nextNumber > n ? nextNumber : -1;
    }

    for(var i=len-1; i>=1; i--) {
        var prev = i-1;

        var curNumber  = r[i];
        var prevNumber = r[prev];

        if( prevNumber < curNumber ) {
            var j = len - 1;
            while (prevNumber >= r[j]) {
                j--;
            }

            wrap(r, prev, j);

            var r_left  = r.slice(0, prev+1);
            var r_right = r.slice(prev+1);

            var n2 = parseInt(r_left.concat(r_right.sort()).join(''), 10);

            return n2 > MAX ? -1 : n2;
        }
    }

    return -1;

    function wrap(r, i, j) {
        var temp = r[j];
        r[j] = r[i];
        r[i] = temp;
    }

};


