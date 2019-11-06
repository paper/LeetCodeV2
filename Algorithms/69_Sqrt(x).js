/**
    Created by paper on 15/8/4.

    Sqrt(x) 
    https://leetcode.com/problems/sqrtx/

    Implement int sqrt(int x).

    Compute and return the square root of x.
*/

/**
 * @param {number} x
 * @return {number}
 */

// 牛顿迭代法求平方根
var mySqrt_1 = function(x) {
    if( x<=1 ) return x;
    
    var x1 = 1;
    var x2 = (x1 + x/x1)/2;
    var MIN = 0.1;
    
    while( Math.abs(x2-x1) > MIN ){
        x1 = x2;
        x2 = (x1 + x/x1)/2;
    }
    
    return parseInt(x2, 10);
};

// 2分法
var mySqrt_2 = function(x) {
    if( x<=1 ) return x;
    
    var begin = 1;
    var end = x;
    var half;
    var double_half;
    
    while( 1 ){
        half = parseInt( (begin+end)/2, 10 );
        
        double_half = half * half;
        
        if(double_half === x) return half;
        
        if( double_half > x ){
            end = half;
        }else{
            begin = half;
            
            if( (begin + 1) * (begin + 1) > x ){
                return begin;
            }
            
            if( (begin + 1) * (begin + 1) === x ){
                return begin+1;
            }
        }
    }
    
};
