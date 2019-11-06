/**
 * Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. 
 * In other words, one of the first string's permutations is the substring of the second string.
 *
 * Example 1:
 * Input:s1 = "ab" s2 = "eidbaooo"
 * Output:True
 * Explanation: s2 contains one permutation of s1 ("ba").
 * Example 2:
 * Input:s1= "ab" s2 = "eidboaoo"
 * Output: False
 * Note:
 * The input strings only contain lower case letters.
 * The length of both given strings is in range [1, 10,000].
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  var l1 = s1.length;
  var l2 = s2.length;

  if( l1 > l2 ) return false;

  var s1_hash = getStrHash(s1);
  var s2_hash = getStrHash(s2.slice(0, l1));

  if( isEqualHash(s1_hash, s2_hash) ) {
    return true;
  }

  for(var i=1, j=i+l1-1; j<l2; i++, j++) {
    // update s2_hash
    var before_i_char = s2.charAt(i-1);
    var after_j_char = s2.charAt(j);

    s2_hash[before_i_char] -= 1;

    if( s2_hash[before_i_char] === 0 ) {
      delete s2_hash[before_i_char];
    }

    s2_hash[after_j_char] = s2_hash[after_j_char] ? s2_hash[after_j_char] += 1 : 1;

    if( isEqualHash(s1_hash, s2_hash) ) {
      return true;
    }
  }

  return false;

  function getStrHash(str) {
    var hash = {};
    var l = str.length;

    for(var i=0; i<l; i++) {
      var char = str.charAt(i);
      hash[char] = hash[char] ? hash[char] + 1 : 1;
    }

    return hash;
  }

  function isEqualHash(hash1, hash2) {
    var keys1 = Object.keys(hash1);
    var keys2 = Object.keys(hash2);

    if( keys1.length !== keys2.length ) {
      return false;
    }

    for(var i in hash1) {
      if( hash1[i] !== hash2[i] ) {
        return false;
      }
    }

    return true;
  }

};
