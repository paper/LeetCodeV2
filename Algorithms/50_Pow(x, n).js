/**
 * Created by paper on 2016/8/22.
 * 
 * Implement pow(x, n).
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if( n < 0 ){
        return 1/pow(x, -n);
    } else{
        return pow(x, n);
    }

    function pow(x, n){
        if( n === 0 ) return 1;
        if( n === 1 ) return x;
        if( n === 2 ) return x * x;

        var ret;

        if( n%2 === 0 ) {
            ret = pow(x, n/2);
            return  ret * ret;
        } else {
            ret = pow(x, (n-1)/2);
            return ret * ret * x;
        }
    }
};