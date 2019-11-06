/**
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
 *
 * Note:
 *
 * The length of both num1 and num2 is < 5100.
 * Both num1 and num2 contains only digits 0-9.
 * Both num1 and num2 does not contain any leading zero.
 * You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var p1 = num1.length - 1;
    var p2 = num2.length - 1;

    var carry = 0;
    var ret = '';

    while (p1 >= 0 || p2 >= 0) {
        var n1 = p1 >= 0 ? +num1.charAt(p1) : 0;
        var n2 = p2 >= 0 ? +num2.charAt(p2) : 0;
        var n3 = n1 + n2 + carry;

        if( n3 < 10 ) {
            carry = 0;
            ret = n3 + ret;
        }else {
            carry = parseInt(n3/10, 10);
            ret = (n3 - 10*carry) + ret;
        }

        p1--;
        p2--;
    }

    return carry > 0 ? carry + ret : ret;
};
