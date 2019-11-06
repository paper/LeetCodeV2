/**
 * Given an integer array with even length, 
 * where different numbers in this array represent different kinds of candies. 
 * Each number means one candy of the corresponding kind. 
 * You need to distribute these candies equally in number to brother and sister. 
 * Return the maximum number of kinds of candies the sister could gain.
 *
 * Example 1:
 *  Input: candies = [1,1,2,2,3,3]
 *  Output: 3
 *  Explanation:
 *  There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
 *  Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too.
 *  The sister has three different kinds of candies.
 * 
 * Example 2:
 *  Input: candies = [1,1,2,3]
 *  Output: 2
 *  Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1].
 *  The sister has two different kinds of candies, the brother has only one kind of candies.
 * 
 * Note:
 *  The length of the given array is in range [2, 10,000], and will be even.
 *  The number in given array is in range [-100,000, 100,000].
 */

/**
 * 问题其实就是问 candies 数组里面有多少种糖果？
 * 1）如果种类超过一半，那么就返回总糖果的一半（因为还有1半要给弟弟）
 * 2）如果种类没有超过一半，那么就是返回种类的值。
 * 
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  var len = candies.length;
  var half = len/2;
  
  candies.sort(function (a, b) {
    return a - b;
  });

  // 妹妹的糖果种类
  var sister = 1;
  var temp = candies[0];

  for(var i=1; i<len; i++) {
    var candy = candies[i];

    if( candy !== temp ) {
      sister += 1;
      temp = candy;
    }

    if( sister >= half ) {
      return half;
    }
  }

  return sister;
};
