/**
 * Given a string representing an expression of fraction addition and subtraction, 
 * you need to return the calculation result in string format. The final result should be irreducible fraction.
 * If your final result is an integer, say 2, you need to change it to the format of fraction that has denominator 1. 
 * So in this case, 2 should be converted to 2/1.
 *
 * Example 1:
 * Input:"-1/2+1/2"
 * Output: "0/1"
 * Example 2:
 * Input:"-1/2+1/2+1/3"
 * Output: "1/3"
 * Example 3:
 * Input:"1/3-1/2"
 * Output: "-1/6"
 * Example 4:
 * Input:"5/3+1/3"
 * Output: "2/1"
 * 
 * Note:
 * The input string only contains '0' to '9', '/', '+' and '-'. So does the output.
 * 
 * Each fraction (input and output) has format ±numerator/denominator. 
 * If the first input fraction or the output is positive, then '+' will be omitted.
 * 
 * The input only contains valid irreducible fractions, 
 * where the numerator and denominator of each fraction will always be in the range [1,10]. If the denominator is 1, 
 * it means this fraction is actually an integer in a fraction format defined above.
 * 
 * The number of given fractions will be in the range [1,10].
 * 
 * The numerator and denominator of the final result are guaranteed to be valid and in the range of 32-bit int.
 */

/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    var r = expression.replace(/-/g, '+-').split('+');

    var fenmu = 1;
    var fenzi = 0;

    var r3 = r.filter(function (ex) {
        return ex !== '';
    }).map(function (ex) {
        var temp = ex.split('/');
        fenmu *= parseInt(temp[1], 10);

        return temp;
    });

    r3.forEach(function (t) {
        fenzi += ( parseInt(t[0], 10) * fenmu/parseInt(t[1], 10) );
    });

    if( fenzi === 0 ) {
        return "0/1";
    }

    var gcd = getGCD(fenmu, fenzi);

    return fenzi/gcd + '/' + fenmu/gcd;

    function getGCD(m, n) {
        m = Math.abs(m);
        n = Math.abs(n);

        var t;

        while (m%n !== 0) {
            t = m%n;
            m = n;
            n = t;
        }

        return n;
    }
};
