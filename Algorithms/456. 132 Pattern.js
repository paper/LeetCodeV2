/**
 * Given a sequence of n integers a1, a2, ..., an, a 132 pattern is a subsequence ai, aj,ak such that i < j < k and ai < ak < aj. 
 * Design an algorithm that takes a list of n numbers as input and checks whether there is a 132 pattern in the list.
 * 
 * Note: n will be less than 15,000.
 *
 * Example 1:
 * Input: [1, 2, 3, 4]
 *
 * Output: False
 *
 * Explanation: There is no 132 pattern in the sequence.
 * Example 2:
 * Input: [3, 1, 4, 2]
 *
 * Output: True
 *
 * Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
 * Example 3:
 * Input: [-1, 3, 2, 0]
 *
 * Output: True
 *
 * Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    var len = nums.length;

    if( len < 3 ) return false;
    
    var i = 0;
    var j = 1;
    var k = 2;

    while (i < len - 2 && j < len - 1 && k < len) {
        var ai = nums[i];
        var aj = nums[j];
        var ak = nums[k];

        if( ai < ak && ai < aj && ak < aj ) {
            return true;
        }

        // 如果 ai 大于 aj，那么 i 就往前移动一格，因为如果ai的位置都有132的话，aj 肯定有
        // 缩小检查范围
        if( ai >= aj ) {
            i += 1;
            j = i+1;
            k = j+1;
        }else{
            // 如果 aj 小于 ak ，那么 j 就往前走一格。因为aj都有132的话，那么ak肯定有
            // 缩小检查范围
            if( aj <= ak ) {
                j += 1;
                k = j+1;
            }else{
                // 如果 k 已经都到底了，前面2个各往前一步
                if( k === len - 1 ) {
                    i += 1;
                    j += 1;
                }else{
                    k += 1;
                }
            }
        }

    }

    return false;
};

