/**
 * Given a non-empty array of integers, return the third maximum number in this array. 
 * If it does not exist, return the maximum number. The time complexity must be in O(n).
 *
 * Example 1:
 * Input: [3, 2, 1]
 *
 * Output: 1
 *
 * Explanation: The third maximum is 1.
 * Example 2:
 * Input: [1, 2]
 *
 * Output: 2
 *
 * Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
 * Example 3:
 * Input: [2, 2, 3, 1]
 *
 * Output: 1
 *
 * Explanation: Note that the third maximum here means the third maximum distinct number.
 * Both numbers with value 2 are both considered as second maximum.
 * */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var MIN_VALUE = -Number.MAX_VALUE;
    var list = [MIN_VALUE, MIN_VALUE, MIN_VALUE]; // list[0]最大，list[0]第二, list[0]第三

    for(var i=0; i<nums.length; i++) {
        insertList(nums[i]);
    }

    return list[2] === MIN_VALUE ? list[0] : list[2];

    function insertList(num) {
        if( num === list[0] || num === list[1] || num === list[2] ) return;

        if( num > list[0] ) {
            list[2] = list[1];
            list[1] = list[0];
            list[0] = num;
        }else if( num > list[1] ) {
            list[2] = list[1];
            list[1] = num;
        }else if( num > list[2] ) {
            list[2] = num;
        }
    }
};
