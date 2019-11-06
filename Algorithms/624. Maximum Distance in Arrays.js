/**
 * Given m arrays, and each array is sorted in ascending order. 
 * Now you can pick up two integers from two different arrays (each array picks one) and calculate the distance. 
 * We define the distance between two integers a and b to be their absolute difference |a-b|. 
 * Your task is to find the maximum distance.
 *
 * Example 1:
 * Input:
 * [[1,2,3],
 * [4,5],
 * [1,2,3]]
 * Output: 4
 * Explanation:
 * One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.
 * Note:
 * Each given array will have at least 1 number. There will be at least two non-empty arrays.
 * The total number of the integers in all the m arrays will be in the range of [2, 10000].
 * The integers in the m arrays will be in the range of [-10000, 10000].
 */

/**
 * 更简单的一个思路就是：
 * 2个2个数组进行对比，保存最大的距离 和 最小值，最大值
 *
 * 所以思考问题一定要先从最简单的开始。最简单的就是 arrays 里面只有2个数组，怎么解？
 * 然后 里面 只有3个数组怎么解？。。。依次类推后，就会发现规律了！这种由简到难的思路一定要深刻印在脑海里！
 *
 * 我下面的代码的思路也是可以的，但明显就复杂了，把数组混在一起，就不得不考虑取值在一个数组，还是在2个数组
 *
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {

  var v = getValue(arrays);
  
  if( v.min_number > 1 || v.max_number > 1 ) {
    return v.MAX - v.MIN;
  }

  // min_number === 1 && max_number === 1
  // 如果只有一个最大值，和一个最小值，但它们属于不同的数组，最大和最小相减即可
  if( v.MIN_INDEX !== v.MAX_INDEX ) {
    return v.MAX - v.MIN;
  }

  // 如果最大和最小值都在同一个数组里面
  var v2 = getValue(arrays, v.MIN_INDEX);
  
  return Math.max( v.MAX - v2.MIN, v2.MAX - v.MIN );

  function getValue(arrays, except_index) {
    except_index = typeof except_index === 'undefined' ? -1 : except_index;

    var MIN = Number.MAX_VALUE;       // 最小值
    var MAX = -1 * Number.MAX_VALUE;  // 最大值

    var min_number = 1; // 最小值的个数
    var max_number = 1; // 最大值的个数

    var MIN_INDEX = -1; // 最小值的下标
    var MAX_INDEX = -1; // 最大值的下标

    arrays.forEach(function (r, i) {
      if( i !== except_index ) {
        var min = r[0];
        var max = r[r.length - 1];

        if( min < MIN ) {
          MIN = min;
          min_number = 1;
          MIN_INDEX = i;
        }else if( min === MIN ) {
          min_number += 1;
        }

        if( max > MAX ) {
          MAX = max;
          max_number = 1;
          MAX_INDEX = i;
        }else if( max === MAX ) {
          max_number += 1;
        }
      }
    });

    return {
      MIN: MIN,
      MIN_INDEX: MIN_INDEX,
      min_number: min_number,

      MAX: MAX,
      MAX_INDEX: MAX_INDEX,
      max_number: max_number
    };
  }

};


