/**
    Created by paper on 15/8/3.

    Happy Number
    https://leetcode.com/problems/happy-number/
    https://en.wikipedia.org/wiki/Happy_number

    Write an algorithm to determine if a number is "happy".

    A happy number is a number defined by the following process: 
    Starting with any positive integer, replace the number by the sum of the squares of its digits, 
    and repeat the process until the number equals 1 (where it will stay), 
    or it loops endlessly in a cycle which does not include 1. 
    Those numbers for which this process ends in 1 are happy numbers.

    Example: 19 is a happy number

    1^2 + 9^2 = 82
    8^2 + 2^2 = 68
    6^2 + 8^2 = 100
    1^2 + 0^2 + 0^2 = 1
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n === 1) return true;
    
    function getSum(n){
        var sum = 0;
        
        while(n){
            var t = n%10;
            sum += t*t;
            n = parseInt(n/10, 10);
        }
        
        return sum;
    }
    
    var cache = [];
    var n2;
    
    while(1){
        n2 = getSum(n);
        
        if(n2 === 1) return true;
        if(cache[n2] === 1 || n2 === n) return false;
        
        // 记录下来，以免无限循环
        cache[n2] = 1;
        
        n = n2;
    }
};
