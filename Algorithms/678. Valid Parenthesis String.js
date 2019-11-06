/**
 * Given a string containing only three types of characters: '(', ')' and '*', 
 * write a function to check whether this string is valid. We define the validity of a string by these rules:
 * 
 * Any left parenthesis '(' must have a corresponding right parenthesis ')'.
 * Any right parenthesis ')' must have a corresponding left parenthesis '('.
 * Left parenthesis '(' must go before the corresponding right parenthesis ')'.
 * '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
 * An empty string is also valid.
 * 
 *  Example 1:
 *      Input: "()"
 *      Output: True
 *      
 *  Example 2:
 *      Input: "(*)"
 *      Output: True
 *      
 *  Example 3:
 *      Input: "(*))"
 *      Output: True
 * 
 * Note:
 * The string size will be in the range [1, 100].
 * 
 * 
 * 更快的方式：
 * https://discuss.leetcode.com/topic/103936/short-java-o-n-time-o-1-space-one-pass
 * 
 * public boolean checkValidString(String s) {
 *     int low = 0;
 *     int high = 0;
 *     for (int i = 0; i < s.length(); i++) {
 *         if (s.charAt(i) == '(') {
 *             low++;
 *             high++;
 *         } else if (s.charAt(i) == ')') {
 *             if (low > 0) {
 *                 low--;
 *             }
 *             high--;
 *         } else {
 *             if (low > 0) {
 *                 low--;
 *             }
 *             high++;
 *         }
 *         if (high < 0) {
 *             return false;
 *         }
 *     }
 *     return low == 0;
 * }
 * 
 * 
 * 这个思路也很不错，也会很快
 * https://discuss.leetcode.com/topic/104155/o-n-time-o-1-space-no-recursion-just-scan-from-left-and-then-scan-from-right/4
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let left = []
    let star = []
    
    let len = s.length
    let ret = true
    
    let pass = []
    
    for(let i=0; i<len; i++ ) {
        let char = s.charAt(i)
        
        if( char === '(' ) {
            left.push(i)
        }else if( char === '*' ) {
            star.push(i)
        }else if( char === ')' ) {
            if( left.length === 0 && star.length === 0 ) {
                ret = false
                break
            }
            
            pass.push( i )
            
            if( left.length !== 0 ) {
                pass.push( left.pop() )
            }else {
                pass.push( star.pop() )
            }
        }
    }
    
    
    let leftLen = left.length
    let starLen = star.length
    
    if( ret === false || leftLen > starLen ) {
        return false
    }
    
    // create new array
    let newStr = s.split('').filter(function (char, index) {
        return !pass.includes(index)
    }).join('')
    
    
    // check newStr
    let newLeft = 0;
    
    for(let i=0; i<newStr.length; i++) {
        let char = newStr[i]
        
        if( char === '(' ) {
            newLeft += 1
        }else { // is  '*'
            if( newLeft !== 0 ) {
                newLeft -= 1
            }
        }
    }
    
    // '(' too much
    if( newLeft !== 0 ) {
        return false
    }
    
    return true
};
