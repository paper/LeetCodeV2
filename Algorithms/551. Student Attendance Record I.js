/**
 * You are given a string representing an attendance record for a student. The record only contains the following three characters:
 * 
 * 'A' : Absent.
 * 'L' : Late.
 * 'P' : Present.
 * A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).
 * 
 * You need to return whether the student could be rewarded according to his attendance record.
 * 
 * Example 1:
 * Input: "PPALLP"
 * Output: True
 * Example 2:
 * Input: "PPALLL"
 * Output: False
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  if( s.indexOf('LLL') > -1 ) {
    return false
  }
  
  let len = s.length
  let A_count = 0
  
  for(let i = 0; i < len; i++) {
    let char = s.charAt(i)
    
    if( char === 'A') {
      A_count += 1
    }
    
    if( A_count >= 2 ) {
      return false
    }
  }
  
  return true
};