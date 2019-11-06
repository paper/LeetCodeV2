/**
 *  Created by paper on 16/1/17.
 * 
 *  224. Basic Calculator
 *  https://leetcode.com/problems/basic-calculator/
 *  
 *  Implement a basic calculator to evaluate a simple expression string.
 *  
 *  The expression string may contain open ( and closing parentheses ), 
 *  the plus + or minus sign -, non-negative integers and empty spaces .
 *  
 *  You may assume that the given expression is always valid.
 *  
 *  Some examples:
 *  "1 + 1" = 2
 *  " 2-1 + 2 " = 3
 *  "(1+(4+5+2)-3)+(6+8)" = 23
 *  "1-(3-4)" = 2
 *  "(3-(2-(5-(9-(4)))))" = 1
 *  
 *  Note: Do not use the eval built-in library function. 
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    
    // 先去掉空格
    s = s.replace(/\s*/g, '');
    
    function compute(s) {
        var r = s.split('');
        var len = r.length;
        
        var ret = 0;
        var operate = '';
        var n = 0;
        
        function opera(){
            switch (operate) {
                case '+':
                    ret = ret + n;
                    break;
                case '-':
                    ret = ret - n;
                    break;
                default:
                    ret = n;
            }
        }
           
        for(var i=0; i<len; i++) {
            var t = r[i];
            
            if ( /\d/.test(t) ) {
                n = n * 10 + parseInt(t, 10);
            } 
            
            if ( t === '+' || t === '-') {
                opera();
                
                n = 0;
                operate = t;
            }
            
        }//end for
        
        opera();
        
        return ret;
    }
    
    function removeParenthesis(s) {   
        var r = s.split('');
        var len = r.length;
        var str = '';
        var container = [];
        
        for(var i=0; i<len; i++) {
            var t = r[i];
            
            if ( t === '(' ) {
                container.push( i - 1 < 0 ? '+' : r[i-1] );
            } else if ( t === ')' ) {
                container.pop();
            } else {
                if ( container.length > 0 && container[container.length-1] === '-' && !/\d/.test(t) ) {
                    t = t === '+' ? '-' : '+';
                    // update
                    r[i] = t;
                }
                
                str += t;
            }
            
        }
        
        return str;
    }
    
    return compute( removeParenthesis(s) );
};

