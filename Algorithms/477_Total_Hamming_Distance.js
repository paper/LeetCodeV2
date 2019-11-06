/**
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 *
 * Now your job is to find the total Hamming distance between all pairs of the given numbers.
 *
 * Example:
 * Input: 4, 14, 2
 *
 * Output: 6
 *
 * Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
 * showing the four bits relevant in this case). So the answer will be:
 * HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
 * 
 * Note:
 *  Elements of the given array are in the range of 0 to 10^9
 *  Length of the array will not exceed 10^4.
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://discuss.leetcode.com/topic/72092/java-o-n-time-o-1-space/2
 * https://discuss.leetcode.com/topic/72099/share-my-o-n-c-bitwise-solution-with-thinking-process-and-explanation/2
 * 
 * 根据上面的参考，得到了理解：
 * 1，因为数字最大10^9，所以可以保证最长32位
 * 2，我们先看每个数字2进制的末尾数字（0或者1），当全是0时，那么汉明距离在这个位置的总和肯定是0（因为全部都相同）
 *    当有1个1时（l-1个0），那么可以想到，这个位置得到的汉明距离之和是 1*(l-1) [l是nums的长度]
 *    当有2个1时（l-2个0），这个位置得到的汉明距离之和是 2*(l-2)
 *    当有3个1时（l-3个0），这个位置得到的汉明距离之和是 3*(l-3)
 *    ...
 *    当有k个1时（l-k个0），这个位置得到的汉明距离之和是 k*(l-k)
 * 3，所以我们只要计算每个数组在相同位置数字1的个数即可
 * 4，通过位移法，和 1 进行 & 操作，可以马上判断最右一位是不是1
 * 5，等到所有数字每一位的汉明数时，再相加即可
 */
var totalHammingDistance = function(nums) {
    var len = nums.length;
    var ret = 0;

    if( len <= 1 ) return ret;

    for(var j=0; j<32; j++) {
        var countOne = 0; // 整个nums里面的num，当前第j的位置，有多少个1
        
        for(var i=0; i<len; i++) {
            countOne += (nums[i] >> j) & 1; // 通过位移和1进行&操作，判断最后一个数字是不是1
        }
        
        ret += countOne * (len - countOne);
    }

    return ret;
};

