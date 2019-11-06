/**
 * Created by paper on 15/7/24.
 * 
 * Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 * 
 * Given a string, determine if it is a palindrome, 
 * considering only alphanumeric characters and ignoring cases.
 * 
 * For example:
 * "A man, a plan, a canal: Panama" is a palindrome.
 * "race a car" is not a palindrome.
 * 
 * Note:
 * Have you consider that the string might be empty? 
 * This is a good question to ask during an interview.
 * For the purpose of this problem, we define empty string as valid palindrome.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if(s === "" || s.length === 1) return true;

  s = s.toLowerCase();
  s = s.replace(/[^0-9a-z]/g, "");

  var len = s.length;
  var half_len = parseInt(len/2, 10);
  var r = s.split("");

  for(var i = 0; i < half_len; i++){
    if( r[i] !== r[len - 1 - i] ){
      return false;
    }
  }

  return true;
};