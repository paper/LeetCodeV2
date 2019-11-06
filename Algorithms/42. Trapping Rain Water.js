/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, 
 * compute how much water it is able to trap after raining.
 *
 * For example,
 * Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
 *
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
 * In this case, 6 units of rain water (blue section) are being trapped. 
 * Thanks Marcos for contributing this image!
 */

/**
 * todo:
 * 1）先找到当前height里面的最大山头的下标A
 * 2）再向左边寻找另外一个最大的山头，记住下标B。那么B和A之间小山就可以忽略了。继续从B开始，寻找左侧最大山头
 * 3）同理，右侧山头一样
 * 4）找到所有的“最高”山头后，进行山头直接的水量计算
 *
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  var len = height.length;
  if( len <= 1 ) {
    return 0;
  }

  var water = 0;
  var maxIndex = findMaxIndex(0, len-1);
  var hills = [maxIndex];

  findLeftMax(maxIndex);
  findRightMax(maxIndex);

  var hillsLen = hills.length;

  for(var i=0; i<hillsLen-1; i++) {
    water += getRainByHills(hills[i], hills[i+1]);
  }

  return water;

  // 找到从左下标->右下标，height 中的最大值的下标
  function findMaxIndex(left, right) {
    var maxIndex = left;
    var maxValue = height[left];

    var i = left;

    while (i <= right) {
      if( height[i] >= maxValue ) {
        maxValue = height[i];
        maxIndex = i;
      }
      i++;
    }

    return maxIndex;
  }

  // 不断寻找左边的最大值
  function findLeftMax(max_index) {
    var left_begin = 0;
    var left_end = max_index - 1;

    if( left_begin === left_end ) {
      hills.unshift(0);
    }else if( left_begin < left_end ){
      var left_max_index = findMaxIndex(left_begin, left_end);
      //console.log("left_max_index", left_max_index)
      hills.unshift(left_max_index);
      findLeftMax(left_max_index);
    }
  }

  // 不断寻找右边的最大值
  function findRightMax(max_index) {
    var right_begin = max_index + 1;
    var right_end = len - 1;

    if( right_begin === right_end ) {
      hills.push(len-1);
    }else if( right_begin < right_end ) {
      var right_max_index = findMaxIndex(right_begin, right_end);
      hills.push(right_max_index);
      findRightMax(right_max_index);
    }
  }

  /**
   * 2个山丘之间的水量
   * @param left 左山丘下标
   * @param right 右山丘下标
   */
  function getRainByHills(left, right) {
    var water = 0;

    var leftHeight  = height[left];
    var rightHeight = height[right];

    var w = right - left - 1;

    // 如果只有1个山，或者 2个山靠着，中间没有水
    if( w <= 0 ) return 0;

    // 水桶理论，以最短的高度为准
    var h = Math.min(leftHeight, rightHeight);

    // 理论最大水量
    water = w * h;

    // 减去里面的小山占据的空间，剩下的就是水了
    var i = left + 1;
    while (i < right ) {
      var x = Math.min(height[i], h); // 不能超过h是吧，如果有超过的，按照h来算
      water -= Math.min(height[i], h);
      i++;
    }

    return water;
  }

};
