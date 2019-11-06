/**
 * Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
 * 
 * Example 1:
 * Input: "aba"
 * Output: True
 * Example 2:
 * Input: "abca"
 * Output: True
 * Explanation: You could delete the character 'c'.
 * Note:
 * The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    var leftPoint = 0
    var rightPoint = s.length - 1
    
    return walkStr(leftPoint, rightPoint, function (left, right) {
        return walkStr(left + 1, right) || walkStr(left, right - 1)
    })
    
    function walkStr(leftPoint, rightPoint, callback) {
        var ret = true;
        
        while (true) {
            var leftChar = s.charAt(leftPoint)
            var rightChar = s.charAt(rightPoint)
            
            if( leftPoint === rightPoint ) {
                break
            }
            
            if( leftPoint + 1 === rightPoint && leftChar === rightChar ) {
                break
            }
            
            if( leftChar === rightChar ) {
                leftPoint += 1
                rightPoint -= 1
            }else{
                if( typeof callback === 'function' ) {
                    ret = callback(leftPoint, rightPoint)
                }else{
                    ret = false
                }
                
                break
            }
        }
        
        return ret;
    }
};
